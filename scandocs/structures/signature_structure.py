from __future__ import annotations
from abc import ABC
from dataclasses import dataclass
from inspect import signature, Signature
from typing import TypeVar
from .source_structure import SourceStructure


StructureT = TypeVar("StructureT")


@dataclass(frozen=True, slots=True)
class SignatureStructure(SourceStructure[StructureT], ABC):
    is_declared: bool
    signature: Signature | None

    @staticmethod
    def get_signature(method: StructureT) -> Signature | None:
        try:
            return signature(method)
        except ValueError:
            return  # Can't be provided
