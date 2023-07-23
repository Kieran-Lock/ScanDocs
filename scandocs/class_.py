from __future__ import annotations
from dataclasses import dataclass


@dataclass(frozen=True, slots=True)
class Class:
    name: str

    @classmethod
    def from_class(cls, class_: type) -> Class:
        return cls(class_.__name__)
