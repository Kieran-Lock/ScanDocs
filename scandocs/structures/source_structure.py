from __future__ import annotations
from dataclasses import dataclass
from typing import Generic, TypeVar
from inspect import getsource, getdoc
from docstring_parser import parse, Docstring as ParserDocstring
from abc import ABC
from .docstring import Docstring
from .structure import Structure


StructureT = TypeVar("StructureT")


@dataclass(frozen=True, slots=True)
class SourceStructure(Generic[StructureT], Structure, ABC):
    name: str
    is_private: bool
    is_dunder: bool
    source: str
    docstring: Docstring | None

    @staticmethod
    def get_source(method: StructureT) -> str | None:
        try:
            return getsource(method)
        except OSError:
            return  # Can't be provided
        except TypeError:
            return  # Can't be provided, maybe builtin?

    @staticmethod
    def get_docstring(structure: StructureT) -> ParserDocstring | None:
        docstring = getdoc(structure)
        if docstring is None or docstring.isspace():
            return
        return parse(docstring)
