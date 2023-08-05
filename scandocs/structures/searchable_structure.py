from __future__ import annotations
from dataclasses import dataclass
from abc import ABC, abstractmethod
from .structure import Structure


@dataclass(frozen=True, slots=True)
class SearchableStructure(Structure, ABC):
    @property
    @abstractmethod
    def search_terms(self) -> str:
        ...
