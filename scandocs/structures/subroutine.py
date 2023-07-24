from __future__ import annotations
from dataclasses import dataclass
from types import FunctionType
from inspect import getsource


@dataclass(frozen=True, slots=True)
class Subroutine:
    name: str
    is_declared: bool
    source: str | None
    is_private: bool
    is_dunder: bool
    is_lambda: bool

    @classmethod
    def from_subroutine(cls, subroutine: FunctionType, is_declared: bool) -> Subroutine:
        name = subroutine.__name__
        is_dunder = name.startswith("__")
        return cls(
            name,
            is_declared,
            cls.get_method_source(subroutine),
            (not is_dunder) and name.startswith("_"),
            is_dunder,
            name == "<lambda>"
        )

    def serialize(self):
        return {
            "component": "Subroutine",
            "meta": {
                "name": self.name,
                "source": self.source
            },
            "children": [
                []
            ]
        }

    @staticmethod
    def get_method_source(method: FunctionType) -> str | None:
        try:
            return getsource(method)
        except OSError:
            return  # Non-Python implementation
