"""
The module containing the dataclass representing any Python structure recorded by the scanning tool for documenting.
"""

from __future__ import annotations
from dataclasses import dataclass
from inspect import Signature
from types import ModuleType
from typing import Callable
from abc import ABC, abstractmethod
from .serialized import Serialized


@dataclass(frozen=True, slots=True)
class Structure(ABC):
    """
    The base dataclass representing any Python structure recorded by the scanning tool for documenting.
    """

    @abstractmethod
    def serialize(self, child_filter: Callable[[Structure], bool] = lambda _: True) -> Serialized:
        """
        Serializes the structure into a compatible JSON format, so that it can be used in the website.

        Serializes the structure into a compatible JSON format, with customizable filtering
        options to omit certain structures from the project tree as desired.

        :param child_filter: The filter method used to omit unwanted structures from the serializes project tree
        :return: The serialized structure, in a compatible JSON format
        """
        ...

    @staticmethod
    def object_as_written(object_: object) -> str | None:
        """
        Writes a given object in a more easily readable format.
         
        Writes a given object as it is expected to have been written in the source code.
        
        :param object_: The object as expected to have been written in source code
        :rtype: str
        :return: If the object has an empty signature, as per the in-built inspect API
        :rtype: None
        """
        if object_ in (Signature.empty, "_empty"):
            return
        return object_.__name__ if isinstance(object_, type) else str(object_)

    @staticmethod
    def defined_within(member, module_name: str) -> bool:
        """
        Determines whether a given member is in-built or not within a given module.

        :param member: The member to inspect
        :param module_name: the name of the module the member was declared within
        :return: Whether the member was defined in the given module, or imported / in-built
        """
        try:
            return member.__module__ == module_name
        except AttributeError:  # Module is abnormal (e.g. builtins)
            return False
