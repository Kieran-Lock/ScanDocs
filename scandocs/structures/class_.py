from __future__ import annotations
from dataclasses import dataclass
from .subroutine import Subroutine


@dataclass(frozen=True, slots=True)
class Class:
    name: str
    declared: bool
    methods: list[Subroutine]

    @classmethod
    def from_class(cls, class_: type, declared: bool) -> Class:
        return cls(
            class_.__name__,
            declared,
            [Subroutine(method, declared) for method in class_.__dict__ if callable(getattr(class_, method))]
        )
