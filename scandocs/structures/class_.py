from __future__ import annotations
from dataclasses import dataclass
from typing import Callable
from .python_structure import PythonStructure
from .serialized import Serialized
from .structure import Structure
from .subroutine import Subroutine


@dataclass(frozen=True, slots=True)
class Class(PythonStructure[type]):
    methods: list[Subroutine]

    @classmethod
    def from_class(cls, class_: type, is_declared: bool) -> Class:
        name = class_.__name__
        is_dunder = name.startswith("__")
        return cls(
            name,
            (not is_dunder) and name.startswith("_"),
            is_dunder,
            is_declared,
            cls.get_source(class_),
            cls.get_signature(class_),
            [
                Subroutine.from_subroutine(
                    getattr(class_, method),
                    is_declared
                )
                for method in class_.__dict__ if callable(getattr(class_, method))
            ]
        )

    def serialize(self, child_filter: Callable[[Structure], bool] = lambda _: True) -> Serialized:
        return Serialized(
            "Class",
            {
                "name": self.name,
                "source": self.source,
                "signature": str(self.signature)
            },
            {
                "methods": [
                    method.serialize(child_filter=child_filter) for method in self.methods if child_filter(method)
                ]
            }
        )
