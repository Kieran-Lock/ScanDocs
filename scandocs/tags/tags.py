from __future__ import annotations
from dataclasses import dataclass
from .tag import Tag


@dataclass(frozen=True, slots=True)
class ContextManager(Tag):
    is_async: bool = False


@dataclass(frozen=True, slots=True)
class Deprecated(Tag):
    version: str
    description: str | None = None
