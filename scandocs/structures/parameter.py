from __future__ import annotations
from dataclasses import dataclass
from inspect import Parameter as PythonParameter, Signature
from typing import Callable
from .serialized import Serialized
from .structure import Structure


@dataclass(frozen=True, slots=True)
class Parameter(Structure):
    name: str
    description: str
    annotation: str
    default: str | None
    is_optional: bool

    @classmethod
    def from_parameter(cls, parameter: PythonParameter) -> Parameter:
        return cls(
            parameter.name,
            parameter.name,
            cls.object_as_written(parameter.annotation),
            cls.object_as_written(parameter.default),
            parameter.kind not in (PythonParameter.POSITIONAL_ONLY, PythonParameter.POSITIONAL_OR_KEYWORD)
        )

    def serialize(self, child_filter: Callable[[Structure], bool] = lambda _: True) -> Serialized:
        print(self.name, self.is_optional)

        return Serialized(
            "Parameter",
            {
                "name": self.name,
                "description": self.description,
                "annotation": self.annotation,
                "default": self.default,
                "isOptional": self.is_optional
            },
            {}
        )
