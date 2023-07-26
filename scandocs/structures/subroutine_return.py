from __future__ import annotations
from dataclasses import dataclass
from inspect import Signature
from typing import Callable
from docstring_parser import DocstringReturns
from .serialized import Serialized
from .structure import Structure


@dataclass(frozen=True, slots=True)
class SubroutineReturn(Structure):
    annotation: str | None
    is_yield: bool

    @classmethod
    def from_docstring_returns(cls, returns: DocstringReturns) -> SubroutineReturn:
        return cls(
            returns.return_name,
            returns.type_name,
            returns.is_generator
        )

    def serialize(self, child_filter: Callable[[Structure], bool] = lambda _: True) -> Serialized:
        return Serialized(
            "Parameter",
            {
                "name": self.name,
                "annotation": self.annotation,
                "isYield": self.is_yield
            },
            {}
        )

    @staticmethod
    def get_annotation(annotation: object) -> str | None:
        if annotation in (Signature.empty, "_empty"):
            return
        return annotation.__name__ if isinstance(annotation, type) else str(annotation)
