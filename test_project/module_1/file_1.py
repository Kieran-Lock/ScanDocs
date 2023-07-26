"""
This is file_1

It is the first file in the test project
"""


from dataclasses import dataclass


@dataclass(frozen=True, slots=True)
class TestClass1:
    attribute: str
