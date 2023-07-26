from __future__ import annotations
from dataclasses import dataclass
from inspect import Signature
from typing import Callable
from abc import ABC, abstractmethod
from .serialized import Serialized


@dataclass(frozen=True, slots=True)
class Structure(ABC):
    name: str

    @abstractmethod
    def serialize(self, child_filter: Callable[[Structure], bool] = lambda _: True) -> Serialized:
        ...

    @staticmethod
    def object_as_written(object_: object) -> str | None:
        if object_ in (Signature.empty, "_empty"):
            return
        return object_.__name__ if isinstance(object_, type) else str(object_)
