from __future__ import annotations
from dataclasses import dataclass


JsonT = dict[str, str | dict[str, object] | list[dict[str, "JsonT"]]]


@dataclass(frozen=True, slots=True)
class Serialized:
    component: str
    meta: dict[str, object]
    children: dict[str, list[Serialized]]

    def to_json(self) -> JsonT:
        return {
            "component": self.component,
            "meta": self.meta,
            "children": {
                child_type: [child.to_json() for child in self.children[child_type]] for child_type in self.children
            }
        }
