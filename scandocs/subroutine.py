from dataclasses import dataclass


@dataclass(frozen=True, slots=True)
class Subroutine:
    name: str
