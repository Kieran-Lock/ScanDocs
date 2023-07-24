from __future__ import annotations
from dataclasses import dataclass
from inspect import getsource
from .subroutine import Subroutine


@dataclass(frozen=True, slots=True)
class Class:
    name: str
    declared: bool
    methods: list[Subroutine]
    source: str

    @classmethod
    def from_class(cls, class_: type, is_declared: bool) -> Class:
        return cls(
            class_.__name__,
            is_declared,
            [
                Subroutine.from_subroutine(
                    getattr(class_, method),
                    is_declared
                )
                for method in class_.__dict__ if callable(getattr(class_, method))
            ],
            getsource(class_)
        )

    def serialize(self):
        return {
            "component": "Class",
            "meta": {
                "name": self.name,
                "source": self.source
            },
            "children": [
                [method.serialize() for method in self.methods]
            ]
        }
