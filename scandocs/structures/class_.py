from __future__ import annotations
from dataclasses import dataclass
from inspect import getsource, Signature, signature
from .subroutine import Subroutine


@dataclass(frozen=True, slots=True)
class Class:
    name: str
    declared: bool
    methods: list[Subroutine]
    source: str
    signature: Signature | None

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
            cls.get_method_source(class_),
            cls.get_method_signature(class_)
        )

    def serialize(self):
        return {
            "component": "Class",
            "meta": {
                "name": self.name,
                "source": self.source,
                "signature": str(self.signature)
            },
            "children": [
                [method.serialize() for method in self.methods]
            ]
        }

    @staticmethod
    def get_method_source(method: type) -> str | None:
        try:
            return getsource(method)
        except OSError:
            return  # Can't be provided

    @staticmethod
    def get_method_signature(method: type) -> Signature | None:
        try:
            return signature(method)
        except ValueError:
            return  # Can't be provided
