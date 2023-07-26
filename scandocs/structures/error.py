from __future__ import annotations
from dataclasses import dataclass
from typing import Callable
from docstring_parser import DocstringRaises
from .serialized import Serialized
from .structure import Structure


@dataclass(frozen=True, slots=True)
class Error(Structure):
    name: str
    description: str

    @classmethod
    def from_docstring_raises(cls, raises: DocstringRaises) -> Error:
        return cls(
            raises.type_name,
            raises.description
        )

    def serialize(self, child_filter: Callable[[Structure], bool] = lambda _: True) -> Serialized:
        return Serialized(
            "Exception",
            {
                "name": self.name,
                "description": self.description
            },
            {}
        )
