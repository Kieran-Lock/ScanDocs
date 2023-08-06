"""
This module contains the tags that can be used to mark structures with particular details.

This contains the publicly accessible tags that are exposed to users,
so that subroutines can be marked in a particular way - this allows for the
documentation generator to provide details regarding the tagged subroutine as necessary.
"""

from __future__ import annotations
from dataclasses import dataclass
from .structures import Example, Link
from .tag import Tag
from .data_tag import DataTag


@dataclass(frozen=True, slots=True)
class ContextManager(DataTag):
    """
    Mark a structure as a context manager.

    This indicates that the structure is designed to be used in a 'with' context statement,
    which is very difficult to determine internally without a dedicated tag.
    """
    is_async: bool = False

    def json_serialize(self) -> dict[str, object]:
        return {
            "isAsync": self.is_async
        }


@dataclass(frozen=True, slots=True)
class Deprecated(DataTag):
    """
    Mark a structure as deprecated.

    This indicates that the structure is now deprecated as of a specific version,
    and should no longer be used. It is recommended to include an alternative
    to using the tagged structure in the deprecation notice.
    """
    version: str
    description: str | None = None

    def json_serialize(self) -> dict[str, object]:
        return {
            "version": self.version,
            "description": self.description
        }


@dataclass(frozen=True, slots=True)
class Private(Tag):
    """
    Mark a structure as private.

    This indicates that the structure should not be documented when the
    website is generated. Variable names starting with a single underscore
    are treated in the same way.
    """


@dataclass(frozen=True, slots=True, init=False)
class Examples(DataTag):
    """
    Add documented examples to a structure.
    """

    examples: tuple[Example]

    def __init__(self, *examples: Example):
        object.__setattr__(self, "examples", examples)

    def json_serialize(self) -> dict[str, object]:
        return {
            "examples": [example.to_json() for example in self.examples]
        }


@dataclass(frozen=True, slots=True, init=False)
class Links(DataTag):
    """
    Add relevant links to a structure's documentation.
    """

    links: tuple[Link]

    def __init__(self, *links: Link):
        object.__setattr__(self, "links", links)

    def json_serialize(self) -> dict[str, object]:
        return {
            "links": [link.to_json() for link in self.links]
        }


@dataclass(frozen=True, slots=True, init=False)
class Notes(DataTag):
    """
    Add relevant notes to a structure's documentation.
    """

    notes: tuple[str]

    def __init__(self, *notes: str):
        object.__setattr__(self, "notes", notes)

    def json_serialize(self) -> dict[str, object]:
        return {
            "notes": [note for note in self.notes]
        }
