from __future__ import annotations
from dataclasses import dataclass
from typing import Callable
from .serialized import Serialized
from .structure import Structure


@dataclass(frozen=True, slots=True)
class Error(Structure[str]):
    @classmethod
    def from_exception_name(cls, exception_name: str) -> Error:
        is_dunder = exception_name.startswith("__")
        return cls(
            exception_name,
            (not is_dunder) and exception_name.startswith("_"),
            is_dunder,
            f"raise {exception_name}"
        )

    def serialize(self, child_filter: Callable[[Structure], bool] = lambda _: True) -> Serialized:
        return Serialized(
            "Exception",
            {
                "name": self.name
            },
            {}
        )
