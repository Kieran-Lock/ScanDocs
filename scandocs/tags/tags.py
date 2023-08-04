from __future__ import annotations
from dataclasses import dataclass
from .tag import Tag


@dataclass(frozen=True, slots=True)
class ContextManager(Tag):
    is_async: bool = False

    def json_serialize(self) -> dict[str, object]:
        return {
            "isAsync": self.is_async
        }


@dataclass(frozen=True, slots=True)
class Deprecated(Tag):
    version: str
    description: str | None = None

    def json_serialize(self) -> dict[str, object]:
        return {
            "version": self.version,
            "description": self.description
        }
