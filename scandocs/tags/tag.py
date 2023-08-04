from __future__ import annotations
from dataclasses import dataclass
from typing import Callable
from abc import ABC, abstractmethod


@dataclass(frozen=True, slots=True)
class Tag(ABC):
    @staticmethod
    def get_all_tags(f: Callable) -> list[Tag]:
        try:
            # noinspection PyUnresolvedReferences
            return f.__scandocs_tags__
        except AttributeError:
            return []

    @classmethod
    def get_tag(cls, f: Callable) -> Tag | None:
        try:
            return next(tag for tag in cls.get_all_tags(f) if isinstance(tag, cls))
        except StopIteration:
            return

    def tag(self, f: Callable) -> Callable:
        if hasattr(f, "__scandocs_tags__"):
            f.__scandocs_tags__.append(self)
        else:
            f.__scandocs_tags__ = [self]
        return f

    @classmethod
    def is_tagged(cls, f: Callable) -> bool:
        return any(isinstance(tag, cls) for tag in cls.get_all_tags(f))

    @abstractmethod
    def json_serialize(self) -> dict[str, object]:
        ...
