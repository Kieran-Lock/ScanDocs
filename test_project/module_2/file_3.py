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
        """
        A very simple getter method
        :return:
        """
        return self.attribute

    @cached_property
    def cached_property_method(self) -> str:
        return self.cached_attribute


def silent_function(x: int, y: str) -> None | str:
    """
    This isn't exposed

    This function was deprecated in v4.2.0, so probably don't use it lol.

    :param y:
    :param x:
    :type y: str
    :return: whether the inputs passed the test
    :rtype: None | str
    """
    if x or y:
        return "Passed"
    return
