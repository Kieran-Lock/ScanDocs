"""
The module containing the dataclass representing Python modules (.py files).
"""

from __future__ import annotations
from dataclasses import dataclass
from inspect import getmembers, isclass, isfunction
from types import ModuleType, FunctionType
from typing import Callable
from .docstring import Docstring
from .structure import Structure
from .class_ import Class
from .serialized import Serialized
from .source_structure import SourceStructure
from .subroutine import Subroutine
from .searchable_structure import SearchableStructure


@dataclass(frozen=True, slots=True)
class Module(SourceStructure[ModuleType], SearchableStructure):
    """
    The dataclass representing Python modules (.py files).
    """
    classes: list[Class]
    subroutines: list[Subroutine]

    @property
    def search_terms(self) -> str:
        return (
            f"{self.name}\n{self.docstring.short_description if self.docstring else ''}"
            f"\n{self.docstring.long_description if self.docstring else ''}"
        )

    @classmethod
    def from_module(cls, module: ModuleType, declared: set[type | FunctionType]) -> Module:
        """
        Forms an instance of this class from an imported module.

        :param module: The module to form an object from
        :param declared: A set of structures that have already been declared before this module was loaded
        :return: A corresponding instance of this class
        """
        name = module.__name__.split(".")[-1]
        is_dunder = name.startswith("__")
        docstring = cls.get_docstring(module)
        return cls(
            name,
            (not is_dunder) and name.startswith("_"),
            is_dunder,
            cls.get_source(module),
            Docstring.from_docstring(docstring) if docstring else None,
            [Class.from_class(class_[1], class_[1] in declared)
             for class_ in getmembers(
                module, predicate=lambda member: isclass(member) and cls.is_user_defined(member, module)
            )],
            [Subroutine.from_subroutine(subroutine[1], subroutine[1] in declared)
             for subroutine in getmembers(
                module, predicate=lambda member: isfunction(member) and cls.is_user_defined(member, module)
            )]
        )

    @staticmethod
    def is_user_defined(member, module: ModuleType) -> bool:
        """
        Determines whether a given member is in-built or not within a given module.

        :param member: The member to inspect
        :param module: the module the member was declared within
        :return: Whether the member was defined in the given module, or imported / in-built
        """
        return member.__module__ == module.__name__

    def serialize(self, child_filter: Callable[[Structure], bool] = lambda _: True) -> Serialized:
        return Serialized(
            "Module",
            {
                "name": self.name,
                "source": self.source,
                "shortDescription": self.docstring.short_description if self.docstring else None,
                "longDescription": self.docstring.long_description if self.docstring else None,
                "searchTerms": self.search_terms
            },
            {
                "classes": [
                    class_.serialize(child_filter=child_filter) for class_ in self.classes
                ],
                "subroutines": [
                    subroutine.serialize(
                        child_filter=child_filter) for subroutine in self.subroutines if child_filter(subroutine)
                ]
            }
        )
