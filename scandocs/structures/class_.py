from __future__ import annotations
from dataclasses import dataclass
from typing import Callable
from .docstring import Docstring
from .structure import Structure
from .signature_structure import SignatureStructure
from .serialized import Serialized
from .subroutine import Subroutine


@dataclass(frozen=True, slots=True)
class Class(SignatureStructure[type]):
    methods: list[Subroutine]

    @classmethod
    def from_class(cls, class_: type, is_declared: bool) -> Class:
        name = class_.__name__
        is_dunder = name.startswith("__")
        return cls(
            name,
            (not is_dunder) and name.startswith("_"),
            is_dunder,
            cls.get_source(class_),
            Docstring.from_docstring(class_.__doc__, name),
            is_declared,
            cls.get_signature(class_),
            [
                Subroutine.from_subroutine(
                    getattr(class_, method),
                    is_declared
                )
                for method in class_.__dict__ if callable(getattr(class_, method))
            ]
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
                "parameters": self.initializer.serialize(child_filter=child_filter).meta.get("parameters")
            },
            {
                "methods": [
                    method.serialize(child_filter=child_filter) for method in self.methods if child_filter(method)
                ]
            }
        )
