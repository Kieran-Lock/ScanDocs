"""
A module containing internal details of how the tag API is structured.

This module contains an abstract base class, which dictates how each tag
must be interfaced with, and how they relay their information to the parser
to be placed in the generated documentation website.
"""

from __future__ import annotations
from dataclasses import dataclass
from typing import Callable
from abc import ABC, abstractmethod


@dataclass(frozen=True, slots=True)
class Tag(ABC):
    """
    An ABC dictating how the tag API must be structured.

    This dataclass provides a template for all public tags in the API,
    ensuring that they are all interfaced with in the same way.
    """
    @staticmethod
    def get_all_tags(f: Callable) -> list[Tag]:
        """
        Retrieves all the tags from a given structure, irrespective of type.

        :param f: The given structure to retrieve from
        :return: A list of the tags attached to the given structure
        """
        try:
            # noinspection PyUnresolvedReferences
            return f.__scandocs_tags__
        except AttributeError:
            return []

    @classmethod
    def get_tag(cls, f: Callable) -> Tag | None:
        """
        Gets the tag of the specified type from a given structure.

        Retrieves the first tag corresponding to the specified tag type from
        the given structure, should it exist.

        :param f: The given structure to retrieve from
        :return: If a tag exists of the correct type, return it
        :rtype: Tag
        :return: If no tag exists of the specified type
        :rtype: None
        """
        try:
            return next(tag for tag in cls.get_all_tags(f) if isinstance(tag, cls))
        except StopIteration:
            return

    def tag(self, f: Callable) -> Callable:
        """
        Tags a structure with a reference to the specified tag.

        This method can be used as a decorator to tag structures as desired
        with a concise and readable syntax.

        :param f: The structure to tag
        :return: The given structure, with an attached tag
        """
        if hasattr(f, "__scandocs_tags__"):
            f.__scandocs_tags__.append(self)
        else:
            f.__scandocs_tags__ = [self]
        return f

    @classmethod
    def is_tagged(cls, f: Callable) -> bool:
        """
        A utility method to check if any tags of this type exist on a structure.

        :param f: The structure which may have tags attached to it
        :return: Whether the given structure has any tags of the correct type
        """
        return any(isinstance(tag, cls) for tag in cls.get_all_tags(f))

    @abstractmethod
    def json_serialize(self) -> dict[str, object]:
        """
        Serialize the tag, so that it can be used in the website.

        This method must be implemented by children tags, and is used to
        serialize the information provided by the tag into a JSON compatible
        dictionary, so that it can be used appropriately in the documentation website.

        :return: The serialized information as a JSON compatible dictionary
        """
        ...
