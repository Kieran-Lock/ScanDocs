from __future__ import annotations
from dataclasses import dataclass
from typing import Generic, TypeVar
from inspect import getsource, Signature
from abc import ABC
from .docstring import Docstring
from .structure import Structure


StructureT = TypeVar("StructureT")


@dataclass(frozen=True, slots=True)
class SourceStructure(Generic[StructureT], Structure, ABC):
    is_private: bool
    is_dunder: bool
    source: str
    docstring: Docstring

    @staticmethod
    def get_source(method: StructureT) -> str | None:
        try:
            return getsource(method)
        except OSError:
            return  # Can't be provided
        except TypeError:
            return  # Can't be provided, maybe builtin?
