from __future__ import annotations
from dataclasses import dataclass
from types import FunctionType
from inspect import Signature
from typing import Callable
from .python_structure import PythonStructure
from .serialized import Serialized
from .structure import Structure


@dataclass(frozen=True, slots=True)
class Subroutine(PythonStructure[FunctionType]):
    is_lambda: bool

    @classmethod
    def from_subroutine(cls, subroutine: FunctionType, is_declared: bool) -> Subroutine:
        name = subroutine.__name__
        is_dunder = name.startswith("__")
        return cls(
            name,
            (not is_dunder) and name.startswith("_"),
            is_dunder,
            cls.get_source(subroutine),
            is_declared,
            cls.get_signature(subroutine),
            name == "<lambda>"
        )

    def get_return_type(self) -> str | None:
        if self.signature.return_annotation in (Signature.empty, "_empty"):
            return ""
        elif self.signature.return_annotation in (None, "None"):
            return
        return str(self.signature.return_annotation)

    def serialize(self, child_filter: Callable[[Structure], bool] = lambda _: True) -> Serialized:
        return Serialized(
            "Subroutine",
            {
                "name": self.name,
                "source": self.source,
                "signature": str(self.signature),
                "returnType": self.get_return_type()
            },
            {}
        )
