from __future__ import annotations
from dataclasses import dataclass
from typing import Callable, Generic, TypeVar
from inspect import getsource
from abc import ABC, abstractmethod
from .serialized import Serialized


StructureT = TypeVar("StructureT")


@dataclass(frozen=True, slots=True)
class Structure(Generic[StructureT], ABC):
    name: str
    is_private: bool
    is_dunder: bool
    source: str

    @abstractmethod
    def serialize(self, child_filter: Callable[[Structure], bool] = lambda _: True) -> Serialized:
        ...

    @staticmethod
    def get_source(method: StructureT) -> str | None:
        try:
            return getsource(method)
        except OSError:
            return  # Can't be provided
        except TypeError:
            return  # Can't be provided, maybe builtin?
