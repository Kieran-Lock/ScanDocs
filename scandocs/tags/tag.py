from __future__ import annotations
from dataclasses import dataclass
from typing import Callable


@dataclass(frozen=True, slots=True)
class Tag:
    @staticmethod
    def get_tags(f: Callable) -> list[Tag]:
        try:
            # noinspection PyUnresolvedReferences
            return f.__scandocs_tags__
        except AttributeError:
            return []

    def tag(self, f: Callable) -> Callable:
        if hasattr(f, "__scandocs_tags__"):
            f.__scandocs_tags__.append(self)
        else:
            f.__scandocs_tags__ = [self]
        return f
