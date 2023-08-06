"""
The module containing the dataclass representing any public variables, such as class variables.
"""

from __future__ import annotations
from dataclasses import dataclass
from types import ModuleType
from typing import Iterable, Callable
from inspect import Signature
from .serialized import Serialized
from .structure import Structure


@dataclass(frozen=True, slots=True)
class Variable(Structure):
    """
    The dataclass representing any public variables, such as class variables.
    """
    name: str
    annotation: str | None
    value: str

    @classmethod
    def many_from_scope(cls, scope: object | ModuleType) -> Iterable[Variable]:
        """
        Forms an instance of this class from a valid scope, such as a class or module.

        :param scope: The scope to retrieve variables from
        :return: Each discovered variable from the given scope
        """
        variable_information = vars(scope)
        try:
            annotations_ = variable_information.__annotations__
        except AttributeError:
            annotations_ = {}
        variables = {
            name: variable_information.get(name) for name in variable_information
            if not (callable(getattr(scope, name)) or name.startswith("__"))
        }
        for variable_name in variables:
            yield cls(
                variable_name,
                cls.object_as_written(annotations_.get(variable_name, Signature.empty)),
                cls.object_as_written(variables.get(variable_name, Signature.empty))
            )

    def serialize(self, child_filter: Callable[[Structure], bool] = lambda _: True) -> Serialized:
        return Serialized(
            "Variable",
            {
                "name": self.name,
                "annotation": self.annotation,
                "value": self.value
            },
            {}
        )
