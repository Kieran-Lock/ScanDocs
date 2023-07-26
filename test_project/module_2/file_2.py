from __future__ import annotations
from dataclasses import dataclass


@dataclass(frozen=True, slots=True)
class TestClass2:
    """
    TestClass2 showcase
    This class showcases how both attributes and method behave in a (data)class
    """
    attribute: int = 50

    def method(self, arg: float) -> None:
        print(self.attribute, arg)

    @staticmethod
    def static_method(arg_1: bool, arg_2: str = "Default") -> int:
        """
        A static method in TestClass2
        :param arg_1:
        :param arg_2:
        :return:
        """
        print(arg_1, arg_2)
        return 0

    @classmethod
    def class_method(cls, arg_1: str) -> tuple[type[TestClass2], str]:
        """
        A class method in TestClass2
        :param arg_1:
        :return:
        """
        return cls, arg_1
