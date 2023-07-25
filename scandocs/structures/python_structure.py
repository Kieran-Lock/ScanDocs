from __future__ import annotations
from abc import ABC
from dataclasses import dataclass
from inspect import getsource, signature, Signature
from typing import Generic, TypeVar
from .structure import Structure


StructureT = TypeVar("StructureT")


@dataclass(frozen=True, slots=True)
class PythonStructure(Generic[StructureT], Structure, ABC):
    is_declared: bool
    source: str | None
    signature: Signature | None

    @staticmethod
    def get_source(method: StructureT) -> str | None:
        try:
            return getsource(method)
        except OSError:
            return  # Can't be provided
        except TypeError:
            return  # Can't be provided, maybe builtin?

    @staticmethod
    def get_signature(method: StructureT) -> Signature | None:
        try:
            return signature(method)
        except ValueError:
            return  # Can't be provided
