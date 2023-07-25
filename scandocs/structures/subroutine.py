from __future__ import annotations
from dataclasses import dataclass
from types import FunctionType, UnionType
from inspect import getsource, signature, Signature


@dataclass(frozen=True, slots=True)
class Subroutine:
    name: str
    is_declared: bool
    source: str | None
    is_private: bool
    is_dunder: bool
    is_lambda: bool
    signature: Signature | None

    @classmethod
    def from_subroutine(cls, subroutine: FunctionType, is_declared: bool) -> Subroutine:
        name = subroutine.__name__
        is_dunder = name.startswith("__")
        return cls(
            name,
            is_declared,
            cls.get_method_source(subroutine),
            (not is_dunder) and name.startswith("_"),
            is_dunder,
            name == "<lambda>",
            cls.get_method_signature(subroutine)
        )

    def serialize(self):
        return {
            "component": "Subroutine",
            "meta": {
                "name": self.name,
                "source": self.source,
                "signature": str(self.signature),
                "returnType": self.get_return_type()
            },  # Parameters from signature, Raises from getclosurevars
            "children": [
                []
            ]
        }

    @staticmethod
    def get_method_source(method: FunctionType) -> str | None:
        try:
            return getsource(method)
        except OSError:
            return  # Can't be provided

    @staticmethod
    def get_method_signature(method: FunctionType) -> Signature | None:
        try:
            return signature(method)
        except ValueError:
            return  # Can't be provided

    def get_return_type(self) -> str | None:
        if self.signature.return_annotation in (Signature.empty, "_empty"):
            return ""
        elif self.signature.return_annotation in (None, "None"):
            return
        return str(self.signature.return_annotation)
