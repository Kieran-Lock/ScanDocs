from __future__ import annotations
from dataclasses import dataclass
from types import FunctionType
from inspect import Signature
from typing import Callable
from .python_structure import PythonStructure
from .serialized import Serialized
from .structure import Structure
from .parameter import Parameter


@dataclass(frozen=True, slots=True)
class Subroutine(PythonStructure[FunctionType]):
    is_lambda: bool
    parameters: list[Parameter]

    @classmethod
    def from_subroutine(cls, subroutine: FunctionType, is_declared: bool) -> Subroutine:
        name = subroutine.__name__
        is_dunder = name.startswith("__")
        signature = cls.get_signature(subroutine)
        return cls(
            name,
            (not is_dunder) and name.startswith("_"),
            is_dunder,
            cls.get_source(subroutine),
            is_declared,
            signature,
            name == "<lambda>",
            [
                Parameter.from_parameter(
                    signature.parameters[parameter]
                ) for parameter in signature.parameters if parameter is not None
            ]
        )

    def get_annotation(self) -> str:
        if self.signature.return_annotation in (Signature.empty, "_empty"):
            return ""
        return str(self.signature.return_annotation)

    def serialize(self, child_filter: Callable[[Structure], bool] = lambda _: True) -> Serialized:
        return Serialized(
            "Subroutine",
            {
                "name": self.name,
                "source": self.source,
                "signature": str(self.signature),
                "returnType": Parameter.get_annotation(self.signature.return_annotation),
                "parameters": [
                    parameter.serialize(child_filter=child_filter).to_json() for parameter in self.parameters
                ]
            },
            {}
        )
