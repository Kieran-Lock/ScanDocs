"""
A module containing the ABC detailing how tag structures should be structured.
"""

from dataclasses import dataclass
from abc import ABC, abstractmethod


@dataclass(frozen=True, slots=True)
class Structure(ABC):
    """
    An ABC detailing how tag structures should be structured.
    """

    @abstractmethod
    def to_json(self) -> dict[str, object]:
        """
        Serializes the structure into a JSON format, so it can be used in the website.

        :return: A JSON compatible dictionary containing all necessary data.
        """
        ...
