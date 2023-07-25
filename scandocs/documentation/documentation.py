from __future__ import annotations
from dataclasses import dataclass
from pathlib import Path
from subprocess import run
from json import dumps
from distutils.dir_util import copy_tree
from typing import Callable
from ..structures import Package, Structure, Subroutine


@dataclass(frozen=True, slots=True)
class Documentation:
    project: Package
    base_directory: Path
    filter: Callable[[Structure], bool] = lambda structure: (
        not ((structure.is_private or structure.is_dunder)
             or (isinstance(structure, Subroutine) and structure.is_lambda))
    )

    def output(self) -> None:
        self.create_skeleton_template()
        self.install_dependencies()
        self.copy_templates()
        self.dump_project()

    def create_skeleton_template(self) -> None:
        run(
            ["pnpm", "create", "skeleton-app@latest", "-q", "-n", self.project.name, "-p", str(self.base_directory)],
            shell=True
        )

    def install_dependencies(self) -> None:
        dependencies = [
            ["highlight.js"],
            ["-D", "@tailwindcss/forms"]
        ]
        for dependency in dependencies:
            run(
                ["pnpm", "install", *dependency],
                shell=True,
                cwd=str(self.base_directory)
            )

    def copy_templates(self) -> None:
        copy_tree(str(Path(f"{__file__}/../../templates/lib")), str(self.base_directory / "src/lib"))
        copy_tree(str(Path(f"{__file__}/../../templates/routes")), str(self.base_directory / "src/routes"))

    def dump_project(self) -> None:
        with (self.base_directory / "src/lib/stores/project.ts").open("r+") as f:
            content = f.read().replace(
                "\"%PROJECT_HERE%\"",
                dumps(self.project.serialize(child_filter=self.filter).to_json(), indent=4)
            )
            f.seek(0)
            f.truncate(0)
            f.write(content)
