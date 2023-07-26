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


@dataclass(frozen=True, slots=True)
class Module(SourceStructure[ModuleType]):
    classes: list[Class]
    subroutines: list[Subroutine]

    @classmethod
    def from_module(cls, module: ModuleType, declared: set[type | FunctionType]) -> Module:
        name = module.__name__.split(".")[-1]
        is_dunder = name.startswith("__")
        return cls(
            name,
            (not is_dunder) and name.startswith("_"),
            is_dunder,
            cls.get_source(module),
            Docstring.from_docstring(module.__doc__, name),
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
        return member.__module__ == module.__name__

    def serialize(self, child_filter: Callable[[Structure], bool] = lambda _: True) -> Serialized:
        return Serialized(
            "Module",
            {
                "name": self.name,
                "source": self.source
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
