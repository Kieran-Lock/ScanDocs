from __future__ import annotations
from dataclasses import dataclass
from inspect import Parameter, Signature
from typing import Callable
from .serialized import Serialized
from .structure import Structure


@dataclass(frozen=True, slots=True)
class Parameter(Structure[Parameter]):
    annotation: object

    @classmethod
    def from_parameter(cls, parameter: Parameter) -> Parameter:
        is_dunder = parameter.name.startswith("__")
        return cls(
            parameter.name,
            (not is_dunder) and parameter.name.startswith("_"),
            is_dunder,
            str(parameter),
            parameter.annotation
        )

    def serialize(self, child_filter: Callable[[Structure], bool] = lambda _: True) -> Serialized:
        return Serialized(
            "Parameter",
            {
                "name": self.name,
                "source": self.source,
                "annotation": self.get_annotation(self.annotation)
            },
            {}
        )

    @staticmethod
    def get_annotation(annotation: object) -> str:
        if annotation in (Signature.empty, "_empty"):
            return ""
        return annotation.__name__ if isinstance(annotation, type) else str(annotation)
