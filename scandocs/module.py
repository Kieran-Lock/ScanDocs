from __future__ import annotations
from dataclasses import dataclass
from inspect import getmembers
from types import ModuleType


@dataclass(frozen=True, slots=True)
class Module:
    name: str

    @classmethod
    def from_module(cls, module: ModuleType) -> Module:
        return cls(module.__name__)
