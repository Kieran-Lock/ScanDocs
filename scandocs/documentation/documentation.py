from __future__ import annotations
from dataclasses import dataclass
from pathlib import Path
from subprocess import run
from json import dumps
from distutils.dir_util import copy_tree
from typing import Callable
from .configuration import Configuration
from .markers import Markers
from .replacement import Replacement
from ..structures import Package, Structure, Subroutine


@dataclass(frozen=True, slots=True)
class Documentation:
    project: Package
    base_directory: Path
    configuration: Configuration
    filter: Callable[[Structure], bool] = lambda structure: (
        not ((structure.is_private or structure.is_dunder)
             or (isinstance(structure, Subroutine) and structure.is_lambda))
    )

    def output(self) -> None:
        self.create_skeleton_template()
        self.install_dependencies()
        self.copy_templates()
        self.dump_project()
        self.configure_project()

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

    def replace_content_in_file(self, path: Path, *replacements: Replacement, json: bool = True) -> None:
        with path.open("r+") as f:
            content = f.read()
            for replacement in replacements:
                content = content.replace(
                    replacement.marker,
                    dumps(replacement.content, indent=self.configuration.json_indent) if json else replacement.content
                )
            f.seek(0)
            f.truncate(0)
            f.write(content)

    def dump_project(self) -> None:
        self.replace_content_in_file(
            self.base_directory / "src/lib/content/project.ts",
            Replacement(
                Markers.PROJECT.value,
                self.project.serialize(child_filter=self.filter).to_json()
            )
        )

    def configure_project(self) -> None:
        self.replace_content_in_file(
            self.base_directory / "src/lib/content/configuration.ts",
            Replacement(
                Markers.PROJECT_NAME.value,
                self.configuration.project_name
            )
        )
        self.replace_content_in_file(
            self.base_directory / "src/app.html",
            Replacement(
                "data-theme=\"skeleton\"",
                f"data-theme=\"{self.configuration.theme.value}\""
            ),
            json=False
        )
        self.replace_content_in_file(
            self.base_directory / "src/routes/+layout.svelte",
            Replacement(
                Markers.THEME.value,
                self.configuration.theme.value
            ),
            json=False
        )
