"""
The module containing the dataclass representing any public variables, such as class variables.
"""

from __future__ import annotations
from dataclasses import dataclass
from types import ModuleType
from typing import Iterable, Callable
from inspect import Signature, getmembers, ismemberdescriptor, isdatadescriptor, ismethoddescriptor, isgetsetdescriptor
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
    def many_from_scope(cls, scope: object | ModuleType, module_name: str) -> Iterable[Variable]:
        """
        Forms an instance of this class from a valid scope, such as a class or module.

        :param scope: The scope to retrieve variables from
        :param module_name: The name of the module in which the variable is located
        :return: Each discovered variable from the given scope
        """
        def is_shallow(variable: object) -> bool:
            if (
                    ismemberdescriptor(variable) or isdatadescriptor(variable) or
                    ismethoddescriptor(variable) or isgetsetdescriptor(variable) or
                    cls.check_is_private(variable) or not cls.defined_within(variable, module_name)
            ):
                return False
            return not callable(variable)

        variable_information = getmembers(scope)
        try:
            annotations_ = vars(scope).__annotations__
        except AttributeError:
            annotations_ = {}
        variables = {name: variable for name, variable in variable_information if is_shallow(variable)}
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
