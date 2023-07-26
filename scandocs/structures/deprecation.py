from __future__ import annotations
from dataclasses import dataclass
from typing import Callable
from docstring_parser import DocstringDeprecated
from .serialized import Serialized
from .structure import Structure


@dataclass(frozen=True, slots=True)
class Deprecation(Structure):
    description: str
    version: str

    @classmethod
    def from_docstring_deprecated(cls, deprecation: DocstringDeprecated) -> Deprecation:
        return cls(
            f"Deprecated in version {deprecation.version}",
            deprecation.description,
            deprecation.version
        )

    def serialize(self, child_filter: Callable[[Structure], bool] = lambda _: True) -> Serialized:
        return Serialized(
            "Deprecation",
            {
                "description": self.description,
                "version": self.version
            },
            {}
        )
