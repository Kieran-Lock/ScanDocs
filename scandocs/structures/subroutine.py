from __future__ import annotations
from dataclasses import dataclass
from types import FunctionType


@dataclass(frozen=True, slots=True)
class Subroutine:
    name: str
    declared: bool

    @classmethod
    def from_subroutine(cls, subroutine: FunctionType, declared: bool) -> Subroutine:
        return cls(subroutine.__name__, declared)

    def serialize(self):
        return {
            "component": "Subroutine",
            "meta": {
                "name": self.name
            },
            "children": [
                []
            ]
        }
