from dataclasses import dataclass


@dataclass(frozen=True, slots=True)
class TestClass2:
    attribute: int = 50

    def method(self, arg: float) -> None:
        print(self.attribute, arg)

    @staticmethod
    def static_method(arg_1: bool, arg_2: str = "Default") -> int:
        print(arg_1, arg_2)
        return 0
