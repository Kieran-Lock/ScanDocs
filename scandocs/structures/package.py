from __future__ import annotations
from dataclasses import dataclass
from types import ModuleType, FunctionType
from inspect import getmembers, ismodule
from json import load
from .module import Module


from inspect import isclass, isfunction


@dataclass(frozen=True)
class Package:
    name: str
    modules: list[Module]

    @classmethod
    def from_module(cls, package: ModuleType, declared: set[type | FunctionType] | None = None) -> Package:
        if not cls.is_package(package):
            raise TypeError("Can't build documentation for non-package") from None
        module_lookup = {
            True: cls,
            False: Module
        }

        if declared is None:
            declared = cls.get_declared(package)
        else:
            declared = declared.intersection(cls.get_declared(package))

        return cls(
            package.__name__,
            [module_lookup.get(cls.is_package(module[1])).from_module(module[1], declared)
             for module in getmembers(package, predicate=ismodule)]
        )

    @staticmethod
    def is_package(package: ModuleType) -> bool:
        return package.__package__ == package.__name__

    @staticmethod
    def get_declared(package: ModuleType) -> set[type | FunctionType]:
        return set(member[1] for member in getmembers(
            package,
            predicate=lambda member: isclass(member) or isfunction(member)
        ))

    def serialize(self):
        return {
            "component": "Package",
            "meta": {
                self.name
            },
            "children": [
                [module.serialize() for module in self.modules]
            ]
        }
