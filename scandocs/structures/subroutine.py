from __future__ import annotations
from dataclasses import dataclass
from types import FunctionType
from typing import Callable
from .docstring import Docstring
from .structure import Structure
from .error import Error
from .signature_structure import SignatureStructure
from .serialized import Serialized
from .parameter import Parameter
from ..parsing import ExceptionsParser


@dataclass(frozen=True, slots=True)
class Subroutine(SignatureStructure[FunctionType]):
    is_lambda: bool
    parameters: list[Parameter]
    raises: list[Error]

    @classmethod
    def from_subroutine(cls, subroutine: FunctionType | type(object.__init__), is_declared: bool) -> Subroutine:
        name = subroutine.__name__
        is_dunder = name.startswith("__")
        signature = cls.get_signature(subroutine)
        docstring = cls.get_docstring(subroutine)

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
            Docstring.from_docstring(docstring) if docstring else None,
            is_declared,
            signature,
            name == "<lambda>",
            [
                Parameter.from_parameter(
                    signature.parameters[parameter]
                ) for parameter in signature.parameters if parameter is not None
            ],
            [
                Error(error_name, "") for error_name in parser.exceptions
            ]
        )

    def serialize(self, child_filter: Callable[[Structure], bool] = lambda _: True) -> Serialized:
        # self.object_as_written(self.signature.return_annotation)
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
                ] if self.docstring else [],
                "shortDescription": self.docstring.short_description if self.docstring else None,
                "longDescription": self.docstring.long_description if self.docstring else None,
                "deprecation": self.docstring.deprecation if self.docstring else None
            },
            {}
        )
