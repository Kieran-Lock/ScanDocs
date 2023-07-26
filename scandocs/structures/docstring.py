from __future__ import annotations
from dataclasses import dataclass
from typing import Callable
from docstring_parser import parse, Docstring as ParserDocstring
from .serialized import Serialized
from .structure import Structure
from .parameter import Parameter
from .error import Error
from .subroutine_return import SubroutineReturn
from .deprecation import Deprecation


@dataclass(frozen=True, slots=True)
class Docstring(Structure):
    short_description: str
    long_description: str
    deprecation: Deprecation | None
    parameters: list[Parameter]
    raises: list[Error]
    returns: list[SubroutineReturn]

    @classmethod
    def from_docstring(cls, docstring: ParserDocstring) -> Docstring:
        return cls(
            docstring.short_description,
            docstring.long_description,
            Deprecation.from_docstring_deprecated(docstring.deprecation) if docstring.deprecation else None,
            [Parameter(
                parameter.arg_name,
                parameter.type_name,
                parameter.default,
                parameter.is_optional
            ) for parameter in docstring.params],
            [Error.from_docstring_raises(error) for error in docstring.raises],
            [SubroutineReturn.from_docstring_returns(subroutine_return) for subroutine_return in docstring.many_returns]
        )

    def serialize(self, child_filter: Callable[[Structure], bool] = lambda _: True) -> Serialized:
        return Serialized(
            "Docstring",
            {
                "shortDescription": self.short_description,
                "longDescription": self.long_description,
                "deprecation": self.deprecation.serialize(
                    child_filter=child_filter).to_json() if self.deprecation else None,
                "parameters": [
                    parameter.serialize(child_filter=child_filter).to_json() for parameter in self.parameters],
                "raises": [error.serialize(child_filter=child_filter).to_json() for error in self.raises],
                "returns": [subroutine_return.serialize(
                    child_filter=child_filter).to_json() for subroutine_return in self.returns]
            },
            {}
        )
