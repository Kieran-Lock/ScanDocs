from __future__ import annotations
from dataclasses import dataclass
from types import FunctionType


@dataclass(frozen=True, slots=True)
class Function:
    name: str

    @classmethod
    def from_function(cls, function: FunctionType) -> Function:
        return cls(function.__name__)
