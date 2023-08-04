from __future__ import annotations
from dataclasses import dataclass
from docstring_parser import Docstring as ParserDocstring
from .parameter import Parameter
from .error import Error
from .subroutine_return import SubroutineReturn
from .deprecation import Deprecation


@dataclass(frozen=True, slots=True)
class Docstring:
    short_description: str
    long_description: str
    deprecation: Deprecation | None
    parameters: list[Parameter]
    raises: list[Error]
    returns: list[SubroutineReturn]

    @classmethod
    def from_docstring(cls, docstring: ParserDocstring, return_annotation: str | None = None) -> Docstring:
        return cls(
            docstring.short_description,
            docstring.long_description,
            Deprecation.from_docstring_deprecated(docstring.deprecation) if docstring.deprecation else None,
            [Parameter(
                parameter.arg_name,
                parameter.description,
                parameter.type_name,
                parameter.default,
                parameter.is_optional  # TODO: Gives None wrongly
            ) for parameter in docstring.params],
            [Error.from_docstring_raises(error) for error in docstring.raises],
            [SubroutineReturn.from_docstring_returns(
                subroutine_return
            ).patch_annotation(return_annotation) for subroutine_return in docstring.many_returns]
        )
