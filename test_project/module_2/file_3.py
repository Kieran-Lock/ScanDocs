from dataclasses import dataclass
from functools import cached_property


@dataclass(frozen=True)
class TestClass3:
    attribute: bool
    cached_attribute: str

    @property
    def property_method(self) -> bool:
        return self.attribute

    @cached_property
    def cached_property_method(self) -> str:
        return self.cached_attribute


def silent_function() -> None:
    return
