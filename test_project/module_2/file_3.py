from dataclasses import dataclass
from functools import cached_property


@dataclass(frozen=True)
class TestClass3:
    """
    A complicated dataclass

    This one has all kinds of attributes, but no methods
    """
    attribute: bool
    cached_attribute: str

    @property
    def property_method(self) -> bool:
        return self.attribute

    @cached_property
    def cached_property_method(self) -> str:
        return self.cached_attribute


def silent_function(x: int) -> None | str:
    """
    This isn't exposed

    :param x:
    :return the results, duh: whether the inputs passed the test
    :rtype: None | str
    """
    if x:
        return "Passed"
    return
