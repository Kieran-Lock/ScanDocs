from __future__ import annotations
from dataclasses import dataclass
from types import FunctionType
from typing import Callable
from inspect import isgeneratorfunction, isasyncgenfunction, iscoroutinefunction
from .docstring import Docstring
from .structure import Structure
from .error import Error
from .signature_structure import SignatureStructure
from .serialized import Serialized
from .parameter import Parameter
from .subroutine_return import SubroutineReturn
from ..parsing import ExceptionsParser


@dataclass(frozen=True, slots=True)
class Subroutine(SignatureStructure[FunctionType]):
    parameters: list[Parameter]
    raises: list[Error]
    is_generator: bool
    is_async: bool
    is_abstract: bool
    is_lambda: bool

    @classmethod
    def from_subroutine(cls, subroutine: FunctionType | type(object.__init__), is_declared: bool,
                        is_abstract: bool = False) -> Subroutine:
        name = subroutine.__name__
        is_dunder = name.startswith("__")
        signature = cls.get_signature(subroutine)
        docstring = cls.get_docstring(subroutine)
        docstring = Docstring.from_docstring(
            docstring, cls.object_as_written(signature.return_annotation)
        ) if docstring else None

        parser = ExceptionsParser()
        # noinspection PyBroadException
        try:
            parser.deep_visit(subroutine)
        except Exception:
            parser.exceptions = set()

        return cls(
            name,
            (not is_dunder) and name.startswith("_"),
            is_dunder,
            cls.get_source(subroutine),
            docstring,
            is_declared,
            signature,
            [
                Parameter.from_parameter(
                    signature.parameters[parameter], docstring.parameters if docstring else []
                ) for parameter in signature.parameters if parameter is not None
            ],
            [
                Error(error_name, "") for error_name in parser.exceptions
            ],
            isgeneratorfunction(subroutine) or isasyncgenfunction(subroutine),
            isasyncgenfunction(subroutine) or iscoroutinefunction(subroutine),
            is_abstract,
            name == "<lambda>"
        )

    def serialize(self, child_filter: Callable[[Structure], bool] = lambda _: True) -> Serialized:
        return Serialized(
            "Subroutine",
            {
                "name": self.name,
                "source": self.source,
                "signature": str(self.signature),
                "parameters": [
                    parameter.serialize(child_filter=child_filter).to_json() for parameter in self.parameters
                ],
                "raises": [
                    error.serialize(child_filter=child_filter).to_json() for error in self.docstring.raises
                ] if self.docstring else [],
                "returns": [
                    return_.serialize(child_filter=child_filter).to_json() for return_ in self.docstring.returns
                ] if self.docstring else [
                    SubroutineReturn(
                        "No description...", self.object_as_written(self.signature.return_annotation)
                    ).serialize(child_filter=child_filter).to_json()
                ],
                "shortDescription": self.docstring.short_description if self.docstring else None,
                "longDescription": self.docstring.long_description if self.docstring else None,
                "deprecation": self.docstring.deprecation if self.docstring else None,
                "isGenerator": self.is_generator,
                "isAsync": self.is_async,
                "isAbstract": self.is_abstract,
                "isLambda": self.is_lambda
            },
            {}
        )
