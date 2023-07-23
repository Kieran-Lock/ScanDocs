from __future__ import annotations
from dataclasses import dataclass
from pathlib import Path
from subprocess import run
from ..structures import Package


@dataclass(frozen=True, slots=True)
class Documentation:
    project: Package

    def output(self, directory: Path) -> None:
        self.create_skeleton_template(directory)

    def create_skeleton_template(self, directory: Path) -> None:
        result = run(
            ["pnpm", "create", "skeleton-app@latest", "-q", "-n", self.project.name, "-p", str(directory)],
            shell=True
        )
