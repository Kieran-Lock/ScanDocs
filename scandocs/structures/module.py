from __future__ import annotations
from dataclasses import dataclass
from inspect import getmembers, isclass, isfunction
from types import ModuleType, FunctionType
from .class_ import Class
from .subroutine import Subroutine


@dataclass(frozen=True, slots=True)
class Module:
    name: str
    classes: list[Class]
    subroutines: list[Subroutine]

    @classmethod
    def from_module(cls, module: ModuleType, declared: set[type | FunctionType]) -> Module:
        return cls(
            module.__name__,
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
