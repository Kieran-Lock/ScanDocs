from dataclasses import dataclass


@dataclass(frozen=True, slots=True)
class Class:
    name: str
