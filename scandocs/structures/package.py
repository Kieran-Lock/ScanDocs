from __future__ import annotations
from dataclasses import dataclass
from types import ModuleType, FunctionType
from inspect import getmembers, ismodule, isclass, isfunction
from typing import Callable
from .docstring import Docstring
from .structure import Structure
from .module import Module
from .serialized import Serialized
from .source_structure import SourceStructure


@dataclass(frozen=True)
class Package(SourceStructure[ModuleType]):
    subpackages: list[Package]
    modules: list[Module]

    @classmethod
    def from_module(cls, package: ModuleType, declared: set[type | FunctionType] | None = None) -> Package:
        if not cls.is_package(package):
            raise TypeError("Can't build documentation for non-package") from None

        if declared is None:
            declared = cls.get_declared(package)
        else:
            declared = declared.intersection(cls.get_declared(package))

        name = package.__name__.split(".")[-1]
        is_dunder = name.startswith("__")
        docstring = cls.get_docstring(package)
        try:
            substructures = package.__all__
        except AttributeError:  # __all__ index not defined
            substructures = [substructure[1] for substructure in getmembers(package, predicate=ismodule)]

        return cls(
            name,
            (not is_dunder) and name.startswith("_"),
            is_dunder,
            cls.get_source(package),
            Docstring.from_docstring(docstring, name) if docstring else None,
            [cls.from_module(structure, declared) for structure in substructures if cls.is_package(structure)],
            [Module.from_module(structure, declared) for structure in substructures if not cls.is_package(structure)]
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

    def serialize(self, child_filter: Callable[[Structure], bool] = lambda _: True) -> Serialized:
        return Serialized(
            "Package",
            {
                "name": self.name,
                "source": self.source,
                "docstring": self.docstring.serialize(child_filter=child_filter).to_json() if self.docstring else None
            },
            {
                "subpackages": [
                    subpackage.serialize(
                        child_filter=child_filter) for subpackage in self.subpackages if child_filter(subpackage)
                ],
                "modules": [
                    module.serialize(child_filter=child_filter) for module in self.modules if child_filter(module)
                ]
            }
        )
