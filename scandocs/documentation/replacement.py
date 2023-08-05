from dataclasses import dataclass


@dataclass
class Replacement:
    marker: str
    content: str
