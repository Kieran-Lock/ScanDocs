from dataclasses import dataclass


@dataclass(frozen=True, slots=True)
class TestClass1:
    attribute: str
