from __future__ import annotations
from dataclasses import dataclass
from types import ModuleType
from inspect import getmembers, ismodule
from .module import Module


@dataclass(frozen=True, slots=True)
class Package:
    name: str
    modules: list[Module]

    @classmethod
    def from_module(cls, package: ModuleType) -> Package:
        if not cls.is_package(package):
            raise TypeError("Can't build documentation for non-package") from None
        module_lookup = {
            True: cls,
            False: Module
        }
        return cls(
            package.__name__,
            [module_lookup.get(cls.is_package(module[1])).from_module(module[1])
             for module in getmembers(package, predicate=ismodule)]
        )

    @staticmethod
    def is_package(package: ModuleType) -> bool:
        return package.__package__ == package.__name__
