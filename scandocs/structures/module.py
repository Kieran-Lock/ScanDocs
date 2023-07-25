from __future__ import annotations
from dataclasses import dataclass
from inspect import getmembers, isclass, isfunction
from types import ModuleType, FunctionType
from typing import Callable
from .class_ import Class
from .structure import Structure
from .subroutine import Subroutine


@dataclass(frozen=True, slots=True)
class Module(Structure):
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

    def serialize(self, child_filter: Callable[[Structure], bool] = lambda _: True) -> dict:
        return {
            "component": "Module",
            "meta": {
                "name": self.name
            },
            "children": [
                [class_.serialize(child_filter=child_filter) for class_ in self.classes],
                [subroutine.serialize(child_filter=child_filter)
                 for subroutine in self.subroutines if child_filter(subroutine)]
            ]
        }
