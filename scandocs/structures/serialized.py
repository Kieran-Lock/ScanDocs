from __future__ import annotations
from dataclasses import dataclass
from typing import Any


JsonT = dict[str, str | dict[str, Any] | list[dict[str, "JsonT"]]]


@dataclass(frozen=True, slots=True)
class Serialized:
    component: str
    meta: dict[str, Any]
    children: list[dict[str, list[Serialized]]]

    def to_json(self) -> JsonT:
        return {
            "component": self.component,
            "meta": self.meta,
            "children": [
                {
                    name: [child.to_json() for child in child_type[name]] for name in child_type
                } for child_type in self.children
            ]
        }
