"""
A module containing dataclasses that structure the public API for certain data tags.
"""

from dataclasses import dataclass
from .structure import Structure


@dataclass(frozen=True, slots=True)
class Example(Structure):
    """
    A dataclass detailing how examples should be structured for the Examples tag.
    """
    title: str
    content: str

    def to_json(self) -> dict[str, object]:
        return {
            "title": self.title,
            "content": self.content
        }


@dataclass(frozen=True, slots=True)
class Link(Structure):
    """
    A dataclass detailing how links should be structured for the Links tag.
    """
    title: str
    href: str
    description: str | None = None

    def to_json(self) -> dict[str, object]:
        return {
            "title": self.title,
            "href": self.href,
            "description": self.description
        }
