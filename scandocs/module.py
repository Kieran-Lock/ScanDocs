from __future__ import annotations
from dataclasses import dataclass
from inspect import getmembers, isclass, isfunction
from types import ModuleType
from .class_ import Class
from .function import Function


@dataclass(frozen=True, slots=True)
class Module:
    name: str
    classes: list[Class]
    functions: list[Function]

    @classmethod
    def from_module(cls, module: ModuleType) -> Module:
        return cls(
            module.__name__,
            [Class.from_class(class_[1])
             for class_ in getmembers(
                module, predicate=lambda member: isclass(member) and cls.is_user_defined(member, module)
            )],
            [Function.from_function(subroutine[1])
             for subroutine in getmembers(
                module, predicate=lambda member: isfunction(member) and cls.is_user_defined(member, module)
            )]
        )

    @staticmethod
    def is_user_defined(member, module: ModuleType) -> bool:
        return member.__module__ == module.__name__
