from __future__ import annotations
from dataclasses import dataclass
from types import ModuleType, FunctionType
from inspect import getmembers, ismodule, isclass, isfunction
from typing import Callable
from .module import Module
from .structure import Structure


@dataclass(frozen=True)
class Package(Structure):
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

        name = package.__name__.split(".")[-1]
        is_dunder = name.startswith("__")
        return cls(
            name,
            (not is_dunder) and name.startswith("_"),
            is_dunder,
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

    def serialize(self, child_filter: Callable[[Structure], bool] = lambda _: True) -> dict:
        return {
            "component": "Package",
            "meta": {
                "name": self.name
            },
            "children": [
                [module.serialize(child_filter=child_filter) for module in self.modules if child_filter(module)]
            ]
        }
