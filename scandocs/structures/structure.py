from __future__ import annotations
from dataclasses import dataclass
from typing import Callable
from abc import ABC, abstractmethod
from .serialized import Serialized


@dataclass(frozen=True, slots=True)
class Structure(ABC):
    name: str
    is_private: bool
    is_dunder: bool

    @abstractmethod
    def serialize(self, child_filter: Callable[[Structure], bool] = lambda _: True) -> Serialized:
        ...
