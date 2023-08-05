"""
The module containing the dataclass representing Python classes.
"""

from __future__ import annotations
from abc import ABCMeta
from dataclasses import dataclass
from typing import Callable
from .docstring import Docstring
from .structure import Structure
from .signature_structure import SignatureStructure
from .serialized import Serialized
from .subroutine import Subroutine
from .searchable_structure import SearchableStructure
from ..tags import Deprecated


@dataclass(frozen=True, slots=True)
class Class(SignatureStructure[type], SearchableStructure):
    """
    The dataclass representing Python classes.
    """
    methods: list[Subroutine]
    deprecation: Deprecated | None
    is_abstract: bool

    @property
    def search_terms(self) -> str:
        return (
            f"{self.name}\n{self.docstring.short_description if self.docstring else ''}"
            f"\n{self.docstring.long_description if self.docstring else ''}"
        )

    @classmethod
    def from_class(cls, class_: type, is_declared: bool) -> Class:
        name = class_.__name__
        is_dunder = name.startswith("__")
        docstring = cls.get_docstring(class_)
        try:
            abstract_methods = class_.__abstractmethods__
        except AttributeError:
            abstract_methods = []
        return cls(
            name,
            (not is_dunder) and name.startswith("_"),
            is_dunder,
            cls.get_source(class_),
            Docstring.from_docstring(docstring) if docstring else None,
            is_declared,
            cls.get_signature(class_),
            [
                Subroutine.from_subroutine(
                    getattr(class_, method),
                    is_declared,
                    is_abstract=method in abstract_methods
                )
                for method in class_.__dict__ if callable(getattr(class_, method))
            ],
            Deprecated.get_tag(class_),
            isinstance(class_, ABCMeta)
        )

    @property
    def initializer(self) -> Subroutine:
        return next(filter(
            lambda method: method.name == "__init__", self.methods), Subroutine.from_subroutine(object.__init__, False)
        )

    def serialize(self, child_filter: Callable[[Structure], bool] = lambda _: True) -> Serialized:
        return Serialized(
            "Class",
            {
                "name": self.name,
                "source": self.source,
                "signature": str(self.signature),
                "parameters": self.initializer.serialize(child_filter=child_filter).meta.get("parameters"),
                "shortDescription": self.docstring.short_description if self.docstring else None,
                "longDescription": self.docstring.long_description if self.docstring else None,
                "deprecation": self.deprecation.json_serialize() if self.deprecation else None,
                "isAbstract": self.is_abstract,
                "searchTerms": self.search_terms
            },
            {
                "methods": [
                    method.serialize(child_filter=child_filter) for method in self.methods if child_filter(method)
                ]
            }
        )
