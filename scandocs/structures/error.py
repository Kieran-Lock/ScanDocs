"""
The module containing the dataclass representing Python exceptions.
"""

from __future__ import annotations
from dataclasses import dataclass
from typing import Callable
from docstring_parser import DocstringRaises
from .serialized import Serialized
from .structure import Structure


@dataclass(frozen=True, slots=True)
class Error(Structure):
    """
    The dataclass representing Python exceptions.
    """
    name: str
    description: str

    @classmethod
    def from_docstring_raises(cls, raises: DocstringRaises) -> Error:
        """
        Forms an instance of this class from a DocstringRaises object.

        This class method is used to form instances of this class from DocstringRaises objects,
        as provided by the docstring_parser API: https://pypi.org/project/docstring-parser/.

        :param raises: The object to form a new object from
        :return: A corresponding instance of this class
        """
        return cls(
            raises.type_name,
            raises.description
        )

    def serialize(self, child_filter: Callable[[Structure], bool] = lambda _: True) -> Serialized:
        return Serialized(
            "Exception",
            {
                "name": self.name,
                "description": self.description
            },
            {}
        )
