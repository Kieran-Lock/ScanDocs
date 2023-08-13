import {parseProject} from "$lib/utils/parsing";

export const project = parseProject({
    "component": "Package",
    "meta": {
        "searchCategory": "package",
        "name": "scandocs",
        "source": "\"\"\"\nA tool to automatically generate documentation for Python projects.\n\nScanDocs allows for users to document their Python projects autonomously,\nutilizing the power of SvelteKit to create both beautiful and adaptable documentation\nwebsites for Python packages of any size and complexity.\n\"\"\"\n\n\nfrom .structures import Package, Structure, SourceStructure, SignatureStructure, SearchableStructure\nfrom .documentation import Documentation, Configuration, Themes\nfrom .tags import ContextManager, Deprecated, Private, Example, Link, Note, Tag\n\n\nExample(\n    \"Basic Usage\",\n    \"\"\"from scandocs import Package, Documentation, Configuration\nfrom pathlib import Path\nimport <your_project>  # The one you want to document\n\n\nWEBSITE_PATH = Path(\"./docs\")  # Or wherever you want your website files to be saved\nPROJECT_NAME = \"YOUR_PROJECT_NAME\"  # The name of your project\n\n\nproject = Package.from_module(<your_project>)\ndocs = Documentation(project, WEBSITE_PATH, Configuration(PROJECT_NAME))  # Set the path to be wherever you want the website files to be saved\ndocs.output()\"\"\",\n    \"You can generate high-quality, comprehensive documentation with just these 8 lines of code.\"\n).tag(Example.module_from_name(__name__))\nExample(\n    \"Using Themes\",\n    \"\"\"from scandocs import Package, Documentation, Configuration, Themes\nfrom pathlib import Path\nimport <your_project>  # The one you want to document\n\n\nWEBSITE_PATH = Path(\"./docs\")  # Or wherever you want your website files to be saved\nPROJECT_NAME = \"YOUR_PROJECT_NAME\"  # The name of your project\n\n\nproject = Package.from_module(<your_project>)\ndocs = Documentation(project, WEBSITE_PATH, Configuration(PROJECT_NAME, theme=Themes.GOLD_NOUVEAU))  # Or any other available theme you want\ndocs.output()\"\"\",\n    \"This code would now use the gold-nouveau theme, instead of the default theme.\"\n).tag(Example.module_from_name(__name__))\nLink(\n    \"PyPI\",\n    \"https://pypi.org/project/ScanDocs/\",\n    \"The PyPI page for ScanDocs, including instructions regarding installation.\"\n).tag(Example.module_from_name(__name__))\nLink(\n    \"GitHub\",\n    \"https://github.com/Kieran-Lock/ScanDocs\",\n    \"More information about ScanDocs, including the source code.\"\n).tag(Example.module_from_name(__name__))\nLink(\n    \"SkeletonUI\",\n    \"https://www.skeleton.dev/docs/introduction\",\n    \"ScanDocs uses SkeletonUI to build aesthetic documentation and manage themes.\"\n).tag(Example.module_from_name(__name__))\nLink(\n    \"SvelteKit\",\n    \"https://kit.svelte.dev/docs/introduction\",\n    \"ScanDocs builds websites with SvelteKit - see what you can do after generation with the SvelteKit documentation.\"\n).tag(Example.module_from_name(__name__))\n",
        "shortDescription": "A tool to automatically generate documentation for Python projects.",
        "longDescription": "ScanDocs allows for users to document their Python projects autonomously,\nutilizing the power of SvelteKit to create both beautiful and adaptable documentation\nwebsites for Python packages of any size and complexity.",
        "deprecations": [],
        "examples": [
            {
                "header": "Basic Usage",
                "code": "from scandocs import Package, Documentation, Configuration\nfrom pathlib import Path\nimport <your_project>  # The one you want to document\n\n\nWEBSITE_PATH = Path(\"./docs\")  # Or wherever you want your website files to be saved\nPROJECT_NAME = \"YOUR_PROJECT_NAME\"  # The name of your project\n\n\nproject = Package.from_module(<your_project>)\ndocs = Documentation(project, WEBSITE_PATH, Configuration(PROJECT_NAME))  # Set the path to be wherever you want the website files to be saved\ndocs.output()",
                "footer": "You can generate high-quality, comprehensive documentation with just these 8 lines of code."
            },
            {
                "header": "Using Themes",
                "code": "from scandocs import Package, Documentation, Configuration, Themes\nfrom pathlib import Path\nimport <your_project>  # The one you want to document\n\n\nWEBSITE_PATH = Path(\"./docs\")  # Or wherever you want your website files to be saved\nPROJECT_NAME = \"YOUR_PROJECT_NAME\"  # The name of your project\n\n\nproject = Package.from_module(<your_project>)\ndocs = Documentation(project, WEBSITE_PATH, Configuration(PROJECT_NAME, theme=Themes.GOLD_NOUVEAU))  # Or any other available theme you want\ndocs.output()",
                "footer": "This code would now use the gold-nouveau theme, instead of the default theme."
            }
        ],
        "links": [
            {
                "title": "PyPI",
                "href": "https://pypi.org/project/ScanDocs/",
                "description": "The PyPI page for ScanDocs, including instructions regarding installation."
            },
            {
                "title": "GitHub",
                "href": "https://github.com/Kieran-Lock/ScanDocs",
                "description": "More information about ScanDocs, including the source code."
            },
            {
                "title": "SkeletonUI",
                "href": "https://www.skeleton.dev/docs/introduction",
                "description": "ScanDocs uses SkeletonUI to build aesthetic documentation and manage themes."
            },
            {
                "title": "SvelteKit",
                "href": "https://kit.svelte.dev/docs/introduction",
                "description": "ScanDocs builds websites with SvelteKit - see what you can do after generation with the SvelteKit documentation."
            }
        ],
        "notes": [],
        "searchTerms": "scandocs\nA tool to automatically generate documentation for Python projects.\nScanDocs allows for users to document their Python projects autonomously,\nutilizing the power of SvelteKit to create both beautiful and adaptable documentation\nwebsites for Python packages of any size and complexity."
    },
    "children": {
        "Sub-Packages": [
            {
                "component": "Package",
                "meta": {
                    "searchCategory": "package",
                    "name": "documentation",
                    "source": "\"\"\"\nUtilities for building the documentation website.\n\nThis package includes the core functionality behind generating the documentation website,\nand includes additional utilities such as the configuration dataclass to ensure the API is as\npowerful as possible, while maintaining simplicity and efficiency.\n\"\"\"\n\n\nfrom .documentation import Documentation\nfrom .configuration import Configuration\nfrom .themes import Themes\n",
                    "shortDescription": "Utilities for building the documentation website.",
                    "longDescription": "This package includes the core functionality behind generating the documentation website,\nand includes additional utilities such as the configuration dataclass to ensure the API is as\npowerful as possible, while maintaining simplicity and efficiency.",
                    "deprecations": [],
                    "examples": [],
                    "links": [],
                    "notes": [],
                    "searchTerms": "documentation\nUtilities for building the documentation website.\nThis package includes the core functionality behind generating the documentation website,\nand includes additional utilities such as the configuration dataclass to ensure the API is as\npowerful as possible, while maintaining simplicity and efficiency."
                },
                "children": {
                    "Sub-Packages": [],
                    "Modules": [
                        {
                            "component": "Module",
                            "meta": {
                                "searchCategory": "module",
                                "name": "configuration",
                                "source": "\"\"\"\nA module containing the documentation configuration API.\n\nThis module contains the public API allowing users to configure their website\nbefore it is generated, to maximise simplicity.\n\"\"\"\n\nfrom dataclasses import dataclass\nfrom .themes import Themes\n\n\n@dataclass(frozen=True, slots=True)\nclass Configuration:\n    \"\"\"\n    A dataclass for customizing details of the generated website.\n\n    This dataclass provides a straightforward way to configure various options for ScanDocs documentation.\n    It can be used to personalize the appearance of the website easily, allowing for maximum adaptibility\n    before the website is ever generated.\n    \"\"\"\n    project_name: str\n    theme: Themes = Themes.SKELETON\n    search_placeholder: str = \"Search Documentation...\"\n    json_indent: int = 4\n",
                                "shortDescription": "A module containing the documentation configuration API.",
                                "longDescription": "This module contains the public API allowing users to configure their website\nbefore it is generated, to maximise simplicity.",
                                "deprecations": [],
                                "examples": [],
                                "links": [],
                                "notes": [],
                                "searchTerms": "configuration\nA module containing the documentation configuration API.\nThis module contains the public API allowing users to configure their website\nbefore it is generated, to maximise simplicity.",
                                "globalVariables": []
                            },
                            "children": {
                                "Classes": [
                                    {
                                        "component": "Class",
                                        "meta": {
                                            "searchCategory": "class",
                                            "name": "Configuration",
                                            "source": "@dataclass(frozen=True, slots=True)\nclass Configuration:\n    \"\"\"\n    A dataclass for customizing details of the generated website.\n\n    This dataclass provides a straightforward way to configure various options for ScanDocs documentation.\n    It can be used to personalize the appearance of the website easily, allowing for maximum adaptibility\n    before the website is ever generated.\n    \"\"\"\n    project_name: str\n    theme: Themes = Themes.SKELETON\n    search_placeholder: str = \"Search Documentation...\"\n    json_indent: int = 4\n",
                                            "signature": "(project_name: str, theme: scandocs.documentation.themes.Themes = <Themes.SKELETON: 'skeleton'>, search_placeholder: str = 'Search Documentation...', json_indent: int = 4) -> None",
                                            "parameters": [
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "self",
                                                        "description": null,
                                                        "annotation": null,
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "project_name",
                                                        "description": null,
                                                        "annotation": "str",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "theme",
                                                        "description": null,
                                                        "annotation": "Themes",
                                                        "default": "Themes.SKELETON",
                                                        "isOptional": true
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "search_placeholder",
                                                        "description": null,
                                                        "annotation": "str",
                                                        "default": "Search Documentation...",
                                                        "isOptional": true
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "json_indent",
                                                        "description": null,
                                                        "annotation": "int",
                                                        "default": "4",
                                                        "isOptional": true
                                                    },
                                                    "children": {}
                                                }
                                            ],
                                            "shortDescription": "A dataclass for customizing details of the generated website.",
                                            "longDescription": "This dataclass provides a straightforward way to configure various options for ScanDocs documentation.\nIt can be used to personalize the appearance of the website easily, allowing for maximum adaptibility\nbefore the website is ever generated.",
                                            "deprecations": [],
                                            "examples": [],
                                            "links": [],
                                            "notes": [],
                                            "isAbstract": false,
                                            "searchTerms": "Configuration\nA dataclass for customizing details of the generated website.\nThis dataclass provides a straightforward way to configure various options for ScanDocs documentation.\nIt can be used to personalize the appearance of the website easily, allowing for maximum adaptibility\nbefore the website is ever generated.",
                                            "classVariables": []
                                        },
                                        "children": {
                                            "Methods": []
                                        }
                                    }
                                ],
                                "Subroutines": []
                            }
                        },
                        {
                            "component": "Module",
                            "meta": {
                                "searchCategory": "module",
                                "name": "documentation",
                                "source": "\"\"\"\nA module containing the documentation API.\n\nThis module contains the bulk of the documentation website generation logic.\n\"\"\"\n\nfrom __future__ import annotations\nfrom dataclasses import dataclass\nfrom pathlib import Path\nfrom subprocess import run\nfrom json import dumps\nfrom distutils.dir_util import copy_tree\nfrom typing import Callable\nfrom .configuration import Configuration\nfrom .markers import Markers\nfrom .replacement import Replacement\nfrom ..structures import Package, Structure, Subroutine, SourceStructure\nfrom ..tags import Example\n\n\n@dataclass(frozen=True, slots=True)\nclass Documentation:\n    \"\"\"\n    A dataclass containing all logic regarding the final documentation website.\n\n    This dataclass encompasses all the data used in the final website output, and includes\n    functionality to write to the final output folder with a working and adaptable website.\n    \"\"\"\n    project: Package\n    base_directory: Path\n    configuration: Configuration\n    filter: Callable[[Structure], bool] = lambda structure: (\n        not (isinstance(structure, SourceStructure) and (\n                (\n                        structure.is_private or structure.is_dunder) or\n                (isinstance(structure, Subroutine) and structure.is_lambda)\n        ))\n    )\n\n    def output(self) -> None:\n        \"\"\"\n        Outputs the prepared documentation website files.\n\n        Outputs all the prepared documentation files into the base directory,\n        and automatically installs any dependencies so that the website is ready to run.\n        \"\"\"\n        self.create_skeleton_template()\n        self.install_dependencies()\n        self.copy_templates()\n        self.dump_project()\n        self.configure_project()\n\n    def create_skeleton_template(self) -> None:\n        \"\"\"\n        Creates a bare-bones project.\n\n        An internal function to run an NPM command that\n        installs a bare-bones SvelteKit template with SkeletonUI.\n        \"\"\"\n        run(\n            [\"pnpm\", \"create\", \"skeleton-app@latest\", \"-q\", \"-n\", self.project.name, \"-p\", str(self.base_directory)],\n            shell=True\n        )\n\n    def install_dependencies(self) -> None:\n        \"\"\"\n        Installs the required project dependencies.\n\n        An internal function which runs several NPM commands, installing all the necessary requirements\n        for the documentation website to function as intended out-of-the-box.\n        \"\"\"\n        dependencies = [\n            [\"highlight.js\"],\n            [\"-D\", \"@tailwindcss/forms\"]\n        ]\n        for dependency in dependencies:\n            run(\n                [\"pnpm\", \"install\", *dependency],\n                shell=True,\n                cwd=str(self.base_directory)\n            )\n\n    def copy_templates(self) -> None:\n        \"\"\"\n        Copies all the locally stored project templates into the bare-bones layout.\n        \"\"\"\n        copy_tree(str(Path(f\"{__file__}/../../templates/lib\")), str(self.base_directory / \"src/lib\"))\n        copy_tree(str(Path(f\"{__file__}/../../templates/routes\")), str(self.base_directory / \"src/routes\"))\n        copy_tree(str(Path(f\"{__file__}/../../templates/static\")), str(self.base_directory / \"static\"))\n\n    def replace_content_in_file(self, path: Path, *replacements: Replacement, json: bool = True) -> None:\n        \"\"\"\n        A utility method to replace the content at a specific marker with given content.\n\n        An internal method to place specified content in place of an internal marker,\n        used to copy dynamic information such as certain configuration settings into the website files.\n\n        :param path: The path at which the target file exists\n        :param replacements: The replacements that should be made to the target file\n        :param json: Whether the given content should be converted into a JSON format or not\n        \"\"\"\n        with path.open(\"r+\") as f:\n            content = f.read()\n            for replacement in replacements:\n                content = content.replace(\n                    replacement.marker,\n                    dumps(replacement.content, indent=self.configuration.json_indent) if json else replacement.content\n                )\n            f.seek(0)\n            f.truncate(0)\n            f.write(content)\n\n    def dump_project(self) -> None:\n        \"\"\"\n        Places the project JSON tree into the website files.\n        \"\"\"\n        self.replace_content_in_file(\n            self.base_directory / \"src/lib/content/project.ts\",\n            Replacement(\n                Markers.PROJECT.value,\n                self.project.serialize(child_filter=self.filter).to_json()\n            )\n        )\n\n    def configure_project(self) -> None:\n        \"\"\"\n        Places content into the website files regarding user configuration.\n        \"\"\"\n        self.replace_content_in_file(\n            self.base_directory / \"src/lib/content/configuration.ts\",\n            Replacement(\n                Markers.PROJECT_NAME.value,\n                self.configuration.project_name\n            )\n        )\n        self.replace_content_in_file(\n            self.base_directory / \"src/routes/+layout.svelte\",\n            Replacement(\n                Markers.THEME.value,\n                self.configuration.theme.value\n            ),\n            json=False\n        )\n        self.replace_content_in_file(\n            self.base_directory / \"src/app.html\",\n            Replacement(\n                \"%sveltekit.head%\",\n                f\"<title>{self.configuration.project_name} Documentation</title>\\n\\t\\t\"\n                f\"<meta name=\\\"title\\\" content={self.configuration.project_name}>\\n\\t\\t\"\n                f\"<meta name=\\\"description\\\" content=\\\"Documentation for {self.configuration.project_name}\\\">\\n\\t\\t\"\n                \"<meta name=\\\"robots\\\" content=\\\"index, follow\\\">\\n\\t\\t\"\n                \"<meta http-equiv=\\\"Content-Type\\\" content=\\\"text/html; charset=utf-8\\\">\\n\\t\\t\"\n                \"<meta name=\\\"language\\\" content=\\\"English\\\">\\n\\t\\t\"\n                \"%sveltekit.head%\"\n            ),\n            json=False\n        )\n",
                                "shortDescription": "A module containing the documentation API.",
                                "longDescription": "This module contains the bulk of the documentation website generation logic.",
                                "deprecations": [],
                                "examples": [],
                                "links": [],
                                "notes": [],
                                "searchTerms": "documentation\nA module containing the documentation API.\nThis module contains the bulk of the documentation website generation logic.",
                                "globalVariables": []
                            },
                            "children": {
                                "Classes": [
                                    {
                                        "component": "Class",
                                        "meta": {
                                            "searchCategory": "class",
                                            "name": "Documentation",
                                            "source": "@dataclass(frozen=True, slots=True)\nclass Documentation:\n    \"\"\"\n    A dataclass containing all logic regarding the final documentation website.\n\n    This dataclass encompasses all the data used in the final website output, and includes\n    functionality to write to the final output folder with a working and adaptable website.\n    \"\"\"\n    project: Package\n    base_directory: Path\n    configuration: Configuration\n    filter: Callable[[Structure], bool] = lambda structure: (\n        not (isinstance(structure, SourceStructure) and (\n                (\n                        structure.is_private or structure.is_dunder) or\n                (isinstance(structure, Subroutine) and structure.is_lambda)\n        ))\n    )\n\n    def output(self) -> None:\n        \"\"\"\n        Outputs the prepared documentation website files.\n\n        Outputs all the prepared documentation files into the base directory,\n        and automatically installs any dependencies so that the website is ready to run.\n        \"\"\"\n        self.create_skeleton_template()\n        self.install_dependencies()\n        self.copy_templates()\n        self.dump_project()\n        self.configure_project()\n\n    def create_skeleton_template(self) -> None:\n        \"\"\"\n        Creates a bare-bones project.\n\n        An internal function to run an NPM command that\n        installs a bare-bones SvelteKit template with SkeletonUI.\n        \"\"\"\n        run(\n            [\"pnpm\", \"create\", \"skeleton-app@latest\", \"-q\", \"-n\", self.project.name, \"-p\", str(self.base_directory)],\n            shell=True\n        )\n\n    def install_dependencies(self) -> None:\n        \"\"\"\n        Installs the required project dependencies.\n\n        An internal function which runs several NPM commands, installing all the necessary requirements\n        for the documentation website to function as intended out-of-the-box.\n        \"\"\"\n        dependencies = [\n            [\"highlight.js\"],\n            [\"-D\", \"@tailwindcss/forms\"]\n        ]\n        for dependency in dependencies:\n            run(\n                [\"pnpm\", \"install\", *dependency],\n                shell=True,\n                cwd=str(self.base_directory)\n            )\n\n    def copy_templates(self) -> None:\n        \"\"\"\n        Copies all the locally stored project templates into the bare-bones layout.\n        \"\"\"\n        copy_tree(str(Path(f\"{__file__}/../../templates/lib\")), str(self.base_directory / \"src/lib\"))\n        copy_tree(str(Path(f\"{__file__}/../../templates/routes\")), str(self.base_directory / \"src/routes\"))\n        copy_tree(str(Path(f\"{__file__}/../../templates/static\")), str(self.base_directory / \"static\"))\n\n    def replace_content_in_file(self, path: Path, *replacements: Replacement, json: bool = True) -> None:\n        \"\"\"\n        A utility method to replace the content at a specific marker with given content.\n\n        An internal method to place specified content in place of an internal marker,\n        used to copy dynamic information such as certain configuration settings into the website files.\n\n        :param path: The path at which the target file exists\n        :param replacements: The replacements that should be made to the target file\n        :param json: Whether the given content should be converted into a JSON format or not\n        \"\"\"\n        with path.open(\"r+\") as f:\n            content = f.read()\n            for replacement in replacements:\n                content = content.replace(\n                    replacement.marker,\n                    dumps(replacement.content, indent=self.configuration.json_indent) if json else replacement.content\n                )\n            f.seek(0)\n            f.truncate(0)\n            f.write(content)\n\n    def dump_project(self) -> None:\n        \"\"\"\n        Places the project JSON tree into the website files.\n        \"\"\"\n        self.replace_content_in_file(\n            self.base_directory / \"src/lib/content/project.ts\",\n            Replacement(\n                Markers.PROJECT.value,\n                self.project.serialize(child_filter=self.filter).to_json()\n            )\n        )\n\n    def configure_project(self) -> None:\n        \"\"\"\n        Places content into the website files regarding user configuration.\n        \"\"\"\n        self.replace_content_in_file(\n            self.base_directory / \"src/lib/content/configuration.ts\",\n            Replacement(\n                Markers.PROJECT_NAME.value,\n                self.configuration.project_name\n            )\n        )\n        self.replace_content_in_file(\n            self.base_directory / \"src/routes/+layout.svelte\",\n            Replacement(\n                Markers.THEME.value,\n                self.configuration.theme.value\n            ),\n            json=False\n        )\n        self.replace_content_in_file(\n            self.base_directory / \"src/app.html\",\n            Replacement(\n                \"%sveltekit.head%\",\n                f\"<title>{self.configuration.project_name} Documentation</title>\\n\\t\\t\"\n                f\"<meta name=\\\"title\\\" content={self.configuration.project_name}>\\n\\t\\t\"\n                f\"<meta name=\\\"description\\\" content=\\\"Documentation for {self.configuration.project_name}\\\">\\n\\t\\t\"\n                \"<meta name=\\\"robots\\\" content=\\\"index, follow\\\">\\n\\t\\t\"\n                \"<meta http-equiv=\\\"Content-Type\\\" content=\\\"text/html; charset=utf-8\\\">\\n\\t\\t\"\n                \"<meta name=\\\"language\\\" content=\\\"English\\\">\\n\\t\\t\"\n                \"%sveltekit.head%\"\n            ),\n            json=False\n        )\n",
                                            "signature": "(project: 'Package', base_directory: 'Path', configuration: 'Configuration', filter: 'Callable[[Structure], bool]' = <function Documentation.<lambda> at 0x0000022DE2ECE0C0>) -> None",
                                            "parameters": [
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "self",
                                                        "description": null,
                                                        "annotation": null,
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "project",
                                                        "description": null,
                                                        "annotation": "Package",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "base_directory",
                                                        "description": null,
                                                        "annotation": "Path",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "configuration",
                                                        "description": null,
                                                        "annotation": "Configuration",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "filter",
                                                        "description": null,
                                                        "annotation": "Callable[[Structure], bool]",
                                                        "default": "<function Documentation.<lambda> at 0x0000022DE2ECE0C0>",
                                                        "isOptional": true
                                                    },
                                                    "children": {}
                                                }
                                            ],
                                            "shortDescription": "A dataclass containing all logic regarding the final documentation website.",
                                            "longDescription": "This dataclass encompasses all the data used in the final website output, and includes\nfunctionality to write to the final output folder with a working and adaptable website.",
                                            "deprecations": [],
                                            "examples": [],
                                            "links": [],
                                            "notes": [],
                                            "isAbstract": false,
                                            "searchTerms": "Documentation\nA dataclass containing all logic regarding the final documentation website.\nThis dataclass encompasses all the data used in the final website output, and includes\nfunctionality to write to the final output folder with a working and adaptable website.",
                                            "classVariables": []
                                        },
                                        "children": {
                                            "Methods": [
                                                {
                                                    "component": "Subroutine",
                                                    "meta": {
                                                        "searchCategory": "subroutine",
                                                        "name": "output",
                                                        "source": "    def output(self) -> None:\n        \"\"\"\n        Outputs the prepared documentation website files.\n\n        Outputs all the prepared documentation files into the base directory,\n        and automatically installs any dependencies so that the website is ready to run.\n        \"\"\"\n        self.create_skeleton_template()\n        self.install_dependencies()\n        self.copy_templates()\n        self.dump_project()\n        self.configure_project()\n",
                                                        "signature": "(self) -> 'None'",
                                                        "parameters": [
                                                            {
                                                                "component": "Parameter",
                                                                "meta": {
                                                                    "name": "self",
                                                                    "description": null,
                                                                    "annotation": null,
                                                                    "default": null,
                                                                    "isOptional": false
                                                                },
                                                                "children": {}
                                                            }
                                                        ],
                                                        "raises": [],
                                                        "returns": [],
                                                        "shortDescription": "Outputs the prepared documentation website files.",
                                                        "longDescription": "Outputs all the prepared documentation files into the base directory,\nand automatically installs any dependencies so that the website is ready to run.",
                                                        "deprecations": [],
                                                        "examples": [],
                                                        "links": [],
                                                        "notes": [],
                                                        "isGenerator": false,
                                                        "isAsync": false,
                                                        "isAbstract": false,
                                                        "isLambda": false,
                                                        "isContextManager": false,
                                                        "searchTerms": "output\nOutputs the prepared documentation website files.\nOutputs all the prepared documentation files into the base directory,\nand automatically installs any dependencies so that the website is ready to run."
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Subroutine",
                                                    "meta": {
                                                        "searchCategory": "subroutine",
                                                        "name": "create_skeleton_template",
                                                        "source": "    def create_skeleton_template(self) -> None:\n        \"\"\"\n        Creates a bare-bones project.\n\n        An internal function to run an NPM command that\n        installs a bare-bones SvelteKit template with SkeletonUI.\n        \"\"\"\n        run(\n            [\"pnpm\", \"create\", \"skeleton-app@latest\", \"-q\", \"-n\", self.project.name, \"-p\", str(self.base_directory)],\n            shell=True\n        )\n",
                                                        "signature": "(self) -> 'None'",
                                                        "parameters": [
                                                            {
                                                                "component": "Parameter",
                                                                "meta": {
                                                                    "name": "self",
                                                                    "description": null,
                                                                    "annotation": null,
                                                                    "default": null,
                                                                    "isOptional": false
                                                                },
                                                                "children": {}
                                                            }
                                                        ],
                                                        "raises": [],
                                                        "returns": [],
                                                        "shortDescription": "Creates a bare-bones project.",
                                                        "longDescription": "An internal function to run an NPM command that\ninstalls a bare-bones SvelteKit template with SkeletonUI.",
                                                        "deprecations": [],
                                                        "examples": [],
                                                        "links": [],
                                                        "notes": [],
                                                        "isGenerator": false,
                                                        "isAsync": false,
                                                        "isAbstract": false,
                                                        "isLambda": false,
                                                        "isContextManager": false,
                                                        "searchTerms": "create_skeleton_template\nCreates a bare-bones project.\nAn internal function to run an NPM command that\ninstalls a bare-bones SvelteKit template with SkeletonUI."
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Subroutine",
                                                    "meta": {
                                                        "searchCategory": "subroutine",
                                                        "name": "install_dependencies",
                                                        "source": "    def install_dependencies(self) -> None:\n        \"\"\"\n        Installs the required project dependencies.\n\n        An internal function which runs several NPM commands, installing all the necessary requirements\n        for the documentation website to function as intended out-of-the-box.\n        \"\"\"\n        dependencies = [\n            [\"highlight.js\"],\n            [\"-D\", \"@tailwindcss/forms\"]\n        ]\n        for dependency in dependencies:\n            run(\n                [\"pnpm\", \"install\", *dependency],\n                shell=True,\n                cwd=str(self.base_directory)\n            )\n",
                                                        "signature": "(self) -> 'None'",
                                                        "parameters": [
                                                            {
                                                                "component": "Parameter",
                                                                "meta": {
                                                                    "name": "self",
                                                                    "description": null,
                                                                    "annotation": null,
                                                                    "default": null,
                                                                    "isOptional": false
                                                                },
                                                                "children": {}
                                                            }
                                                        ],
                                                        "raises": [],
                                                        "returns": [],
                                                        "shortDescription": "Installs the required project dependencies.",
                                                        "longDescription": "An internal function which runs several NPM commands, installing all the necessary requirements\nfor the documentation website to function as intended out-of-the-box.",
                                                        "deprecations": [],
                                                        "examples": [],
                                                        "links": [],
                                                        "notes": [],
                                                        "isGenerator": false,
                                                        "isAsync": false,
                                                        "isAbstract": false,
                                                        "isLambda": false,
                                                        "isContextManager": false,
                                                        "searchTerms": "install_dependencies\nInstalls the required project dependencies.\nAn internal function which runs several NPM commands, installing all the necessary requirements\nfor the documentation website to function as intended out-of-the-box."
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Subroutine",
                                                    "meta": {
                                                        "searchCategory": "subroutine",
                                                        "name": "copy_templates",
                                                        "source": "    def copy_templates(self) -> None:\n        \"\"\"\n        Copies all the locally stored project templates into the bare-bones layout.\n        \"\"\"\n        copy_tree(str(Path(f\"{__file__}/../../templates/lib\")), str(self.base_directory / \"src/lib\"))\n        copy_tree(str(Path(f\"{__file__}/../../templates/routes\")), str(self.base_directory / \"src/routes\"))\n        copy_tree(str(Path(f\"{__file__}/../../templates/static\")), str(self.base_directory / \"static\"))\n",
                                                        "signature": "(self) -> 'None'",
                                                        "parameters": [
                                                            {
                                                                "component": "Parameter",
                                                                "meta": {
                                                                    "name": "self",
                                                                    "description": null,
                                                                    "annotation": null,
                                                                    "default": null,
                                                                    "isOptional": false
                                                                },
                                                                "children": {}
                                                            }
                                                        ],
                                                        "raises": [],
                                                        "returns": [],
                                                        "shortDescription": "Copies all the locally stored project templates into the bare-bones layout.",
                                                        "longDescription": null,
                                                        "deprecations": [],
                                                        "examples": [],
                                                        "links": [],
                                                        "notes": [],
                                                        "isGenerator": false,
                                                        "isAsync": false,
                                                        "isAbstract": false,
                                                        "isLambda": false,
                                                        "isContextManager": false,
                                                        "searchTerms": "copy_templates\nCopies all the locally stored project templates into the bare-bones layout.\nNone"
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Subroutine",
                                                    "meta": {
                                                        "searchCategory": "subroutine",
                                                        "name": "replace_content_in_file",
                                                        "source": "    def replace_content_in_file(self, path: Path, *replacements: Replacement, json: bool = True) -> None:\n        \"\"\"\n        A utility method to replace the content at a specific marker with given content.\n\n        An internal method to place specified content in place of an internal marker,\n        used to copy dynamic information such as certain configuration settings into the website files.\n\n        :param path: The path at which the target file exists\n        :param replacements: The replacements that should be made to the target file\n        :param json: Whether the given content should be converted into a JSON format or not\n        \"\"\"\n        with path.open(\"r+\") as f:\n            content = f.read()\n            for replacement in replacements:\n                content = content.replace(\n                    replacement.marker,\n                    dumps(replacement.content, indent=self.configuration.json_indent) if json else replacement.content\n                )\n            f.seek(0)\n            f.truncate(0)\n            f.write(content)\n",
                                                        "signature": "(self, path: 'Path', *replacements: 'Replacement', json: 'bool' = True) -> 'None'",
                                                        "parameters": [
                                                            {
                                                                "component": "Parameter",
                                                                "meta": {
                                                                    "name": "self",
                                                                    "description": null,
                                                                    "annotation": null,
                                                                    "default": null,
                                                                    "isOptional": false
                                                                },
                                                                "children": {}
                                                            },
                                                            {
                                                                "component": "Parameter",
                                                                "meta": {
                                                                    "name": "path",
                                                                    "description": "The path at which the target file exists",
                                                                    "annotation": "Path",
                                                                    "default": null,
                                                                    "isOptional": false
                                                                },
                                                                "children": {}
                                                            },
                                                            {
                                                                "component": "Parameter",
                                                                "meta": {
                                                                    "name": "replacements",
                                                                    "description": "The replacements that should be made to the target file",
                                                                    "annotation": "Replacement",
                                                                    "default": null,
                                                                    "isOptional": true
                                                                },
                                                                "children": {}
                                                            },
                                                            {
                                                                "component": "Parameter",
                                                                "meta": {
                                                                    "name": "json",
                                                                    "description": "Whether the given content should be converted into a JSON format or not",
                                                                    "annotation": "bool",
                                                                    "default": "True",
                                                                    "isOptional": true
                                                                },
                                                                "children": {}
                                                            }
                                                        ],
                                                        "raises": [],
                                                        "returns": [],
                                                        "shortDescription": "A utility method to replace the content at a specific marker with given content.",
                                                        "longDescription": "An internal method to place specified content in place of an internal marker,\nused to copy dynamic information such as certain configuration settings into the website files.",
                                                        "deprecations": [],
                                                        "examples": [],
                                                        "links": [],
                                                        "notes": [],
                                                        "isGenerator": false,
                                                        "isAsync": false,
                                                        "isAbstract": false,
                                                        "isLambda": false,
                                                        "isContextManager": false,
                                                        "searchTerms": "replace_content_in_file\nA utility method to replace the content at a specific marker with given content.\nAn internal method to place specified content in place of an internal marker,\nused to copy dynamic information such as certain configuration settings into the website files."
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Subroutine",
                                                    "meta": {
                                                        "searchCategory": "subroutine",
                                                        "name": "dump_project",
                                                        "source": "    def dump_project(self) -> None:\n        \"\"\"\n        Places the project JSON tree into the website files.\n        \"\"\"\n        self.replace_content_in_file(\n            self.base_directory / \"src/lib/content/project.ts\",\n            Replacement(\n                Markers.PROJECT.value,\n                self.project.serialize(child_filter=self.filter).to_json()\n            )\n        )\n",
                                                        "signature": "(self) -> 'None'",
                                                        "parameters": [
                                                            {
                                                                "component": "Parameter",
                                                                "meta": {
                                                                    "name": "self",
                                                                    "description": null,
                                                                    "annotation": null,
                                                                    "default": null,
                                                                    "isOptional": false
                                                                },
                                                                "children": {}
                                                            }
                                                        ],
                                                        "raises": [],
                                                        "returns": [],
                                                        "shortDescription": "Places the project JSON tree into the website files.",
                                                        "longDescription": null,
                                                        "deprecations": [],
                                                        "examples": [],
                                                        "links": [],
                                                        "notes": [],
                                                        "isGenerator": false,
                                                        "isAsync": false,
                                                        "isAbstract": false,
                                                        "isLambda": false,
                                                        "isContextManager": false,
                                                        "searchTerms": "dump_project\nPlaces the project JSON tree into the website files.\nNone"
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Subroutine",
                                                    "meta": {
                                                        "searchCategory": "subroutine",
                                                        "name": "configure_project",
                                                        "source": "    def configure_project(self) -> None:\n        \"\"\"\n        Places content into the website files regarding user configuration.\n        \"\"\"\n        self.replace_content_in_file(\n            self.base_directory / \"src/lib/content/configuration.ts\",\n            Replacement(\n                Markers.PROJECT_NAME.value,\n                self.configuration.project_name\n            )\n        )\n        self.replace_content_in_file(\n            self.base_directory / \"src/routes/+layout.svelte\",\n            Replacement(\n                Markers.THEME.value,\n                self.configuration.theme.value\n            ),\n            json=False\n        )\n        self.replace_content_in_file(\n            self.base_directory / \"src/app.html\",\n            Replacement(\n                \"%sveltekit.head%\",\n                f\"<title>{self.configuration.project_name} Documentation</title>\\n\\t\\t\"\n                f\"<meta name=\\\"title\\\" content={self.configuration.project_name}>\\n\\t\\t\"\n                f\"<meta name=\\\"description\\\" content=\\\"Documentation for {self.configuration.project_name}\\\">\\n\\t\\t\"\n                \"<meta name=\\\"robots\\\" content=\\\"index, follow\\\">\\n\\t\\t\"\n                \"<meta http-equiv=\\\"Content-Type\\\" content=\\\"text/html; charset=utf-8\\\">\\n\\t\\t\"\n                \"<meta name=\\\"language\\\" content=\\\"English\\\">\\n\\t\\t\"\n                \"%sveltekit.head%\"\n            ),\n            json=False\n        )\n",
                                                        "signature": "(self) -> 'None'",
                                                        "parameters": [
                                                            {
                                                                "component": "Parameter",
                                                                "meta": {
                                                                    "name": "self",
                                                                    "description": null,
                                                                    "annotation": null,
                                                                    "default": null,
                                                                    "isOptional": false
                                                                },
                                                                "children": {}
                                                            }
                                                        ],
                                                        "raises": [],
                                                        "returns": [],
                                                        "shortDescription": "Places content into the website files regarding user configuration.",
                                                        "longDescription": null,
                                                        "deprecations": [],
                                                        "examples": [],
                                                        "links": [],
                                                        "notes": [],
                                                        "isGenerator": false,
                                                        "isAsync": false,
                                                        "isAbstract": false,
                                                        "isLambda": false,
                                                        "isContextManager": false,
                                                        "searchTerms": "configure_project\nPlaces content into the website files regarding user configuration.\nNone"
                                                    },
                                                    "children": {}
                                                }
                                            ]
                                        }
                                    }
                                ],
                                "Subroutines": []
                            }
                        },
                        {
                            "component": "Module",
                            "meta": {
                                "searchCategory": "module",
                                "name": "markers",
                                "source": "\"\"\"\nAn internal module containing markers for website generation.\n\"\"\"\n\nfrom enum import Enum\n\n\nclass Markers(Enum):\n    \"\"\"\n    Contains all the markers where code from ScanDocs templates may be placed.\n\n    This is an internal enum that holds the different markers for where\n    content is copied between files during website generation.\n    \"\"\"\n    PROJECT = \"\\\"%PROJECT_HERE%\\\"\"\n    PROJECT_NAME = \"\\\"%PROJECT_NAME_HERE%\\\"\"\n    THEME = \"\\\"%THEME_HERE%\\\"\"\n",
                                "shortDescription": "An internal module containing markers for website generation.",
                                "longDescription": null,
                                "deprecations": [],
                                "examples": [],
                                "links": [],
                                "notes": [],
                                "searchTerms": "markers\nAn internal module containing markers for website generation.\nNone",
                                "globalVariables": []
                            },
                            "children": {
                                "Classes": [
                                    {
                                        "component": "Class",
                                        "meta": {
                                            "searchCategory": "class",
                                            "name": "Markers",
                                            "source": "class Markers(Enum):\n    \"\"\"\n    Contains all the markers where code from ScanDocs templates may be placed.\n\n    This is an internal enum that holds the different markers for where\n    content is copied between files during website generation.\n    \"\"\"\n    PROJECT = \"\\\"%PROJECT_HERE%\\\"\"\n    PROJECT_NAME = \"\\\"%PROJECT_NAME_HERE%\\\"\"\n    THEME = \"\\\"%THEME_HERE%\\\"\"\n",
                                            "signature": "(value, names=None, *, module=None, qualname=None, type=None, start=1, boundary=None)",
                                            "parameters": [
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "self",
                                                        "description": null,
                                                        "annotation": null,
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "args",
                                                        "description": null,
                                                        "annotation": null,
                                                        "default": null,
                                                        "isOptional": true
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "kwargs",
                                                        "description": null,
                                                        "annotation": null,
                                                        "default": null,
                                                        "isOptional": true
                                                    },
                                                    "children": {}
                                                }
                                            ],
                                            "shortDescription": "Contains all the markers where code from ScanDocs templates may be placed.",
                                            "longDescription": "This is an internal enum that holds the different markers for where\ncontent is copied between files during website generation.",
                                            "deprecations": [],
                                            "examples": [],
                                            "links": [],
                                            "notes": [],
                                            "isAbstract": false,
                                            "searchTerms": "Markers\nContains all the markers where code from ScanDocs templates may be placed.\nThis is an internal enum that holds the different markers for where\ncontent is copied between files during website generation.",
                                            "classVariables": [
                                                {
                                                    "component": "Variable",
                                                    "meta": {
                                                        "name": "PROJECT",
                                                        "annotation": null,
                                                        "value": "Markers.PROJECT"
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Variable",
                                                    "meta": {
                                                        "name": "PROJECT_NAME",
                                                        "annotation": null,
                                                        "value": "Markers.PROJECT_NAME"
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Variable",
                                                    "meta": {
                                                        "name": "THEME",
                                                        "annotation": null,
                                                        "value": "Markers.THEME"
                                                    },
                                                    "children": {}
                                                }
                                            ]
                                        },
                                        "children": {
                                            "Methods": [
                                                {
                                                    "component": "Subroutine",
                                                    "meta": {
                                                        "searchCategory": "subroutine",
                                                        "name": "object",
                                                        "source": null,
                                                        "signature": "()",
                                                        "parameters": [],
                                                        "raises": [],
                                                        "returns": [],
                                                        "shortDescription": "The base class of the class hierarchy.",
                                                        "longDescription": "When called, it accepts no arguments and returns a new featureless\ninstance that has no instance attributes and cannot be given any.",
                                                        "deprecations": [],
                                                        "examples": [],
                                                        "links": [],
                                                        "notes": [],
                                                        "isGenerator": false,
                                                        "isAsync": false,
                                                        "isAbstract": false,
                                                        "isLambda": false,
                                                        "isContextManager": false,
                                                        "searchTerms": "object\nThe base class of the class hierarchy.\nWhen called, it accepts no arguments and returns a new featureless\ninstance that has no instance attributes and cannot be given any."
                                                    },
                                                    "children": {}
                                                }
                                            ]
                                        }
                                    }
                                ],
                                "Subroutines": []
                            }
                        },
                        {
                            "component": "Module",
                            "meta": {
                                "searchCategory": "module",
                                "name": "replacement",
                                "source": "\"\"\"\nAn internal module containing the dataclass which simplifies file contents replacement logic.\n\"\"\"\n\nfrom dataclasses import dataclass\n\n\n@dataclass\nclass Replacement:\n    \"\"\"\n    A simple dataclass representing content replacements between files.\n\n    An internal dataclass containing details about replacements made\n    between files during the website generation process, to simplify the API.\n    \"\"\"\n    marker: str\n    content: str\n",
                                "shortDescription": "An internal module containing the dataclass which simplifies file contents replacement logic.",
                                "longDescription": null,
                                "deprecations": [],
                                "examples": [],
                                "links": [],
                                "notes": [],
                                "searchTerms": "replacement\nAn internal module containing the dataclass which simplifies file contents replacement logic.\nNone",
                                "globalVariables": []
                            },
                            "children": {
                                "Classes": [
                                    {
                                        "component": "Class",
                                        "meta": {
                                            "searchCategory": "class",
                                            "name": "Replacement",
                                            "source": "@dataclass\nclass Replacement:\n    \"\"\"\n    A simple dataclass representing content replacements between files.\n\n    An internal dataclass containing details about replacements made\n    between files during the website generation process, to simplify the API.\n    \"\"\"\n    marker: str\n    content: str\n",
                                            "signature": "(marker: str, content: str) -> None",
                                            "parameters": [
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "self",
                                                        "description": null,
                                                        "annotation": null,
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "marker",
                                                        "description": null,
                                                        "annotation": "str",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "content",
                                                        "description": null,
                                                        "annotation": "str",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                }
                                            ],
                                            "shortDescription": "A simple dataclass representing content replacements between files.",
                                            "longDescription": "An internal dataclass containing details about replacements made\nbetween files during the website generation process, to simplify the API.",
                                            "deprecations": [],
                                            "examples": [],
                                            "links": [],
                                            "notes": [],
                                            "isAbstract": false,
                                            "searchTerms": "Replacement\nA simple dataclass representing content replacements between files.\nAn internal dataclass containing details about replacements made\nbetween files during the website generation process, to simplify the API.",
                                            "classVariables": []
                                        },
                                        "children": {
                                            "Methods": []
                                        }
                                    }
                                ],
                                "Subroutines": []
                            }
                        },
                        {
                            "component": "Module",
                            "meta": {
                                "searchCategory": "module",
                                "name": "themes",
                                "source": "\"\"\"\nThe module concerning the public API for customizing website themes.\n\nThis module contains the functionality behind customizable website themes before generation,\nallowing for maximum generation flexibility - themes can be adjusted post-generation also.\n\"\"\"\n\nfrom enum import Enum\n\n\nclass Themes(Enum):\n    \"\"\"\n    An enum containing all the in-built website themes that can be used.\n\n    This enum allows for users to specify which of the default skeleton themes they would like\n    to use during website generation. Themes can be easily changed after generation, but\n    this provides a convenient way of generating documentation with a customizable theme with only the Python API.\n    \"\"\"\n    SKELETON = \"skeleton\"\n    MODERN = \"modern\"\n    ROCKET = \"rocket\"\n    SEAFOAM = \"seafoam\"\n    VINTAGE = \"vintage\"\n    SAHARA = \"sahara\"\n    HAMLINDIGO = \"hamlindigo\"\n    GOLD_NOUVEAU = \"gold-nouveau\"\n    CRIMSON = \"crimson\"\n",
                                "shortDescription": "The module concerning the public API for customizing website themes.",
                                "longDescription": "This module contains the functionality behind customizable website themes before generation,\nallowing for maximum generation flexibility - themes can be adjusted post-generation also.",
                                "deprecations": [],
                                "examples": [],
                                "links": [],
                                "notes": [],
                                "searchTerms": "themes\nThe module concerning the public API for customizing website themes.\nThis module contains the functionality behind customizable website themes before generation,\nallowing for maximum generation flexibility - themes can be adjusted post-generation also.",
                                "globalVariables": []
                            },
                            "children": {
                                "Classes": [
                                    {
                                        "component": "Class",
                                        "meta": {
                                            "searchCategory": "class",
                                            "name": "Themes",
                                            "source": "class Themes(Enum):\n    \"\"\"\n    An enum containing all the in-built website themes that can be used.\n\n    This enum allows for users to specify which of the default skeleton themes they would like\n    to use during website generation. Themes can be easily changed after generation, but\n    this provides a convenient way of generating documentation with a customizable theme with only the Python API.\n    \"\"\"\n    SKELETON = \"skeleton\"\n    MODERN = \"modern\"\n    ROCKET = \"rocket\"\n    SEAFOAM = \"seafoam\"\n    VINTAGE = \"vintage\"\n    SAHARA = \"sahara\"\n    HAMLINDIGO = \"hamlindigo\"\n    GOLD_NOUVEAU = \"gold-nouveau\"\n    CRIMSON = \"crimson\"\n",
                                            "signature": "(value, names=None, *, module=None, qualname=None, type=None, start=1, boundary=None)",
                                            "parameters": [
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "self",
                                                        "description": null,
                                                        "annotation": null,
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "args",
                                                        "description": null,
                                                        "annotation": null,
                                                        "default": null,
                                                        "isOptional": true
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "kwargs",
                                                        "description": null,
                                                        "annotation": null,
                                                        "default": null,
                                                        "isOptional": true
                                                    },
                                                    "children": {}
                                                }
                                            ],
                                            "shortDescription": "An enum containing all the in-built website themes that can be used.",
                                            "longDescription": "This enum allows for users to specify which of the default skeleton themes they would like\nto use during website generation. Themes can be easily changed after generation, but\nthis provides a convenient way of generating documentation with a customizable theme with only the Python API.",
                                            "deprecations": [],
                                            "examples": [],
                                            "links": [],
                                            "notes": [],
                                            "isAbstract": false,
                                            "searchTerms": "Themes\nAn enum containing all the in-built website themes that can be used.\nThis enum allows for users to specify which of the default skeleton themes they would like\nto use during website generation. Themes can be easily changed after generation, but\nthis provides a convenient way of generating documentation with a customizable theme with only the Python API.",
                                            "classVariables": [
                                                {
                                                    "component": "Variable",
                                                    "meta": {
                                                        "name": "CRIMSON",
                                                        "annotation": null,
                                                        "value": "Themes.CRIMSON"
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Variable",
                                                    "meta": {
                                                        "name": "GOLD_NOUVEAU",
                                                        "annotation": null,
                                                        "value": "Themes.GOLD_NOUVEAU"
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Variable",
                                                    "meta": {
                                                        "name": "HAMLINDIGO",
                                                        "annotation": null,
                                                        "value": "Themes.HAMLINDIGO"
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Variable",
                                                    "meta": {
                                                        "name": "MODERN",
                                                        "annotation": null,
                                                        "value": "Themes.MODERN"
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Variable",
                                                    "meta": {
                                                        "name": "ROCKET",
                                                        "annotation": null,
                                                        "value": "Themes.ROCKET"
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Variable",
                                                    "meta": {
                                                        "name": "SAHARA",
                                                        "annotation": null,
                                                        "value": "Themes.SAHARA"
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Variable",
                                                    "meta": {
                                                        "name": "SEAFOAM",
                                                        "annotation": null,
                                                        "value": "Themes.SEAFOAM"
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Variable",
                                                    "meta": {
                                                        "name": "SKELETON",
                                                        "annotation": null,
                                                        "value": "Themes.SKELETON"
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Variable",
                                                    "meta": {
                                                        "name": "VINTAGE",
                                                        "annotation": null,
                                                        "value": "Themes.VINTAGE"
                                                    },
                                                    "children": {}
                                                }
                                            ]
                                        },
                                        "children": {
                                            "Methods": [
                                                {
                                                    "component": "Subroutine",
                                                    "meta": {
                                                        "searchCategory": "subroutine",
                                                        "name": "object",
                                                        "source": null,
                                                        "signature": "()",
                                                        "parameters": [],
                                                        "raises": [],
                                                        "returns": [],
                                                        "shortDescription": "The base class of the class hierarchy.",
                                                        "longDescription": "When called, it accepts no arguments and returns a new featureless\ninstance that has no instance attributes and cannot be given any.",
                                                        "deprecations": [],
                                                        "examples": [],
                                                        "links": [],
                                                        "notes": [],
                                                        "isGenerator": false,
                                                        "isAsync": false,
                                                        "isAbstract": false,
                                                        "isLambda": false,
                                                        "isContextManager": false,
                                                        "searchTerms": "object\nThe base class of the class hierarchy.\nWhen called, it accepts no arguments and returns a new featureless\ninstance that has no instance attributes and cannot be given any."
                                                    },
                                                    "children": {}
                                                }
                                            ]
                                        }
                                    }
                                ],
                                "Subroutines": []
                            }
                        }
                    ]
                }
            },
            {
                "component": "Package",
                "meta": {
                    "searchCategory": "package",
                    "name": "structures",
                    "source": "\"\"\"\nDataclasses to interface with projects.\n\nThis package includes the functionality behind scanning a python project.\nIt allows for structures (such as classes) in a codebase to be interfaced with in a consistent manner,\nand provides tooling such as serialization, whilst storing only the necessary information\nabout each structure in a scanned codebase, to minimize build times.\n\"\"\"\n\n\nfrom .class_ import Class\nfrom .module import Module\nfrom .package import Package\nfrom .subroutine import Subroutine\nfrom .structure import Structure\nfrom .source_structure import SourceStructure\nfrom .signature_structure import SignatureStructure\nfrom .searchable_structure import SearchableStructure\n",
                    "shortDescription": "Dataclasses to interface with projects.",
                    "longDescription": "This package includes the functionality behind scanning a python project.\nIt allows for structures (such as classes) in a codebase to be interfaced with in a consistent manner,\nand provides tooling such as serialization, whilst storing only the necessary information\nabout each structure in a scanned codebase, to minimize build times.",
                    "deprecations": [],
                    "examples": [],
                    "links": [],
                    "notes": [],
                    "searchTerms": "structures\nDataclasses to interface with projects.\nThis package includes the functionality behind scanning a python project.\nIt allows for structures (such as classes) in a codebase to be interfaced with in a consistent manner,\nand provides tooling such as serialization, whilst storing only the necessary information\nabout each structure in a scanned codebase, to minimize build times."
                },
                "children": {
                    "Sub-Packages": [],
                    "Modules": [
                        {
                            "component": "Module",
                            "meta": {
                                "searchCategory": "module",
                                "name": "class_",
                                "source": "\"\"\"\nThe module containing the dataclass representing Python classes.\n\"\"\"\n\nfrom __future__ import annotations\nfrom dataclasses import dataclass\nfrom typing import Callable\nfrom inspect import isabstract, isdatadescriptor, ismemberdescriptor, ismethoddescriptor, isgetsetdescriptor\nfrom .docstring import Docstring\nfrom .structure import Structure\nfrom .signature_structure import SignatureStructure\nfrom .serialized import Serialized\nfrom .subroutine import Subroutine\nfrom .searchable_structure import SearchableStructure\nfrom .variable import Variable\nfrom ..tags import Deprecated, Link, Note, Example\n\n\n@dataclass(frozen=True, slots=True)\nclass Class(SignatureStructure[type], SearchableStructure):\n    \"\"\"\n    The dataclass representing Python classes.\n    \"\"\"\n    methods: list[Subroutine]\n    is_abstract: bool\n    class_variables: list[Variable]\n\n    @property\n    def search_terms(self) -> str:\n        return (\n            f\"{self.name}\\n{self.docstring.short_description if self.docstring else ''}\"\n            f\"\\n{self.docstring.long_description if self.docstring else ''}\"\n        )\n\n    @property\n    def search_category(self) -> str:\n        return \"class\"\n\n    @classmethod\n    def from_class(cls, class_: type, is_declared: bool) -> Class:\n        name = class_.__name__\n        docstring = cls.get_docstring(class_)\n        try:\n            abstract_methods = class_.__abstractmethods__\n        except AttributeError:\n            abstract_methods = []\n        return cls(\n            name,\n            cls.check_is_private(class_),\n            name.startswith(\"__\"),\n            cls.get_source(class_),\n            Docstring.from_docstring(docstring) if docstring else None,\n            Deprecated.get_tags(class_),\n            Example.get_tags(class_),\n            Link.get_tags(class_),\n            Note.get_tags(class_),\n            is_declared,\n            cls.get_signature(class_),\n            [\n                Subroutine.from_subroutine(\n                    getattr(class_, method),\n                    is_declared,\n                    is_abstract=method in abstract_methods\n                )\n                for method in class_.__dict__ if callable(getattr(class_, method))\n            ],\n            isabstract(class_),\n            [\n                variable for variable in Variable.many_from_scope(\n                    class_, class_.__module__,\n                    lambda variable: not (\n                        ismemberdescriptor(variable) or isdatadescriptor(variable) or\n                        ismethoddescriptor(variable) or isgetsetdescriptor(variable) or callable(variable)\n                    )\n                )\n            ]\n        )\n\n    @property\n    def initializer(self) -> Subroutine:\n        return next(filter(\n            lambda method: method.name == \"__init__\", self.methods), Subroutine.from_subroutine(object.__init__, False)\n        )\n\n    def serialize(self, child_filter: Callable[[Structure], bool] = lambda _: True) -> Serialized:\n        return Serialized(\n            \"Class\",\n            {\n                \"searchCategory\": self.search_category,\n                \"name\": self.name,\n                \"source\": self.source,\n                \"signature\": str(self.signature),\n                \"parameters\": self.initializer.serialize(child_filter=child_filter).meta.get(\"parameters\", []),\n                \"shortDescription\": self.docstring.short_description if self.docstring else None,\n                \"longDescription\": self.docstring.long_description if self.docstring else None,\n                \"deprecations\": [deprecation.json_serialize() for deprecation in self.deprecations],\n                \"examples\": [example.json_serialize() for example in self.examples],\n                \"links\": [link.json_serialize() for link in self.links],\n                \"notes\": [note.json_serialize() for note in self.notes],\n                \"isAbstract\": self.is_abstract,\n                \"searchTerms\": self.search_terms,\n                \"classVariables\": [\n                    variable.serialize(child_filter=child_filter).to_json()\n                    for variable in self.class_variables if child_filter(variable)\n                ]\n            },\n            {\n                \"Methods\": [\n                    method.serialize(child_filter=child_filter) for method in self.methods if child_filter(method)\n                ]\n            }\n        )\n",
                                "shortDescription": "The module containing the dataclass representing Python classes.",
                                "longDescription": null,
                                "deprecations": [],
                                "examples": [],
                                "links": [],
                                "notes": [],
                                "searchTerms": "class_\nThe module containing the dataclass representing Python classes.\nNone",
                                "globalVariables": []
                            },
                            "children": {
                                "Classes": [
                                    {
                                        "component": "Class",
                                        "meta": {
                                            "searchCategory": "class",
                                            "name": "Class",
                                            "source": "@dataclass(frozen=True, slots=True)\nclass Class(SignatureStructure[type], SearchableStructure):\n    \"\"\"\n    The dataclass representing Python classes.\n    \"\"\"\n    methods: list[Subroutine]\n    is_abstract: bool\n    class_variables: list[Variable]\n\n    @property\n    def search_terms(self) -> str:\n        return (\n            f\"{self.name}\\n{self.docstring.short_description if self.docstring else ''}\"\n            f\"\\n{self.docstring.long_description if self.docstring else ''}\"\n        )\n\n    @property\n    def search_category(self) -> str:\n        return \"class\"\n\n    @classmethod\n    def from_class(cls, class_: type, is_declared: bool) -> Class:\n        name = class_.__name__\n        docstring = cls.get_docstring(class_)\n        try:\n            abstract_methods = class_.__abstractmethods__\n        except AttributeError:\n            abstract_methods = []\n        return cls(\n            name,\n            cls.check_is_private(class_),\n            name.startswith(\"__\"),\n            cls.get_source(class_),\n            Docstring.from_docstring(docstring) if docstring else None,\n            Deprecated.get_tags(class_),\n            Example.get_tags(class_),\n            Link.get_tags(class_),\n            Note.get_tags(class_),\n            is_declared,\n            cls.get_signature(class_),\n            [\n                Subroutine.from_subroutine(\n                    getattr(class_, method),\n                    is_declared,\n                    is_abstract=method in abstract_methods\n                )\n                for method in class_.__dict__ if callable(getattr(class_, method))\n            ],\n            isabstract(class_),\n            [\n                variable for variable in Variable.many_from_scope(\n                    class_, class_.__module__,\n                    lambda variable: not (\n                        ismemberdescriptor(variable) or isdatadescriptor(variable) or\n                        ismethoddescriptor(variable) or isgetsetdescriptor(variable) or callable(variable)\n                    )\n                )\n            ]\n        )\n\n    @property\n    def initializer(self) -> Subroutine:\n        return next(filter(\n            lambda method: method.name == \"__init__\", self.methods), Subroutine.from_subroutine(object.__init__, False)\n        )\n\n    def serialize(self, child_filter: Callable[[Structure], bool] = lambda _: True) -> Serialized:\n        return Serialized(\n            \"Class\",\n            {\n                \"searchCategory\": self.search_category,\n                \"name\": self.name,\n                \"source\": self.source,\n                \"signature\": str(self.signature),\n                \"parameters\": self.initializer.serialize(child_filter=child_filter).meta.get(\"parameters\", []),\n                \"shortDescription\": self.docstring.short_description if self.docstring else None,\n                \"longDescription\": self.docstring.long_description if self.docstring else None,\n                \"deprecations\": [deprecation.json_serialize() for deprecation in self.deprecations],\n                \"examples\": [example.json_serialize() for example in self.examples],\n                \"links\": [link.json_serialize() for link in self.links],\n                \"notes\": [note.json_serialize() for note in self.notes],\n                \"isAbstract\": self.is_abstract,\n                \"searchTerms\": self.search_terms,\n                \"classVariables\": [\n                    variable.serialize(child_filter=child_filter).to_json()\n                    for variable in self.class_variables if child_filter(variable)\n                ]\n            },\n            {\n                \"Methods\": [\n                    method.serialize(child_filter=child_filter) for method in self.methods if child_filter(method)\n                ]\n            }\n        )\n",
                                            "signature": "(name: 'str', is_private: 'bool', is_dunder: 'bool', source: 'str', docstring: 'Docstring | None', deprecations: 'list[Deprecated]', examples: 'list[Example] | None', links: 'list[Link] | None', notes: 'list[Note] | None', is_declared: 'bool', signature: 'Signature | None', methods: 'list[Subroutine]', is_abstract: 'bool', class_variables: 'list[Variable]') -> None",
                                            "parameters": [
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "self",
                                                        "description": null,
                                                        "annotation": null,
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "name",
                                                        "description": null,
                                                        "annotation": "str",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "is_private",
                                                        "description": null,
                                                        "annotation": "bool",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "is_dunder",
                                                        "description": null,
                                                        "annotation": "bool",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "source",
                                                        "description": null,
                                                        "annotation": "str",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "docstring",
                                                        "description": null,
                                                        "annotation": "Docstring | None",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "deprecations",
                                                        "description": null,
                                                        "annotation": "list[Deprecated]",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "examples",
                                                        "description": null,
                                                        "annotation": "list[Example] | None",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "links",
                                                        "description": null,
                                                        "annotation": "list[Link] | None",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "notes",
                                                        "description": null,
                                                        "annotation": "list[Note] | None",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "is_declared",
                                                        "description": null,
                                                        "annotation": "bool",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "signature",
                                                        "description": null,
                                                        "annotation": "Signature | None",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "methods",
                                                        "description": null,
                                                        "annotation": "list[Subroutine]",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "is_abstract",
                                                        "description": null,
                                                        "annotation": "bool",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "class_variables",
                                                        "description": null,
                                                        "annotation": "list[Variable]",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                }
                                            ],
                                            "shortDescription": "The dataclass representing Python classes.",
                                            "longDescription": null,
                                            "deprecations": [],
                                            "examples": [],
                                            "links": [],
                                            "notes": [],
                                            "isAbstract": false,
                                            "searchTerms": "Class\nThe dataclass representing Python classes.\nNone",
                                            "classVariables": []
                                        },
                                        "children": {
                                            "Methods": [
                                                {
                                                    "component": "Subroutine",
                                                    "meta": {
                                                        "searchCategory": "subroutine",
                                                        "name": "from_class",
                                                        "source": "    @classmethod\n    def from_class(cls, class_: type, is_declared: bool) -> Class:\n        name = class_.__name__\n        docstring = cls.get_docstring(class_)\n        try:\n            abstract_methods = class_.__abstractmethods__\n        except AttributeError:\n            abstract_methods = []\n        return cls(\n            name,\n            cls.check_is_private(class_),\n            name.startswith(\"__\"),\n            cls.get_source(class_),\n            Docstring.from_docstring(docstring) if docstring else None,\n            Deprecated.get_tags(class_),\n            Example.get_tags(class_),\n            Link.get_tags(class_),\n            Note.get_tags(class_),\n            is_declared,\n            cls.get_signature(class_),\n            [\n                Subroutine.from_subroutine(\n                    getattr(class_, method),\n                    is_declared,\n                    is_abstract=method in abstract_methods\n                )\n                for method in class_.__dict__ if callable(getattr(class_, method))\n            ],\n            isabstract(class_),\n            [\n                variable for variable in Variable.many_from_scope(\n                    class_, class_.__module__,\n                    lambda variable: not (\n                        ismemberdescriptor(variable) or isdatadescriptor(variable) or\n                        ismethoddescriptor(variable) or isgetsetdescriptor(variable) or callable(variable)\n                    )\n                )\n            ]\n        )\n",
                                                        "signature": "(class_: 'type', is_declared: 'bool') -> 'Class'",
                                                        "parameters": [
                                                            {
                                                                "component": "Parameter",
                                                                "meta": {
                                                                    "name": "class_",
                                                                    "description": null,
                                                                    "annotation": "type",
                                                                    "default": null,
                                                                    "isOptional": false
                                                                },
                                                                "children": {}
                                                            },
                                                            {
                                                                "component": "Parameter",
                                                                "meta": {
                                                                    "name": "is_declared",
                                                                    "description": null,
                                                                    "annotation": "bool",
                                                                    "default": null,
                                                                    "isOptional": false
                                                                },
                                                                "children": {}
                                                            }
                                                        ],
                                                        "raises": [],
                                                        "returns": [
                                                            {
                                                                "component": "SubroutineReturn",
                                                                "meta": {
                                                                    "description": "No description...",
                                                                    "annotation": "Class"
                                                                },
                                                                "children": {}
                                                            }
                                                        ],
                                                        "shortDescription": null,
                                                        "longDescription": null,
                                                        "deprecations": [],
                                                        "examples": [],
                                                        "links": [],
                                                        "notes": [],
                                                        "isGenerator": false,
                                                        "isAsync": false,
                                                        "isAbstract": false,
                                                        "isLambda": false,
                                                        "isContextManager": false,
                                                        "searchTerms": "from_class\n\n"
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Subroutine",
                                                    "meta": {
                                                        "searchCategory": "subroutine",
                                                        "name": "serialize",
                                                        "source": "    def serialize(self, child_filter: Callable[[Structure], bool] = lambda _: True) -> Serialized:\n        return Serialized(\n            \"Class\",\n            {\n                \"searchCategory\": self.search_category,\n                \"name\": self.name,\n                \"source\": self.source,\n                \"signature\": str(self.signature),\n                \"parameters\": self.initializer.serialize(child_filter=child_filter).meta.get(\"parameters\", []),\n                \"shortDescription\": self.docstring.short_description if self.docstring else None,\n                \"longDescription\": self.docstring.long_description if self.docstring else None,\n                \"deprecations\": [deprecation.json_serialize() for deprecation in self.deprecations],\n                \"examples\": [example.json_serialize() for example in self.examples],\n                \"links\": [link.json_serialize() for link in self.links],\n                \"notes\": [note.json_serialize() for note in self.notes],\n                \"isAbstract\": self.is_abstract,\n                \"searchTerms\": self.search_terms,\n                \"classVariables\": [\n                    variable.serialize(child_filter=child_filter).to_json()\n                    for variable in self.class_variables if child_filter(variable)\n                ]\n            },\n            {\n                \"Methods\": [\n                    method.serialize(child_filter=child_filter) for method in self.methods if child_filter(method)\n                ]\n            }\n        )\n",
                                                        "signature": "(self, child_filter: 'Callable[[Structure], bool]' = <function Class.<lambda> at 0x0000022DE2EA7D80>) -> 'Serialized'",
                                                        "parameters": [
                                                            {
                                                                "component": "Parameter",
                                                                "meta": {
                                                                    "name": "self",
                                                                    "description": null,
                                                                    "annotation": null,
                                                                    "default": null,
                                                                    "isOptional": false
                                                                },
                                                                "children": {}
                                                            },
                                                            {
                                                                "component": "Parameter",
                                                                "meta": {
                                                                    "name": "child_filter",
                                                                    "description": "The filter method used to omit unwanted structures from the serializes project tree",
                                                                    "annotation": "Callable[[Structure], bool]",
                                                                    "default": "<function Class.<lambda> at 0x0000022DE2EA7D80>",
                                                                    "isOptional": true
                                                                },
                                                                "children": {}
                                                            }
                                                        ],
                                                        "raises": [],
                                                        "returns": [
                                                            {
                                                                "component": "SubroutineReturn",
                                                                "meta": {
                                                                    "description": "The serialized structure, in a compatible JSON format",
                                                                    "annotation": "Serialized"
                                                                },
                                                                "children": {}
                                                            }
                                                        ],
                                                        "shortDescription": "Serializes the structure into a Serialized object, so that it can be used in the website.",
                                                        "longDescription": "A Serialized object is a standardized format for serialization structures, with customizable filtering\noptions to omit certain structures from the project tree as desired,\nand a convenient method for conversion to JSON.",
                                                        "deprecations": [],
                                                        "examples": [],
                                                        "links": [],
                                                        "notes": [],
                                                        "isGenerator": false,
                                                        "isAsync": false,
                                                        "isAbstract": false,
                                                        "isLambda": false,
                                                        "isContextManager": false,
                                                        "searchTerms": "serialize\nSerializes the structure into a Serialized object, so that it can be used in the website.\nA Serialized object is a standardized format for serialization structures, with customizable filtering\noptions to omit certain structures from the project tree as desired,\nand a convenient method for conversion to JSON."
                                                    },
                                                    "children": {}
                                                }
                                            ]
                                        }
                                    }
                                ],
                                "Subroutines": []
                            }
                        },
                        {
                            "component": "Module",
                            "meta": {
                                "searchCategory": "module",
                                "name": "deprecation",
                                "source": "\"\"\"\nThe module containing the dataclass representing deprecation notices in a Python docstring.\n\nThe dataclass contained in this module has been deprecated in favour of using Deprecation markers.\nDeprecation notices in package or module level docstrings should be placed in the docstring description.\n\"\"\"\n\nfrom __future__ import annotations\nfrom dataclasses import dataclass\nfrom typing import Callable\nfrom docstring_parser import DocstringDeprecated\nfrom .serialized import Serialized\nfrom .structure import Structure\nfrom ..tags import Deprecated, Link\n\n\n@Deprecated(\n    \"v0.1.1\",\n    \"Deprecated in favour of using tags to indicate deprecation, as it is considered to be more robust\"\n)\n@dataclass(frozen=True, slots=True)\nclass Deprecation(Structure):\n    \"\"\"\n    The dataclass representing deprecation notices in a Python docstring.\n\n    This class is deprecated, but is still used to store deprecation details -\n    this information is not used by default in the website generation.\n    \"\"\"\n    description: str\n    version: str\n\n    @classmethod\n    @Link(\n        \"Docstring Parser API\", \"https://pypi.org/project/docstring-parser/\",\n        \"The API that provides the DocstringDeprecated objects this method uses.\"\n    )\n    def from_docstring_deprecated(cls, deprecation: DocstringDeprecated) -> Deprecation:\n        \"\"\"\n        Forms an instance of this class from a DocstringDeprecated object.\n\n        This class method is used to form instances of this class from DocstringDeprecated objects,\n        as provided by the Docstring Parser API.\n\n        :param deprecation: The object to form a new object from\n        :return: A corresponding instance of this class\n        \"\"\"\n        return cls(\n            deprecation.description,\n            deprecation.version\n        )\n\n    def serialize(self, child_filter: Callable[[Structure], bool] = lambda _: True) -> Serialized:\n        return Serialized(\n            \"Deprecation\",\n            {\n                \"description\": self.description,\n                \"version\": self.version\n            },\n            {}\n        )\n",
                                "shortDescription": "The module containing the dataclass representing deprecation notices in a Python docstring.",
                                "longDescription": "The dataclass contained in this module has been deprecated in favour of using Deprecation markers.\nDeprecation notices in package or module level docstrings should be placed in the docstring description.",
                                "deprecations": [],
                                "examples": [],
                                "links": [],
                                "notes": [],
                                "searchTerms": "deprecation\nThe module containing the dataclass representing deprecation notices in a Python docstring.\nThe dataclass contained in this module has been deprecated in favour of using Deprecation markers.\nDeprecation notices in package or module level docstrings should be placed in the docstring description.",
                                "globalVariables": []
                            },
                            "children": {
                                "Classes": [
                                    {
                                        "component": "Class",
                                        "meta": {
                                            "searchCategory": "class",
                                            "name": "Deprecation",
                                            "source": "@Deprecated(\n    \"v0.1.1\",\n    \"Deprecated in favour of using tags to indicate deprecation, as it is considered to be more robust\"\n)\n@dataclass(frozen=True, slots=True)\nclass Deprecation(Structure):\n    \"\"\"\n    The dataclass representing deprecation notices in a Python docstring.\n\n    This class is deprecated, but is still used to store deprecation details -\n    this information is not used by default in the website generation.\n    \"\"\"\n    description: str\n    version: str\n\n    @classmethod\n    @Link(\n        \"Docstring Parser API\", \"https://pypi.org/project/docstring-parser/\",\n        \"The API that provides the DocstringDeprecated objects this method uses.\"\n    )\n    def from_docstring_deprecated(cls, deprecation: DocstringDeprecated) -> Deprecation:\n        \"\"\"\n        Forms an instance of this class from a DocstringDeprecated object.\n\n        This class method is used to form instances of this class from DocstringDeprecated objects,\n        as provided by the Docstring Parser API.\n\n        :param deprecation: The object to form a new object from\n        :return: A corresponding instance of this class\n        \"\"\"\n        return cls(\n            deprecation.description,\n            deprecation.version\n        )\n\n    def serialize(self, child_filter: Callable[[Structure], bool] = lambda _: True) -> Serialized:\n        return Serialized(\n            \"Deprecation\",\n            {\n                \"description\": self.description,\n                \"version\": self.version\n            },\n            {}\n        )\n",
                                            "signature": "(description: 'str', version: 'str') -> None",
                                            "parameters": [
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "self",
                                                        "description": null,
                                                        "annotation": null,
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "description",
                                                        "description": null,
                                                        "annotation": "str",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "version",
                                                        "description": null,
                                                        "annotation": "str",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                }
                                            ],
                                            "shortDescription": "The dataclass representing deprecation notices in a Python docstring.",
                                            "longDescription": "This class is deprecated, but is still used to store deprecation details -\nthis information is not used by default in the website generation.",
                                            "deprecations": [
                                                {
                                                    "version": "v0.1.1",
                                                    "description": "Deprecated in favour of using tags to indicate deprecation, as it is considered to be more robust"
                                                }
                                            ],
                                            "examples": [],
                                            "links": [],
                                            "notes": [],
                                            "isAbstract": false,
                                            "searchTerms": "Deprecation\nThe dataclass representing deprecation notices in a Python docstring.\nThis class is deprecated, but is still used to store deprecation details -\nthis information is not used by default in the website generation.",
                                            "classVariables": []
                                        },
                                        "children": {
                                            "Methods": [
                                                {
                                                    "component": "Subroutine",
                                                    "meta": {
                                                        "searchCategory": "subroutine",
                                                        "name": "from_docstring_deprecated",
                                                        "source": "    @classmethod\n    @Link(\n        \"Docstring Parser API\", \"https://pypi.org/project/docstring-parser/\",\n        \"The API that provides the DocstringDeprecated objects this method uses.\"\n    )\n    def from_docstring_deprecated(cls, deprecation: DocstringDeprecated) -> Deprecation:\n        \"\"\"\n        Forms an instance of this class from a DocstringDeprecated object.\n\n        This class method is used to form instances of this class from DocstringDeprecated objects,\n        as provided by the Docstring Parser API.\n\n        :param deprecation: The object to form a new object from\n        :return: A corresponding instance of this class\n        \"\"\"\n        return cls(\n            deprecation.description,\n            deprecation.version\n        )\n",
                                                        "signature": "(deprecation: 'DocstringDeprecated') -> 'Deprecation'",
                                                        "parameters": [
                                                            {
                                                                "component": "Parameter",
                                                                "meta": {
                                                                    "name": "deprecation",
                                                                    "description": "The object to form a new object from",
                                                                    "annotation": "DocstringDeprecated",
                                                                    "default": null,
                                                                    "isOptional": false
                                                                },
                                                                "children": {}
                                                            }
                                                        ],
                                                        "raises": [],
                                                        "returns": [
                                                            {
                                                                "component": "SubroutineReturn",
                                                                "meta": {
                                                                    "description": "A corresponding instance of this class",
                                                                    "annotation": "Deprecation"
                                                                },
                                                                "children": {}
                                                            }
                                                        ],
                                                        "shortDescription": "Forms an instance of this class from a DocstringDeprecated object.",
                                                        "longDescription": "This class method is used to form instances of this class from DocstringDeprecated objects,\nas provided by the Docstring Parser API.",
                                                        "deprecations": [],
                                                        "examples": [],
                                                        "links": [
                                                            {
                                                                "title": "Docstring Parser API",
                                                                "href": "https://pypi.org/project/docstring-parser/",
                                                                "description": "The API that provides the DocstringDeprecated objects this method uses."
                                                            }
                                                        ],
                                                        "notes": [],
                                                        "isGenerator": false,
                                                        "isAsync": false,
                                                        "isAbstract": false,
                                                        "isLambda": false,
                                                        "isContextManager": false,
                                                        "searchTerms": "from_docstring_deprecated\nForms an instance of this class from a DocstringDeprecated object.\nThis class method is used to form instances of this class from DocstringDeprecated objects,\nas provided by the Docstring Parser API."
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Subroutine",
                                                    "meta": {
                                                        "searchCategory": "subroutine",
                                                        "name": "serialize",
                                                        "source": "    def serialize(self, child_filter: Callable[[Structure], bool] = lambda _: True) -> Serialized:\n        return Serialized(\n            \"Deprecation\",\n            {\n                \"description\": self.description,\n                \"version\": self.version\n            },\n            {}\n        )\n",
                                                        "signature": "(self, child_filter: 'Callable[[Structure], bool]' = <function Deprecation.<lambda> at 0x0000022DE2EA4AE0>) -> 'Serialized'",
                                                        "parameters": [
                                                            {
                                                                "component": "Parameter",
                                                                "meta": {
                                                                    "name": "self",
                                                                    "description": null,
                                                                    "annotation": null,
                                                                    "default": null,
                                                                    "isOptional": false
                                                                },
                                                                "children": {}
                                                            },
                                                            {
                                                                "component": "Parameter",
                                                                "meta": {
                                                                    "name": "child_filter",
                                                                    "description": "The filter method used to omit unwanted structures from the serializes project tree",
                                                                    "annotation": "Callable[[Structure], bool]",
                                                                    "default": "<function Deprecation.<lambda> at 0x0000022DE2EA4AE0>",
                                                                    "isOptional": true
                                                                },
                                                                "children": {}
                                                            }
                                                        ],
                                                        "raises": [],
                                                        "returns": [
                                                            {
                                                                "component": "SubroutineReturn",
                                                                "meta": {
                                                                    "description": "The serialized structure, in a compatible JSON format",
                                                                    "annotation": "Serialized"
                                                                },
                                                                "children": {}
                                                            }
                                                        ],
                                                        "shortDescription": "Serializes the structure into a Serialized object, so that it can be used in the website.",
                                                        "longDescription": "A Serialized object is a standardized format for serialization structures, with customizable filtering\noptions to omit certain structures from the project tree as desired,\nand a convenient method for conversion to JSON.",
                                                        "deprecations": [],
                                                        "examples": [],
                                                        "links": [],
                                                        "notes": [],
                                                        "isGenerator": false,
                                                        "isAsync": false,
                                                        "isAbstract": false,
                                                        "isLambda": false,
                                                        "isContextManager": false,
                                                        "searchTerms": "serialize\nSerializes the structure into a Serialized object, so that it can be used in the website.\nA Serialized object is a standardized format for serialization structures, with customizable filtering\noptions to omit certain structures from the project tree as desired,\nand a convenient method for conversion to JSON."
                                                    },
                                                    "children": {}
                                                }
                                            ]
                                        }
                                    }
                                ],
                                "Subroutines": []
                            }
                        },
                        {
                            "component": "Module",
                            "meta": {
                                "searchCategory": "module",
                                "name": "docstring",
                                "source": "\"\"\"\nThe module containing the dataclass representing Python docstrings.\n\"\"\"\n\nfrom __future__ import annotations\nfrom dataclasses import dataclass\nfrom docstring_parser import Docstring as ParserDocstring\nfrom .parameter import Parameter\nfrom .error import Error\nfrom .subroutine_return import SubroutineReturn\nfrom .deprecation import Deprecation\nfrom ..tags import Link\n\n\n@dataclass(frozen=True, slots=True)\nclass Docstring:\n    \"\"\"\n    The dataclass representing Python docstrings.\n    \"\"\"\n    short_description: str\n    long_description: str\n    deprecation: Deprecation | None\n    parameters: list[Parameter]\n    raises: list[Error]\n    returns: list[SubroutineReturn]\n\n    @classmethod\n    @Link(\n        \"Docstring Parser API\", \"https://pypi.org/project/docstring-parser/\",\n        \"The API that provides the Docstring objects this method uses.\"\n    )\n    def from_docstring(cls, docstring: ParserDocstring, return_annotation: str | None = None) -> Docstring:\n        \"\"\"\n        Forms an instance of this class from an external Docstring object.\n\n        This class method is used to form instances of this class from Docstring objects,\n        as provided by the Docstring Parser API.\n\n        :param docstring: The object to form a new object from\n        :param return_annotation: The return annotation of the corresponding subroutine, if applicable\n        :return: A corresponding instance of this class\n        \"\"\"\n        return cls(\n            docstring.short_description,\n            docstring.long_description,\n            Deprecation.from_docstring_deprecated(docstring.deprecation) if docstring.deprecation else None,\n            [Parameter(\n                parameter.arg_name,\n                parameter.description,\n                parameter.type_name,\n                parameter.default,\n                parameter.is_optional\n            ) for parameter in docstring.params],\n            [Error.from_docstring_raises(error) for error in docstring.raises],\n            [SubroutineReturn.from_docstring_returns(\n                subroutine_return\n            ).patch_annotation(return_annotation) for subroutine_return in docstring.many_returns]\n        )\n",
                                "shortDescription": "The module containing the dataclass representing Python docstrings.",
                                "longDescription": null,
                                "deprecations": [],
                                "examples": [],
                                "links": [],
                                "notes": [],
                                "searchTerms": "docstring\nThe module containing the dataclass representing Python docstrings.\nNone",
                                "globalVariables": []
                            },
                            "children": {
                                "Classes": [
                                    {
                                        "component": "Class",
                                        "meta": {
                                            "searchCategory": "class",
                                            "name": "Docstring",
                                            "source": "@dataclass(frozen=True, slots=True)\nclass Docstring:\n    \"\"\"\n    The dataclass representing Python docstrings.\n    \"\"\"\n    short_description: str\n    long_description: str\n    deprecation: Deprecation | None\n    parameters: list[Parameter]\n    raises: list[Error]\n    returns: list[SubroutineReturn]\n\n    @classmethod\n    @Link(\n        \"Docstring Parser API\", \"https://pypi.org/project/docstring-parser/\",\n        \"The API that provides the Docstring objects this method uses.\"\n    )\n    def from_docstring(cls, docstring: ParserDocstring, return_annotation: str | None = None) -> Docstring:\n        \"\"\"\n        Forms an instance of this class from an external Docstring object.\n\n        This class method is used to form instances of this class from Docstring objects,\n        as provided by the Docstring Parser API.\n\n        :param docstring: The object to form a new object from\n        :param return_annotation: The return annotation of the corresponding subroutine, if applicable\n        :return: A corresponding instance of this class\n        \"\"\"\n        return cls(\n            docstring.short_description,\n            docstring.long_description,\n            Deprecation.from_docstring_deprecated(docstring.deprecation) if docstring.deprecation else None,\n            [Parameter(\n                parameter.arg_name,\n                parameter.description,\n                parameter.type_name,\n                parameter.default,\n                parameter.is_optional\n            ) for parameter in docstring.params],\n            [Error.from_docstring_raises(error) for error in docstring.raises],\n            [SubroutineReturn.from_docstring_returns(\n                subroutine_return\n            ).patch_annotation(return_annotation) for subroutine_return in docstring.many_returns]\n        )\n",
                                            "signature": "(short_description: 'str', long_description: 'str', deprecation: 'Deprecation | None', parameters: 'list[Parameter]', raises: 'list[Error]', returns: 'list[SubroutineReturn]') -> None",
                                            "parameters": [
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "self",
                                                        "description": null,
                                                        "annotation": null,
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "short_description",
                                                        "description": null,
                                                        "annotation": "str",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "long_description",
                                                        "description": null,
                                                        "annotation": "str",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "deprecation",
                                                        "description": null,
                                                        "annotation": "Deprecation | None",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "parameters",
                                                        "description": null,
                                                        "annotation": "list[Parameter]",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "raises",
                                                        "description": null,
                                                        "annotation": "list[Error]",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "returns",
                                                        "description": null,
                                                        "annotation": "list[SubroutineReturn]",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                }
                                            ],
                                            "shortDescription": "The dataclass representing Python docstrings.",
                                            "longDescription": null,
                                            "deprecations": [],
                                            "examples": [],
                                            "links": [],
                                            "notes": [],
                                            "isAbstract": false,
                                            "searchTerms": "Docstring\nThe dataclass representing Python docstrings.\nNone",
                                            "classVariables": []
                                        },
                                        "children": {
                                            "Methods": [
                                                {
                                                    "component": "Subroutine",
                                                    "meta": {
                                                        "searchCategory": "subroutine",
                                                        "name": "from_docstring",
                                                        "source": "    @classmethod\n    @Link(\n        \"Docstring Parser API\", \"https://pypi.org/project/docstring-parser/\",\n        \"The API that provides the Docstring objects this method uses.\"\n    )\n    def from_docstring(cls, docstring: ParserDocstring, return_annotation: str | None = None) -> Docstring:\n        \"\"\"\n        Forms an instance of this class from an external Docstring object.\n\n        This class method is used to form instances of this class from Docstring objects,\n        as provided by the Docstring Parser API.\n\n        :param docstring: The object to form a new object from\n        :param return_annotation: The return annotation of the corresponding subroutine, if applicable\n        :return: A corresponding instance of this class\n        \"\"\"\n        return cls(\n            docstring.short_description,\n            docstring.long_description,\n            Deprecation.from_docstring_deprecated(docstring.deprecation) if docstring.deprecation else None,\n            [Parameter(\n                parameter.arg_name,\n                parameter.description,\n                parameter.type_name,\n                parameter.default,\n                parameter.is_optional\n            ) for parameter in docstring.params],\n            [Error.from_docstring_raises(error) for error in docstring.raises],\n            [SubroutineReturn.from_docstring_returns(\n                subroutine_return\n            ).patch_annotation(return_annotation) for subroutine_return in docstring.many_returns]\n        )\n",
                                                        "signature": "(docstring: 'ParserDocstring', return_annotation: 'str | None' = None) -> 'Docstring'",
                                                        "parameters": [
                                                            {
                                                                "component": "Parameter",
                                                                "meta": {
                                                                    "name": "docstring",
                                                                    "description": "The object to form a new object from",
                                                                    "annotation": "ParserDocstring",
                                                                    "default": null,
                                                                    "isOptional": false
                                                                },
                                                                "children": {}
                                                            },
                                                            {
                                                                "component": "Parameter",
                                                                "meta": {
                                                                    "name": "return_annotation",
                                                                    "description": "The return annotation of the corresponding subroutine, if applicable",
                                                                    "annotation": "str | None",
                                                                    "default": "None",
                                                                    "isOptional": true
                                                                },
                                                                "children": {}
                                                            }
                                                        ],
                                                        "raises": [],
                                                        "returns": [
                                                            {
                                                                "component": "SubroutineReturn",
                                                                "meta": {
                                                                    "description": "A corresponding instance of this class",
                                                                    "annotation": "Docstring"
                                                                },
                                                                "children": {}
                                                            }
                                                        ],
                                                        "shortDescription": "Forms an instance of this class from an external Docstring object.",
                                                        "longDescription": "This class method is used to form instances of this class from Docstring objects,\nas provided by the Docstring Parser API.",
                                                        "deprecations": [],
                                                        "examples": [],
                                                        "links": [
                                                            {
                                                                "title": "Docstring Parser API",
                                                                "href": "https://pypi.org/project/docstring-parser/",
                                                                "description": "The API that provides the Docstring objects this method uses."
                                                            }
                                                        ],
                                                        "notes": [],
                                                        "isGenerator": false,
                                                        "isAsync": false,
                                                        "isAbstract": false,
                                                        "isLambda": false,
                                                        "isContextManager": false,
                                                        "searchTerms": "from_docstring\nForms an instance of this class from an external Docstring object.\nThis class method is used to form instances of this class from Docstring objects,\nas provided by the Docstring Parser API."
                                                    },
                                                    "children": {}
                                                }
                                            ]
                                        }
                                    }
                                ],
                                "Subroutines": []
                            }
                        },
                        {
                            "component": "Module",
                            "meta": {
                                "searchCategory": "module",
                                "name": "error",
                                "source": "\"\"\"\nThe module containing the dataclass representing Python exceptions.\n\"\"\"\n\nfrom __future__ import annotations\nfrom dataclasses import dataclass\nfrom typing import Callable\nfrom docstring_parser import DocstringRaises\nfrom .serialized import Serialized\nfrom .structure import Structure\nfrom ..tags import Link\n\n\n@dataclass(frozen=True, slots=True)\nclass Error(Structure):\n    \"\"\"\n    The dataclass representing Python exceptions.\n    \"\"\"\n    name: str\n    description: str\n\n    @classmethod\n    @Link(\n        \"Docstring Parser API\", \"https://pypi.org/project/docstring-parser/\",\n        \"The API that provides the DocstringRaises objects this method uses.\"\n    )\n    def from_docstring_raises(cls, raises: DocstringRaises) -> Error:\n        \"\"\"\n        Forms an instance of this class from a DocstringRaises object.\n\n        This class method is used to form instances of this class from DocstringRaises objects,\n        as provided by the Docstring Parser API.\n\n        :param raises: The object to form a new object from\n        :return: A corresponding instance of this class\n        \"\"\"\n        return cls(\n            raises.type_name,\n            raises.description\n        )\n\n    def serialize(self, child_filter: Callable[[Structure], bool] = lambda _: True) -> Serialized:\n        return Serialized(\n            \"Exception\",\n            {\n                \"name\": self.name,\n                \"description\": self.description\n            },\n            {}\n        )\n",
                                "shortDescription": "The module containing the dataclass representing Python exceptions.",
                                "longDescription": null,
                                "deprecations": [],
                                "examples": [],
                                "links": [],
                                "notes": [],
                                "searchTerms": "error\nThe module containing the dataclass representing Python exceptions.\nNone",
                                "globalVariables": []
                            },
                            "children": {
                                "Classes": [
                                    {
                                        "component": "Class",
                                        "meta": {
                                            "searchCategory": "class",
                                            "name": "Error",
                                            "source": "@dataclass(frozen=True, slots=True)\nclass Error(Structure):\n    \"\"\"\n    The dataclass representing Python exceptions.\n    \"\"\"\n    name: str\n    description: str\n\n    @classmethod\n    @Link(\n        \"Docstring Parser API\", \"https://pypi.org/project/docstring-parser/\",\n        \"The API that provides the DocstringRaises objects this method uses.\"\n    )\n    def from_docstring_raises(cls, raises: DocstringRaises) -> Error:\n        \"\"\"\n        Forms an instance of this class from a DocstringRaises object.\n\n        This class method is used to form instances of this class from DocstringRaises objects,\n        as provided by the Docstring Parser API.\n\n        :param raises: The object to form a new object from\n        :return: A corresponding instance of this class\n        \"\"\"\n        return cls(\n            raises.type_name,\n            raises.description\n        )\n\n    def serialize(self, child_filter: Callable[[Structure], bool] = lambda _: True) -> Serialized:\n        return Serialized(\n            \"Exception\",\n            {\n                \"name\": self.name,\n                \"description\": self.description\n            },\n            {}\n        )\n",
                                            "signature": "(name: 'str', description: 'str') -> None",
                                            "parameters": [
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "self",
                                                        "description": null,
                                                        "annotation": null,
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "name",
                                                        "description": null,
                                                        "annotation": "str",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "description",
                                                        "description": null,
                                                        "annotation": "str",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                }
                                            ],
                                            "shortDescription": "The dataclass representing Python exceptions.",
                                            "longDescription": null,
                                            "deprecations": [],
                                            "examples": [],
                                            "links": [],
                                            "notes": [],
                                            "isAbstract": false,
                                            "searchTerms": "Error\nThe dataclass representing Python exceptions.\nNone",
                                            "classVariables": []
                                        },
                                        "children": {
                                            "Methods": [
                                                {
                                                    "component": "Subroutine",
                                                    "meta": {
                                                        "searchCategory": "subroutine",
                                                        "name": "from_docstring_raises",
                                                        "source": "    @classmethod\n    @Link(\n        \"Docstring Parser API\", \"https://pypi.org/project/docstring-parser/\",\n        \"The API that provides the DocstringRaises objects this method uses.\"\n    )\n    def from_docstring_raises(cls, raises: DocstringRaises) -> Error:\n        \"\"\"\n        Forms an instance of this class from a DocstringRaises object.\n\n        This class method is used to form instances of this class from DocstringRaises objects,\n        as provided by the Docstring Parser API.\n\n        :param raises: The object to form a new object from\n        :return: A corresponding instance of this class\n        \"\"\"\n        return cls(\n            raises.type_name,\n            raises.description\n        )\n",
                                                        "signature": "(raises: 'DocstringRaises') -> 'Error'",
                                                        "parameters": [
                                                            {
                                                                "component": "Parameter",
                                                                "meta": {
                                                                    "name": "raises",
                                                                    "description": "The object to form a new object from",
                                                                    "annotation": "DocstringRaises",
                                                                    "default": null,
                                                                    "isOptional": false
                                                                },
                                                                "children": {}
                                                            }
                                                        ],
                                                        "raises": [],
                                                        "returns": [
                                                            {
                                                                "component": "SubroutineReturn",
                                                                "meta": {
                                                                    "description": "A corresponding instance of this class",
                                                                    "annotation": "Error"
                                                                },
                                                                "children": {}
                                                            }
                                                        ],
                                                        "shortDescription": "Forms an instance of this class from a DocstringRaises object.",
                                                        "longDescription": "This class method is used to form instances of this class from DocstringRaises objects,\nas provided by the Docstring Parser API.",
                                                        "deprecations": [],
                                                        "examples": [],
                                                        "links": [
                                                            {
                                                                "title": "Docstring Parser API",
                                                                "href": "https://pypi.org/project/docstring-parser/",
                                                                "description": "The API that provides the DocstringRaises objects this method uses."
                                                            }
                                                        ],
                                                        "notes": [],
                                                        "isGenerator": false,
                                                        "isAsync": false,
                                                        "isAbstract": false,
                                                        "isLambda": false,
                                                        "isContextManager": false,
                                                        "searchTerms": "from_docstring_raises\nForms an instance of this class from a DocstringRaises object.\nThis class method is used to form instances of this class from DocstringRaises objects,\nas provided by the Docstring Parser API."
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Subroutine",
                                                    "meta": {
                                                        "searchCategory": "subroutine",
                                                        "name": "serialize",
                                                        "source": "    def serialize(self, child_filter: Callable[[Structure], bool] = lambda _: True) -> Serialized:\n        return Serialized(\n            \"Exception\",\n            {\n                \"name\": self.name,\n                \"description\": self.description\n            },\n            {}\n        )\n",
                                                        "signature": "(self, child_filter: 'Callable[[Structure], bool]' = <function Error.<lambda> at 0x0000022DE2E839C0>) -> 'Serialized'",
                                                        "parameters": [
                                                            {
                                                                "component": "Parameter",
                                                                "meta": {
                                                                    "name": "self",
                                                                    "description": null,
                                                                    "annotation": null,
                                                                    "default": null,
                                                                    "isOptional": false
                                                                },
                                                                "children": {}
                                                            },
                                                            {
                                                                "component": "Parameter",
                                                                "meta": {
                                                                    "name": "child_filter",
                                                                    "description": "The filter method used to omit unwanted structures from the serializes project tree",
                                                                    "annotation": "Callable[[Structure], bool]",
                                                                    "default": "<function Error.<lambda> at 0x0000022DE2E839C0>",
                                                                    "isOptional": true
                                                                },
                                                                "children": {}
                                                            }
                                                        ],
                                                        "raises": [],
                                                        "returns": [
                                                            {
                                                                "component": "SubroutineReturn",
                                                                "meta": {
                                                                    "description": "The serialized structure, in a compatible JSON format",
                                                                    "annotation": "Serialized"
                                                                },
                                                                "children": {}
                                                            }
                                                        ],
                                                        "shortDescription": "Serializes the structure into a Serialized object, so that it can be used in the website.",
                                                        "longDescription": "A Serialized object is a standardized format for serialization structures, with customizable filtering\noptions to omit certain structures from the project tree as desired,\nand a convenient method for conversion to JSON.",
                                                        "deprecations": [],
                                                        "examples": [],
                                                        "links": [],
                                                        "notes": [],
                                                        "isGenerator": false,
                                                        "isAsync": false,
                                                        "isAbstract": false,
                                                        "isLambda": false,
                                                        "isContextManager": false,
                                                        "searchTerms": "serialize\nSerializes the structure into a Serialized object, so that it can be used in the website.\nA Serialized object is a standardized format for serialization structures, with customizable filtering\noptions to omit certain structures from the project tree as desired,\nand a convenient method for conversion to JSON."
                                                    },
                                                    "children": {}
                                                }
                                            ]
                                        }
                                    }
                                ],
                                "Subroutines": []
                            }
                        },
                        {
                            "component": "Module",
                            "meta": {
                                "searchCategory": "module",
                                "name": "module",
                                "source": "\"\"\"\nThe module containing the dataclass representing Python modules (.py files).\n\"\"\"\n\nfrom __future__ import annotations\nfrom dataclasses import dataclass\nfrom inspect import getmembers, isclass, isfunction\nfrom types import ModuleType, FunctionType\nfrom typing import Callable\nfrom .docstring import Docstring\nfrom .structure import Structure\nfrom .class_ import Class\nfrom .serialized import Serialized\nfrom .source_structure import SourceStructure\nfrom .subroutine import Subroutine\nfrom .searchable_structure import SearchableStructure\nfrom .variable import Variable\nfrom ..tags import Deprecated, Example, Link, Note\n\n\n@dataclass(frozen=True, slots=True)\nclass Module(SourceStructure[ModuleType], SearchableStructure):\n    \"\"\"\n    The dataclass representing Python modules (.py files).\n    \"\"\"\n    classes: list[Class]\n    subroutines: list[Subroutine]\n    global_variables: list[Variable]\n\n    @property\n    def search_terms(self) -> str:\n        return (\n            f\"{self.name}\\n{self.docstring.short_description if self.docstring else ''}\"\n            f\"\\n{self.docstring.long_description if self.docstring else ''}\"\n        )\n\n    @property\n    def search_category(self) -> str:\n        return \"module\"\n\n    @classmethod\n    def from_module(cls, module: ModuleType, declared: set[type | FunctionType]) -> Module:\n        \"\"\"\n        Forms an instance of this class from an imported module.\n\n        :param module: The module to form an object from\n        :param declared: A set of structures that have already been declared before this module was loaded\n        :return: A corresponding instance of this class\n        \"\"\"\n        name = module.__name__.split(\".\")[-1]\n        docstring = cls.get_docstring(module)\n        return cls(\n            name,\n            cls.check_is_private(module),\n            name.startswith(\"__\"),\n            cls.get_source(module),\n            Docstring.from_docstring(docstring) if docstring else None,\n            Deprecated.get_tags(module),\n            Example.get_tags(module),\n            Link.get_tags(module),\n            Note.get_tags(module),\n            [Class.from_class(class_[1], class_[1] in declared)\n             for class_ in getmembers(\n                module, predicate=lambda member: isclass(member) and cls.defined_within(member, module.__name__)\n            )],\n            [Subroutine.from_subroutine(subroutine[1], subroutine[1] in declared)\n             for subroutine in getmembers(\n                module, predicate=lambda member: isfunction(member) and cls.defined_within(member, module.__name__)\n            )],\n            [variable for variable in Variable.many_from_scope(\n                module, module.__name__, lambda variable: not callable(variable)\n            )]\n        )\n\n    def serialize(self, child_filter: Callable[[Structure], bool] = lambda _: True) -> Serialized:\n        return Serialized(\n            \"Module\",\n            {\n                \"searchCategory\": self.search_category,\n                \"name\": self.name,\n                \"source\": self.source,\n                \"shortDescription\": self.docstring.short_description if self.docstring else None,\n                \"longDescription\": self.docstring.long_description if self.docstring else None,\n                \"deprecations\": [deprecation.json_serialize() for deprecation in self.deprecations],\n                \"examples\": [example.json_serialize() for example in self.examples],\n                \"links\": [link.json_serialize() for link in self.links],\n                \"notes\": [note.json_serialize() for note in self.notes],\n                \"searchTerms\": self.search_terms,\n                \"globalVariables\": [\n                    variable.serialize(\n                        child_filter=child_filter).to_json()\n                    for variable in self.global_variables if child_filter(variable)\n                ]\n            },\n            {\n                \"Classes\": [\n                    class_.serialize(child_filter=child_filter) for class_ in self.classes\n                ],\n                \"Subroutines\": [\n                    subroutine.serialize(\n                        child_filter=child_filter) for subroutine in self.subroutines if child_filter(subroutine)\n                ]\n            }\n        )\n",
                                "shortDescription": "The module containing the dataclass representing Python modules (.py files).",
                                "longDescription": null,
                                "deprecations": [],
                                "examples": [],
                                "links": [],
                                "notes": [],
                                "searchTerms": "module\nThe module containing the dataclass representing Python modules (.py files).\nNone",
                                "globalVariables": []
                            },
                            "children": {
                                "Classes": [
                                    {
                                        "component": "Class",
                                        "meta": {
                                            "searchCategory": "class",
                                            "name": "Module",
                                            "source": "@dataclass(frozen=True, slots=True)\nclass Module(SourceStructure[ModuleType], SearchableStructure):\n    \"\"\"\n    The dataclass representing Python modules (.py files).\n    \"\"\"\n    classes: list[Class]\n    subroutines: list[Subroutine]\n    global_variables: list[Variable]\n\n    @property\n    def search_terms(self) -> str:\n        return (\n            f\"{self.name}\\n{self.docstring.short_description if self.docstring else ''}\"\n            f\"\\n{self.docstring.long_description if self.docstring else ''}\"\n        )\n\n    @property\n    def search_category(self) -> str:\n        return \"module\"\n\n    @classmethod\n    def from_module(cls, module: ModuleType, declared: set[type | FunctionType]) -> Module:\n        \"\"\"\n        Forms an instance of this class from an imported module.\n\n        :param module: The module to form an object from\n        :param declared: A set of structures that have already been declared before this module was loaded\n        :return: A corresponding instance of this class\n        \"\"\"\n        name = module.__name__.split(\".\")[-1]\n        docstring = cls.get_docstring(module)\n        return cls(\n            name,\n            cls.check_is_private(module),\n            name.startswith(\"__\"),\n            cls.get_source(module),\n            Docstring.from_docstring(docstring) if docstring else None,\n            Deprecated.get_tags(module),\n            Example.get_tags(module),\n            Link.get_tags(module),\n            Note.get_tags(module),\n            [Class.from_class(class_[1], class_[1] in declared)\n             for class_ in getmembers(\n                module, predicate=lambda member: isclass(member) and cls.defined_within(member, module.__name__)\n            )],\n            [Subroutine.from_subroutine(subroutine[1], subroutine[1] in declared)\n             for subroutine in getmembers(\n                module, predicate=lambda member: isfunction(member) and cls.defined_within(member, module.__name__)\n            )],\n            [variable for variable in Variable.many_from_scope(\n                module, module.__name__, lambda variable: not callable(variable)\n            )]\n        )\n\n    def serialize(self, child_filter: Callable[[Structure], bool] = lambda _: True) -> Serialized:\n        return Serialized(\n            \"Module\",\n            {\n                \"searchCategory\": self.search_category,\n                \"name\": self.name,\n                \"source\": self.source,\n                \"shortDescription\": self.docstring.short_description if self.docstring else None,\n                \"longDescription\": self.docstring.long_description if self.docstring else None,\n                \"deprecations\": [deprecation.json_serialize() for deprecation in self.deprecations],\n                \"examples\": [example.json_serialize() for example in self.examples],\n                \"links\": [link.json_serialize() for link in self.links],\n                \"notes\": [note.json_serialize() for note in self.notes],\n                \"searchTerms\": self.search_terms,\n                \"globalVariables\": [\n                    variable.serialize(\n                        child_filter=child_filter).to_json()\n                    for variable in self.global_variables if child_filter(variable)\n                ]\n            },\n            {\n                \"Classes\": [\n                    class_.serialize(child_filter=child_filter) for class_ in self.classes\n                ],\n                \"Subroutines\": [\n                    subroutine.serialize(\n                        child_filter=child_filter) for subroutine in self.subroutines if child_filter(subroutine)\n                ]\n            }\n        )\n",
                                            "signature": "(name: 'str', is_private: 'bool', is_dunder: 'bool', source: 'str', docstring: 'Docstring | None', deprecations: 'list[Deprecated]', examples: 'list[Example] | None', links: 'list[Link] | None', notes: 'list[Note] | None', classes: 'list[Class]', subroutines: 'list[Subroutine]', global_variables: 'list[Variable]') -> None",
                                            "parameters": [
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "self",
                                                        "description": null,
                                                        "annotation": null,
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "name",
                                                        "description": null,
                                                        "annotation": "str",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "is_private",
                                                        "description": null,
                                                        "annotation": "bool",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "is_dunder",
                                                        "description": null,
                                                        "annotation": "bool",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "source",
                                                        "description": null,
                                                        "annotation": "str",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "docstring",
                                                        "description": null,
                                                        "annotation": "Docstring | None",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "deprecations",
                                                        "description": null,
                                                        "annotation": "list[Deprecated]",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "examples",
                                                        "description": null,
                                                        "annotation": "list[Example] | None",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "links",
                                                        "description": null,
                                                        "annotation": "list[Link] | None",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "notes",
                                                        "description": null,
                                                        "annotation": "list[Note] | None",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "classes",
                                                        "description": null,
                                                        "annotation": "list[Class]",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "subroutines",
                                                        "description": null,
                                                        "annotation": "list[Subroutine]",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "global_variables",
                                                        "description": null,
                                                        "annotation": "list[Variable]",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                }
                                            ],
                                            "shortDescription": "The dataclass representing Python modules (.py files).",
                                            "longDescription": null,
                                            "deprecations": [],
                                            "examples": [],
                                            "links": [],
                                            "notes": [],
                                            "isAbstract": false,
                                            "searchTerms": "Module\nThe dataclass representing Python modules (.py files).\nNone",
                                            "classVariables": []
                                        },
                                        "children": {
                                            "Methods": [
                                                {
                                                    "component": "Subroutine",
                                                    "meta": {
                                                        "searchCategory": "subroutine",
                                                        "name": "from_module",
                                                        "source": "    @classmethod\n    def from_module(cls, module: ModuleType, declared: set[type | FunctionType]) -> Module:\n        \"\"\"\n        Forms an instance of this class from an imported module.\n\n        :param module: The module to form an object from\n        :param declared: A set of structures that have already been declared before this module was loaded\n        :return: A corresponding instance of this class\n        \"\"\"\n        name = module.__name__.split(\".\")[-1]\n        docstring = cls.get_docstring(module)\n        return cls(\n            name,\n            cls.check_is_private(module),\n            name.startswith(\"__\"),\n            cls.get_source(module),\n            Docstring.from_docstring(docstring) if docstring else None,\n            Deprecated.get_tags(module),\n            Example.get_tags(module),\n            Link.get_tags(module),\n            Note.get_tags(module),\n            [Class.from_class(class_[1], class_[1] in declared)\n             for class_ in getmembers(\n                module, predicate=lambda member: isclass(member) and cls.defined_within(member, module.__name__)\n            )],\n            [Subroutine.from_subroutine(subroutine[1], subroutine[1] in declared)\n             for subroutine in getmembers(\n                module, predicate=lambda member: isfunction(member) and cls.defined_within(member, module.__name__)\n            )],\n            [variable for variable in Variable.many_from_scope(\n                module, module.__name__, lambda variable: not callable(variable)\n            )]\n        )\n",
                                                        "signature": "(module: 'ModuleType', declared: 'set[type | FunctionType]') -> 'Module'",
                                                        "parameters": [
                                                            {
                                                                "component": "Parameter",
                                                                "meta": {
                                                                    "name": "module",
                                                                    "description": "The module to form an object from",
                                                                    "annotation": "ModuleType",
                                                                    "default": null,
                                                                    "isOptional": false
                                                                },
                                                                "children": {}
                                                            },
                                                            {
                                                                "component": "Parameter",
                                                                "meta": {
                                                                    "name": "declared",
                                                                    "description": "A set of structures that have already been declared before this module was loaded",
                                                                    "annotation": "set[type | FunctionType]",
                                                                    "default": null,
                                                                    "isOptional": false
                                                                },
                                                                "children": {}
                                                            }
                                                        ],
                                                        "raises": [],
                                                        "returns": [
                                                            {
                                                                "component": "SubroutineReturn",
                                                                "meta": {
                                                                    "description": "A corresponding instance of this class",
                                                                    "annotation": "Module"
                                                                },
                                                                "children": {}
                                                            }
                                                        ],
                                                        "shortDescription": "Forms an instance of this class from an imported module.",
                                                        "longDescription": null,
                                                        "deprecations": [],
                                                        "examples": [],
                                                        "links": [],
                                                        "notes": [],
                                                        "isGenerator": false,
                                                        "isAsync": false,
                                                        "isAbstract": false,
                                                        "isLambda": false,
                                                        "isContextManager": false,
                                                        "searchTerms": "from_module\nForms an instance of this class from an imported module.\nNone"
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Subroutine",
                                                    "meta": {
                                                        "searchCategory": "subroutine",
                                                        "name": "serialize",
                                                        "source": "    def serialize(self, child_filter: Callable[[Structure], bool] = lambda _: True) -> Serialized:\n        return Serialized(\n            \"Module\",\n            {\n                \"searchCategory\": self.search_category,\n                \"name\": self.name,\n                \"source\": self.source,\n                \"shortDescription\": self.docstring.short_description if self.docstring else None,\n                \"longDescription\": self.docstring.long_description if self.docstring else None,\n                \"deprecations\": [deprecation.json_serialize() for deprecation in self.deprecations],\n                \"examples\": [example.json_serialize() for example in self.examples],\n                \"links\": [link.json_serialize() for link in self.links],\n                \"notes\": [note.json_serialize() for note in self.notes],\n                \"searchTerms\": self.search_terms,\n                \"globalVariables\": [\n                    variable.serialize(\n                        child_filter=child_filter).to_json()\n                    for variable in self.global_variables if child_filter(variable)\n                ]\n            },\n            {\n                \"Classes\": [\n                    class_.serialize(child_filter=child_filter) for class_ in self.classes\n                ],\n                \"Subroutines\": [\n                    subroutine.serialize(\n                        child_filter=child_filter) for subroutine in self.subroutines if child_filter(subroutine)\n                ]\n            }\n        )\n",
                                                        "signature": "(self, child_filter: 'Callable[[Structure], bool]' = <function Module.<lambda> at 0x0000022DE2ECCAE0>) -> 'Serialized'",
                                                        "parameters": [
                                                            {
                                                                "component": "Parameter",
                                                                "meta": {
                                                                    "name": "self",
                                                                    "description": null,
                                                                    "annotation": null,
                                                                    "default": null,
                                                                    "isOptional": false
                                                                },
                                                                "children": {}
                                                            },
                                                            {
                                                                "component": "Parameter",
                                                                "meta": {
                                                                    "name": "child_filter",
                                                                    "description": "The filter method used to omit unwanted structures from the serializes project tree",
                                                                    "annotation": "Callable[[Structure], bool]",
                                                                    "default": "<function Module.<lambda> at 0x0000022DE2ECCAE0>",
                                                                    "isOptional": true
                                                                },
                                                                "children": {}
                                                            }
                                                        ],
                                                        "raises": [],
                                                        "returns": [
                                                            {
                                                                "component": "SubroutineReturn",
                                                                "meta": {
                                                                    "description": "The serialized structure, in a compatible JSON format",
                                                                    "annotation": "Serialized"
                                                                },
                                                                "children": {}
                                                            }
                                                        ],
                                                        "shortDescription": "Serializes the structure into a Serialized object, so that it can be used in the website.",
                                                        "longDescription": "A Serialized object is a standardized format for serialization structures, with customizable filtering\noptions to omit certain structures from the project tree as desired,\nand a convenient method for conversion to JSON.",
                                                        "deprecations": [],
                                                        "examples": [],
                                                        "links": [],
                                                        "notes": [],
                                                        "isGenerator": false,
                                                        "isAsync": false,
                                                        "isAbstract": false,
                                                        "isLambda": false,
                                                        "isContextManager": false,
                                                        "searchTerms": "serialize\nSerializes the structure into a Serialized object, so that it can be used in the website.\nA Serialized object is a standardized format for serialization structures, with customizable filtering\noptions to omit certain structures from the project tree as desired,\nand a convenient method for conversion to JSON."
                                                    },
                                                    "children": {}
                                                }
                                            ]
                                        }
                                    }
                                ],
                                "Subroutines": []
                            }
                        },
                        {
                            "component": "Module",
                            "meta": {
                                "searchCategory": "module",
                                "name": "package",
                                "source": "\"\"\"\nThe module containing the dataclass representing Python packages (__init__.py files in a project folder).\n\"\"\"\n\nfrom __future__ import annotations\nfrom dataclasses import dataclass\nfrom types import ModuleType, FunctionType\nfrom inspect import getmembers, ismodule, isclass, isfunction\nfrom typing import Callable\nfrom .docstring import Docstring\nfrom .structure import Structure\nfrom .module import Module\nfrom .serialized import Serialized\nfrom .source_structure import SourceStructure\nfrom .searchable_structure import SearchableStructure\nfrom ..tags import Deprecated, Example, Link, Note\n\n\n@dataclass(frozen=True)\nclass Package(SourceStructure[ModuleType], SearchableStructure):\n    \"\"\"\n    The dataclass representing Python packages (__init__.py files in a project folder).\n    \"\"\"\n    subpackages: list[Package]\n    modules: list[Module]\n\n    @property\n    def search_terms(self) -> str:\n        return (\n            f\"{self.name}\\n{self.docstring.short_description if self.docstring else ''}\"\n            f\"\\n{self.docstring.long_description if self.docstring else ''}\"\n        )\n\n    @property\n    def search_category(self) -> str:\n        return \"package\"\n\n    @classmethod\n    def from_module(cls, package: ModuleType, declared: set[type | FunctionType] | None = None) -> Package:\n        \"\"\"\n        Forms an instance of this class from an imported package.\n\n        Initially checks __all__ for any submodules / subpackages that may be missed,\n        before adding all those publicly available via the in-built inspect API to the list of substructures.\n\n        :param package: The package to form an object from\n        :param declared: A set of structures that have already been declared before this module was loaded\n        :return: A corresponding instance of this class\n        \"\"\"\n        if not cls.is_package(package):\n            raise TypeError(\"Can't build documentation for non-package\") from None\n\n        if declared is None:\n            declared = cls.get_declared(package)\n        else:\n            declared = declared.intersection(cls.get_declared(package))\n\n        name = package.__name__.split(\".\")[-1]\n        docstring = cls.get_docstring(package)\n        try:\n            substructures = [substructure for substructure in package.__all__ if ismodule(substructure)]\n        except AttributeError:  # __all__ index not defined\n            substructures = []\n        substructures += [substructure[1] for substructure in getmembers(package, predicate=ismodule)]\n\n        return cls(\n            name,\n            cls.check_is_private(package),\n            name.startswith(\"__\"),\n            cls.get_source(package),\n            Docstring.from_docstring(docstring) if docstring else None,\n            Deprecated.get_tags(package),\n            Example.get_tags(package),\n            Link.get_tags(package),\n            Note.get_tags(package),\n            [cls.from_module(structure, declared) for structure in substructures if cls.is_package(structure)],\n            [Module.from_module(structure, declared) for structure in substructures if not cls.is_package(structure)]\n        )\n\n    @staticmethod\n    def is_package(package: ModuleType) -> bool:\n        \"\"\"\n        Determines whether a given module is a package or a module (whether it is an __init__.py file or not).\n\n        :param package: The module to inspect\n        :return: Whether the given module is a package (__init__.py file) or not\n        \"\"\"\n        return package.__package__ == package.__name__\n\n    @staticmethod\n    def get_declared(package: ModuleType) -> set[type | FunctionType]:\n        \"\"\"\n        Gets the declared members (classes and subroutines) from a given package.\n\n        :param package: The package to inspect\n        :return: A set of the declared classes and subroutines\n        \"\"\"\n        return set(member[1] for member in getmembers(\n            package,\n            predicate=lambda member: isclass(member) or isfunction(member)\n        ))\n\n    def serialize(self, child_filter: Callable[[Structure], bool] = lambda _: True) -> Serialized:\n        return Serialized(\n            \"Package\",\n            {\n                \"searchCategory\": self.search_category,\n                \"name\": self.name,\n                \"source\": self.source,\n                \"shortDescription\": self.docstring.short_description if self.docstring else None,\n                \"longDescription\": self.docstring.long_description if self.docstring else None,\n                \"deprecations\": [deprecation.json_serialize() for deprecation in self.deprecations],\n                \"examples\": [example.json_serialize() for example in self.examples],\n                \"links\": [link.json_serialize() for link in self.links],\n                \"notes\": [note.json_serialize() for note in self.notes],\n                \"searchTerms\": self.search_terms\n            },\n            {\n                \"Sub-Packages\": [\n                    subpackage.serialize(\n                        child_filter=child_filter) for subpackage in self.subpackages if child_filter(subpackage)\n                ],\n                \"Modules\": [\n                    module.serialize(child_filter=child_filter) for module in self.modules if child_filter(module)\n                ]\n            }\n        )\n",
                                "shortDescription": "The module containing the dataclass representing Python packages (__init__.py files in a project folder).",
                                "longDescription": null,
                                "deprecations": [],
                                "examples": [],
                                "links": [],
                                "notes": [],
                                "searchTerms": "package\nThe module containing the dataclass representing Python packages (__init__.py files in a project folder).\nNone",
                                "globalVariables": []
                            },
                            "children": {
                                "Classes": [
                                    {
                                        "component": "Class",
                                        "meta": {
                                            "searchCategory": "class",
                                            "name": "Package",
                                            "source": "@dataclass(frozen=True)\nclass Package(SourceStructure[ModuleType], SearchableStructure):\n    \"\"\"\n    The dataclass representing Python packages (__init__.py files in a project folder).\n    \"\"\"\n    subpackages: list[Package]\n    modules: list[Module]\n\n    @property\n    def search_terms(self) -> str:\n        return (\n            f\"{self.name}\\n{self.docstring.short_description if self.docstring else ''}\"\n            f\"\\n{self.docstring.long_description if self.docstring else ''}\"\n        )\n\n    @property\n    def search_category(self) -> str:\n        return \"package\"\n\n    @classmethod\n    def from_module(cls, package: ModuleType, declared: set[type | FunctionType] | None = None) -> Package:\n        \"\"\"\n        Forms an instance of this class from an imported package.\n\n        Initially checks __all__ for any submodules / subpackages that may be missed,\n        before adding all those publicly available via the in-built inspect API to the list of substructures.\n\n        :param package: The package to form an object from\n        :param declared: A set of structures that have already been declared before this module was loaded\n        :return: A corresponding instance of this class\n        \"\"\"\n        if not cls.is_package(package):\n            raise TypeError(\"Can't build documentation for non-package\") from None\n\n        if declared is None:\n            declared = cls.get_declared(package)\n        else:\n            declared = declared.intersection(cls.get_declared(package))\n\n        name = package.__name__.split(\".\")[-1]\n        docstring = cls.get_docstring(package)\n        try:\n            substructures = [substructure for substructure in package.__all__ if ismodule(substructure)]\n        except AttributeError:  # __all__ index not defined\n            substructures = []\n        substructures += [substructure[1] for substructure in getmembers(package, predicate=ismodule)]\n\n        return cls(\n            name,\n            cls.check_is_private(package),\n            name.startswith(\"__\"),\n            cls.get_source(package),\n            Docstring.from_docstring(docstring) if docstring else None,\n            Deprecated.get_tags(package),\n            Example.get_tags(package),\n            Link.get_tags(package),\n            Note.get_tags(package),\n            [cls.from_module(structure, declared) for structure in substructures if cls.is_package(structure)],\n            [Module.from_module(structure, declared) for structure in substructures if not cls.is_package(structure)]\n        )\n\n    @staticmethod\n    def is_package(package: ModuleType) -> bool:\n        \"\"\"\n        Determines whether a given module is a package or a module (whether it is an __init__.py file or not).\n\n        :param package: The module to inspect\n        :return: Whether the given module is a package (__init__.py file) or not\n        \"\"\"\n        return package.__package__ == package.__name__\n\n    @staticmethod\n    def get_declared(package: ModuleType) -> set[type | FunctionType]:\n        \"\"\"\n        Gets the declared members (classes and subroutines) from a given package.\n\n        :param package: The package to inspect\n        :return: A set of the declared classes and subroutines\n        \"\"\"\n        return set(member[1] for member in getmembers(\n            package,\n            predicate=lambda member: isclass(member) or isfunction(member)\n        ))\n\n    def serialize(self, child_filter: Callable[[Structure], bool] = lambda _: True) -> Serialized:\n        return Serialized(\n            \"Package\",\n            {\n                \"searchCategory\": self.search_category,\n                \"name\": self.name,\n                \"source\": self.source,\n                \"shortDescription\": self.docstring.short_description if self.docstring else None,\n                \"longDescription\": self.docstring.long_description if self.docstring else None,\n                \"deprecations\": [deprecation.json_serialize() for deprecation in self.deprecations],\n                \"examples\": [example.json_serialize() for example in self.examples],\n                \"links\": [link.json_serialize() for link in self.links],\n                \"notes\": [note.json_serialize() for note in self.notes],\n                \"searchTerms\": self.search_terms\n            },\n            {\n                \"Sub-Packages\": [\n                    subpackage.serialize(\n                        child_filter=child_filter) for subpackage in self.subpackages if child_filter(subpackage)\n                ],\n                \"Modules\": [\n                    module.serialize(child_filter=child_filter) for module in self.modules if child_filter(module)\n                ]\n            }\n        )\n",
                                            "signature": "(name: 'str', is_private: 'bool', is_dunder: 'bool', source: 'str', docstring: 'Docstring | None', deprecations: 'list[Deprecated]', examples: 'list[Example] | None', links: 'list[Link] | None', notes: 'list[Note] | None', subpackages: 'list[Package]', modules: 'list[Module]') -> None",
                                            "parameters": [
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "self",
                                                        "description": null,
                                                        "annotation": null,
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "name",
                                                        "description": null,
                                                        "annotation": "str",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "is_private",
                                                        "description": null,
                                                        "annotation": "bool",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "is_dunder",
                                                        "description": null,
                                                        "annotation": "bool",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "source",
                                                        "description": null,
                                                        "annotation": "str",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "docstring",
                                                        "description": null,
                                                        "annotation": "Docstring | None",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "deprecations",
                                                        "description": null,
                                                        "annotation": "list[Deprecated]",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "examples",
                                                        "description": null,
                                                        "annotation": "list[Example] | None",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "links",
                                                        "description": null,
                                                        "annotation": "list[Link] | None",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "notes",
                                                        "description": null,
                                                        "annotation": "list[Note] | None",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "subpackages",
                                                        "description": null,
                                                        "annotation": "list[Package]",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "modules",
                                                        "description": null,
                                                        "annotation": "list[Module]",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                }
                                            ],
                                            "shortDescription": "The dataclass representing Python packages (__init__.py files in a project folder).",
                                            "longDescription": null,
                                            "deprecations": [],
                                            "examples": [],
                                            "links": [],
                                            "notes": [],
                                            "isAbstract": false,
                                            "searchTerms": "Package\nThe dataclass representing Python packages (__init__.py files in a project folder).\nNone",
                                            "classVariables": []
                                        },
                                        "children": {
                                            "Methods": [
                                                {
                                                    "component": "Subroutine",
                                                    "meta": {
                                                        "searchCategory": "subroutine",
                                                        "name": "from_module",
                                                        "source": "    @classmethod\n    def from_module(cls, package: ModuleType, declared: set[type | FunctionType] | None = None) -> Package:\n        \"\"\"\n        Forms an instance of this class from an imported package.\n\n        Initially checks __all__ for any submodules / subpackages that may be missed,\n        before adding all those publicly available via the in-built inspect API to the list of substructures.\n\n        :param package: The package to form an object from\n        :param declared: A set of structures that have already been declared before this module was loaded\n        :return: A corresponding instance of this class\n        \"\"\"\n        if not cls.is_package(package):\n            raise TypeError(\"Can't build documentation for non-package\") from None\n\n        if declared is None:\n            declared = cls.get_declared(package)\n        else:\n            declared = declared.intersection(cls.get_declared(package))\n\n        name = package.__name__.split(\".\")[-1]\n        docstring = cls.get_docstring(package)\n        try:\n            substructures = [substructure for substructure in package.__all__ if ismodule(substructure)]\n        except AttributeError:  # __all__ index not defined\n            substructures = []\n        substructures += [substructure[1] for substructure in getmembers(package, predicate=ismodule)]\n\n        return cls(\n            name,\n            cls.check_is_private(package),\n            name.startswith(\"__\"),\n            cls.get_source(package),\n            Docstring.from_docstring(docstring) if docstring else None,\n            Deprecated.get_tags(package),\n            Example.get_tags(package),\n            Link.get_tags(package),\n            Note.get_tags(package),\n            [cls.from_module(structure, declared) for structure in substructures if cls.is_package(structure)],\n            [Module.from_module(structure, declared) for structure in substructures if not cls.is_package(structure)]\n        )\n",
                                                        "signature": "(package: 'ModuleType', declared: 'set[type | FunctionType] | None' = None) -> 'Package'",
                                                        "parameters": [
                                                            {
                                                                "component": "Parameter",
                                                                "meta": {
                                                                    "name": "package",
                                                                    "description": "The package to form an object from",
                                                                    "annotation": "ModuleType",
                                                                    "default": null,
                                                                    "isOptional": false
                                                                },
                                                                "children": {}
                                                            },
                                                            {
                                                                "component": "Parameter",
                                                                "meta": {
                                                                    "name": "declared",
                                                                    "description": "A set of structures that have already been declared before this module was loaded",
                                                                    "annotation": "set[type | FunctionType] | None",
                                                                    "default": "None",
                                                                    "isOptional": true
                                                                },
                                                                "children": {}
                                                            }
                                                        ],
                                                        "raises": [],
                                                        "returns": [
                                                            {
                                                                "component": "SubroutineReturn",
                                                                "meta": {
                                                                    "description": "A corresponding instance of this class",
                                                                    "annotation": "Package"
                                                                },
                                                                "children": {}
                                                            }
                                                        ],
                                                        "shortDescription": "Forms an instance of this class from an imported package.",
                                                        "longDescription": "Initially checks __all__ for any submodules / subpackages that may be missed,\nbefore adding all those publicly available via the in-built inspect API to the list of substructures.",
                                                        "deprecations": [],
                                                        "examples": [],
                                                        "links": [],
                                                        "notes": [],
                                                        "isGenerator": false,
                                                        "isAsync": false,
                                                        "isAbstract": false,
                                                        "isLambda": false,
                                                        "isContextManager": false,
                                                        "searchTerms": "from_module\nForms an instance of this class from an imported package.\nInitially checks __all__ for any submodules / subpackages that may be missed,\nbefore adding all those publicly available via the in-built inspect API to the list of substructures."
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Subroutine",
                                                    "meta": {
                                                        "searchCategory": "subroutine",
                                                        "name": "is_package",
                                                        "source": "    @staticmethod\n    def is_package(package: ModuleType) -> bool:\n        \"\"\"\n        Determines whether a given module is a package or a module (whether it is an __init__.py file or not).\n\n        :param package: The module to inspect\n        :return: Whether the given module is a package (__init__.py file) or not\n        \"\"\"\n        return package.__package__ == package.__name__\n",
                                                        "signature": "(package: 'ModuleType') -> 'bool'",
                                                        "parameters": [
                                                            {
                                                                "component": "Parameter",
                                                                "meta": {
                                                                    "name": "package",
                                                                    "description": "The module to inspect",
                                                                    "annotation": "ModuleType",
                                                                    "default": null,
                                                                    "isOptional": false
                                                                },
                                                                "children": {}
                                                            }
                                                        ],
                                                        "raises": [],
                                                        "returns": [
                                                            {
                                                                "component": "SubroutineReturn",
                                                                "meta": {
                                                                    "description": "Whether the given module is a package (__init__.py file) or not",
                                                                    "annotation": "bool"
                                                                },
                                                                "children": {}
                                                            }
                                                        ],
                                                        "shortDescription": "Determines whether a given module is a package or a module (whether it is an __init__.py file or not).",
                                                        "longDescription": null,
                                                        "deprecations": [],
                                                        "examples": [],
                                                        "links": [],
                                                        "notes": [],
                                                        "isGenerator": false,
                                                        "isAsync": false,
                                                        "isAbstract": false,
                                                        "isLambda": false,
                                                        "isContextManager": false,
                                                        "searchTerms": "is_package\nDetermines whether a given module is a package or a module (whether it is an __init__.py file or not).\nNone"
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Subroutine",
                                                    "meta": {
                                                        "searchCategory": "subroutine",
                                                        "name": "get_declared",
                                                        "source": "    @staticmethod\n    def get_declared(package: ModuleType) -> set[type | FunctionType]:\n        \"\"\"\n        Gets the declared members (classes and subroutines) from a given package.\n\n        :param package: The package to inspect\n        :return: A set of the declared classes and subroutines\n        \"\"\"\n        return set(member[1] for member in getmembers(\n            package,\n            predicate=lambda member: isclass(member) or isfunction(member)\n        ))\n",
                                                        "signature": "(package: 'ModuleType') -> 'set[type | FunctionType]'",
                                                        "parameters": [
                                                            {
                                                                "component": "Parameter",
                                                                "meta": {
                                                                    "name": "package",
                                                                    "description": "The package to inspect",
                                                                    "annotation": "ModuleType",
                                                                    "default": null,
                                                                    "isOptional": false
                                                                },
                                                                "children": {}
                                                            }
                                                        ],
                                                        "raises": [],
                                                        "returns": [
                                                            {
                                                                "component": "SubroutineReturn",
                                                                "meta": {
                                                                    "description": "A set of the declared classes and subroutines",
                                                                    "annotation": "set[type | FunctionType]"
                                                                },
                                                                "children": {}
                                                            }
                                                        ],
                                                        "shortDescription": "Gets the declared members (classes and subroutines) from a given package.",
                                                        "longDescription": null,
                                                        "deprecations": [],
                                                        "examples": [],
                                                        "links": [],
                                                        "notes": [],
                                                        "isGenerator": false,
                                                        "isAsync": false,
                                                        "isAbstract": false,
                                                        "isLambda": false,
                                                        "isContextManager": false,
                                                        "searchTerms": "get_declared\nGets the declared members (classes and subroutines) from a given package.\nNone"
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Subroutine",
                                                    "meta": {
                                                        "searchCategory": "subroutine",
                                                        "name": "serialize",
                                                        "source": "    def serialize(self, child_filter: Callable[[Structure], bool] = lambda _: True) -> Serialized:\n        return Serialized(\n            \"Package\",\n            {\n                \"searchCategory\": self.search_category,\n                \"name\": self.name,\n                \"source\": self.source,\n                \"shortDescription\": self.docstring.short_description if self.docstring else None,\n                \"longDescription\": self.docstring.long_description if self.docstring else None,\n                \"deprecations\": [deprecation.json_serialize() for deprecation in self.deprecations],\n                \"examples\": [example.json_serialize() for example in self.examples],\n                \"links\": [link.json_serialize() for link in self.links],\n                \"notes\": [note.json_serialize() for note in self.notes],\n                \"searchTerms\": self.search_terms\n            },\n            {\n                \"Sub-Packages\": [\n                    subpackage.serialize(\n                        child_filter=child_filter) for subpackage in self.subpackages if child_filter(subpackage)\n                ],\n                \"Modules\": [\n                    module.serialize(child_filter=child_filter) for module in self.modules if child_filter(module)\n                ]\n            }\n        )\n",
                                                        "signature": "(self, child_filter: 'Callable[[Structure], bool]' = <function Package.<lambda> at 0x0000022DE2ECD760>) -> 'Serialized'",
                                                        "parameters": [
                                                            {
                                                                "component": "Parameter",
                                                                "meta": {
                                                                    "name": "self",
                                                                    "description": null,
                                                                    "annotation": null,
                                                                    "default": null,
                                                                    "isOptional": false
                                                                },
                                                                "children": {}
                                                            },
                                                            {
                                                                "component": "Parameter",
                                                                "meta": {
                                                                    "name": "child_filter",
                                                                    "description": "The filter method used to omit unwanted structures from the serializes project tree",
                                                                    "annotation": "Callable[[Structure], bool]",
                                                                    "default": "<function Package.<lambda> at 0x0000022DE2ECD760>",
                                                                    "isOptional": true
                                                                },
                                                                "children": {}
                                                            }
                                                        ],
                                                        "raises": [],
                                                        "returns": [
                                                            {
                                                                "component": "SubroutineReturn",
                                                                "meta": {
                                                                    "description": "The serialized structure, in a compatible JSON format",
                                                                    "annotation": "Serialized"
                                                                },
                                                                "children": {}
                                                            }
                                                        ],
                                                        "shortDescription": "Serializes the structure into a Serialized object, so that it can be used in the website.",
                                                        "longDescription": "A Serialized object is a standardized format for serialization structures, with customizable filtering\noptions to omit certain structures from the project tree as desired,\nand a convenient method for conversion to JSON.",
                                                        "deprecations": [],
                                                        "examples": [],
                                                        "links": [],
                                                        "notes": [],
                                                        "isGenerator": false,
                                                        "isAsync": false,
                                                        "isAbstract": false,
                                                        "isLambda": false,
                                                        "isContextManager": false,
                                                        "searchTerms": "serialize\nSerializes the structure into a Serialized object, so that it can be used in the website.\nA Serialized object is a standardized format for serialization structures, with customizable filtering\noptions to omit certain structures from the project tree as desired,\nand a convenient method for conversion to JSON."
                                                    },
                                                    "children": {}
                                                }
                                            ]
                                        }
                                    }
                                ],
                                "Subroutines": []
                            }
                        },
                        {
                            "component": "Module",
                            "meta": {
                                "searchCategory": "module",
                                "name": "parameter",
                                "source": "\"\"\"\nThe module containing the dataclass representing Python subroutine parameters.\n\"\"\"\n\nfrom __future__ import annotations\nfrom dataclasses import dataclass\nfrom inspect import Parameter as PythonParameter\nfrom typing import Callable\nfrom .serialized import Serialized\nfrom .structure import Structure\n\n\n@dataclass(frozen=True, slots=True)\nclass Parameter(Structure):\n    \"\"\"\n    The dataclass representing Python subroutine parameters.\n    \"\"\"\n    name: str\n    description: str\n    annotation: str\n    default: str | None\n    is_optional: bool\n\n    @classmethod\n    def from_parameter(cls, parameter: PythonParameter, docstring_parameters: list[Parameter]) -> Parameter:\n        \"\"\"\n        Forms an instance of this class from a Python parameter, as provided by the in-built inspect API.\n        \n        :param parameter: The inspected parameter\n        :param docstring_parameters: A list of parameters specified in the corresponding subroutine docstring\n        :return: A corresponding instance of this class\n        \"\"\"\n        try:\n            docstring_parameter = next(filter(\n                lambda docstring_parameter_: parameter.name == docstring_parameter_.name, docstring_parameters\n            ))\n            description = docstring_parameter.description\n        except StopIteration:\n            description = None\n        return cls(\n            parameter.name,\n            description,\n            cls.object_as_written(parameter.annotation),\n            cls.object_as_written(parameter.default),\n            not (parameter.kind in (\n                PythonParameter.POSITIONAL_ONLY, PythonParameter.POSITIONAL_OR_KEYWORD\n            ) and parameter.default == PythonParameter.empty)\n        )\n\n    def serialize(self, child_filter: Callable[[Structure], bool] = lambda _: True) -> Serialized:\n        return Serialized(\n            \"Parameter\",\n            {\n                \"name\": self.name,\n                \"description\": self.description,\n                \"annotation\": self.annotation,\n                \"default\": self.default,\n                \"isOptional\": self.is_optional\n            },\n            {}\n        )\n",
                                "shortDescription": "The module containing the dataclass representing Python subroutine parameters.",
                                "longDescription": null,
                                "deprecations": [],
                                "examples": [],
                                "links": [],
                                "notes": [],
                                "searchTerms": "parameter\nThe module containing the dataclass representing Python subroutine parameters.\nNone",
                                "globalVariables": []
                            },
                            "children": {
                                "Classes": [
                                    {
                                        "component": "Class",
                                        "meta": {
                                            "searchCategory": "class",
                                            "name": "Parameter",
                                            "source": "@dataclass(frozen=True, slots=True)\nclass Parameter(Structure):\n    \"\"\"\n    The dataclass representing Python subroutine parameters.\n    \"\"\"\n    name: str\n    description: str\n    annotation: str\n    default: str | None\n    is_optional: bool\n\n    @classmethod\n    def from_parameter(cls, parameter: PythonParameter, docstring_parameters: list[Parameter]) -> Parameter:\n        \"\"\"\n        Forms an instance of this class from a Python parameter, as provided by the in-built inspect API.\n        \n        :param parameter: The inspected parameter\n        :param docstring_parameters: A list of parameters specified in the corresponding subroutine docstring\n        :return: A corresponding instance of this class\n        \"\"\"\n        try:\n            docstring_parameter = next(filter(\n                lambda docstring_parameter_: parameter.name == docstring_parameter_.name, docstring_parameters\n            ))\n            description = docstring_parameter.description\n        except StopIteration:\n            description = None\n        return cls(\n            parameter.name,\n            description,\n            cls.object_as_written(parameter.annotation),\n            cls.object_as_written(parameter.default),\n            not (parameter.kind in (\n                PythonParameter.POSITIONAL_ONLY, PythonParameter.POSITIONAL_OR_KEYWORD\n            ) and parameter.default == PythonParameter.empty)\n        )\n\n    def serialize(self, child_filter: Callable[[Structure], bool] = lambda _: True) -> Serialized:\n        return Serialized(\n            \"Parameter\",\n            {\n                \"name\": self.name,\n                \"description\": self.description,\n                \"annotation\": self.annotation,\n                \"default\": self.default,\n                \"isOptional\": self.is_optional\n            },\n            {}\n        )\n",
                                            "signature": "(name: 'str', description: 'str', annotation: 'str', default: 'str | None', is_optional: 'bool') -> None",
                                            "parameters": [
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "self",
                                                        "description": null,
                                                        "annotation": null,
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "name",
                                                        "description": null,
                                                        "annotation": "str",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "description",
                                                        "description": null,
                                                        "annotation": "str",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "annotation",
                                                        "description": null,
                                                        "annotation": "str",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "default",
                                                        "description": null,
                                                        "annotation": "str | None",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "is_optional",
                                                        "description": null,
                                                        "annotation": "bool",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                }
                                            ],
                                            "shortDescription": "The dataclass representing Python subroutine parameters.",
                                            "longDescription": null,
                                            "deprecations": [],
                                            "examples": [],
                                            "links": [],
                                            "notes": [],
                                            "isAbstract": false,
                                            "searchTerms": "Parameter\nThe dataclass representing Python subroutine parameters.\nNone",
                                            "classVariables": []
                                        },
                                        "children": {
                                            "Methods": [
                                                {
                                                    "component": "Subroutine",
                                                    "meta": {
                                                        "searchCategory": "subroutine",
                                                        "name": "from_parameter",
                                                        "source": "    @classmethod\n    def from_parameter(cls, parameter: PythonParameter, docstring_parameters: list[Parameter]) -> Parameter:\n        \"\"\"\n        Forms an instance of this class from a Python parameter, as provided by the in-built inspect API.\n        \n        :param parameter: The inspected parameter\n        :param docstring_parameters: A list of parameters specified in the corresponding subroutine docstring\n        :return: A corresponding instance of this class\n        \"\"\"\n        try:\n            docstring_parameter = next(filter(\n                lambda docstring_parameter_: parameter.name == docstring_parameter_.name, docstring_parameters\n            ))\n            description = docstring_parameter.description\n        except StopIteration:\n            description = None\n        return cls(\n            parameter.name,\n            description,\n            cls.object_as_written(parameter.annotation),\n            cls.object_as_written(parameter.default),\n            not (parameter.kind in (\n                PythonParameter.POSITIONAL_ONLY, PythonParameter.POSITIONAL_OR_KEYWORD\n            ) and parameter.default == PythonParameter.empty)\n        )\n",
                                                        "signature": "(parameter: 'PythonParameter', docstring_parameters: 'list[Parameter]') -> 'Parameter'",
                                                        "parameters": [
                                                            {
                                                                "component": "Parameter",
                                                                "meta": {
                                                                    "name": "parameter",
                                                                    "description": "The inspected parameter",
                                                                    "annotation": "PythonParameter",
                                                                    "default": null,
                                                                    "isOptional": false
                                                                },
                                                                "children": {}
                                                            },
                                                            {
                                                                "component": "Parameter",
                                                                "meta": {
                                                                    "name": "docstring_parameters",
                                                                    "description": "A list of parameters specified in the corresponding subroutine docstring",
                                                                    "annotation": "list[Parameter]",
                                                                    "default": null,
                                                                    "isOptional": false
                                                                },
                                                                "children": {}
                                                            }
                                                        ],
                                                        "raises": [],
                                                        "returns": [
                                                            {
                                                                "component": "SubroutineReturn",
                                                                "meta": {
                                                                    "description": "A corresponding instance of this class",
                                                                    "annotation": "Parameter"
                                                                },
                                                                "children": {}
                                                            }
                                                        ],
                                                        "shortDescription": "Forms an instance of this class from a Python parameter, as provided by the in-built inspect API.",
                                                        "longDescription": null,
                                                        "deprecations": [],
                                                        "examples": [],
                                                        "links": [],
                                                        "notes": [],
                                                        "isGenerator": false,
                                                        "isAsync": false,
                                                        "isAbstract": false,
                                                        "isLambda": false,
                                                        "isContextManager": false,
                                                        "searchTerms": "from_parameter\nForms an instance of this class from a Python parameter, as provided by the in-built inspect API.\nNone"
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Subroutine",
                                                    "meta": {
                                                        "searchCategory": "subroutine",
                                                        "name": "serialize",
                                                        "source": "    def serialize(self, child_filter: Callable[[Structure], bool] = lambda _: True) -> Serialized:\n        return Serialized(\n            \"Parameter\",\n            {\n                \"name\": self.name,\n                \"description\": self.description,\n                \"annotation\": self.annotation,\n                \"default\": self.default,\n                \"isOptional\": self.is_optional\n            },\n            {}\n        )\n",
                                                        "signature": "(self, child_filter: 'Callable[[Structure], bool]' = <function Parameter.<lambda> at 0x0000022DE2E83100>) -> 'Serialized'",
                                                        "parameters": [
                                                            {
                                                                "component": "Parameter",
                                                                "meta": {
                                                                    "name": "self",
                                                                    "description": null,
                                                                    "annotation": null,
                                                                    "default": null,
                                                                    "isOptional": false
                                                                },
                                                                "children": {}
                                                            },
                                                            {
                                                                "component": "Parameter",
                                                                "meta": {
                                                                    "name": "child_filter",
                                                                    "description": "The filter method used to omit unwanted structures from the serializes project tree",
                                                                    "annotation": "Callable[[Structure], bool]",
                                                                    "default": "<function Parameter.<lambda> at 0x0000022DE2E83100>",
                                                                    "isOptional": true
                                                                },
                                                                "children": {}
                                                            }
                                                        ],
                                                        "raises": [],
                                                        "returns": [
                                                            {
                                                                "component": "SubroutineReturn",
                                                                "meta": {
                                                                    "description": "The serialized structure, in a compatible JSON format",
                                                                    "annotation": "Serialized"
                                                                },
                                                                "children": {}
                                                            }
                                                        ],
                                                        "shortDescription": "Serializes the structure into a Serialized object, so that it can be used in the website.",
                                                        "longDescription": "A Serialized object is a standardized format for serialization structures, with customizable filtering\noptions to omit certain structures from the project tree as desired,\nand a convenient method for conversion to JSON.",
                                                        "deprecations": [],
                                                        "examples": [],
                                                        "links": [],
                                                        "notes": [],
                                                        "isGenerator": false,
                                                        "isAsync": false,
                                                        "isAbstract": false,
                                                        "isLambda": false,
                                                        "isContextManager": false,
                                                        "searchTerms": "serialize\nSerializes the structure into a Serialized object, so that it can be used in the website.\nA Serialized object is a standardized format for serialization structures, with customizable filtering\noptions to omit certain structures from the project tree as desired,\nand a convenient method for conversion to JSON."
                                                    },
                                                    "children": {}
                                                }
                                            ]
                                        }
                                    }
                                ],
                                "Subroutines": []
                            }
                        },
                        {
                            "component": "Module",
                            "meta": {
                                "searchCategory": "module",
                                "name": "searchable_structure",
                                "source": "\"\"\"\nThe module containing the dataclass representing any structure that can be searched for on the generated website.\n\"\"\"\n\nfrom __future__ import annotations\nfrom dataclasses import dataclass\nfrom abc import ABC, abstractmethod\nfrom .structure import Structure\n\n\n@dataclass(frozen=True, slots=True)\nclass SearchableStructure(Structure, ABC):\n    \"\"\"\n    A structure that can be searched for on the generated website.\n    \"\"\"\n\n    @property\n    @abstractmethod\n    def search_terms(self) -> str:\n        \"\"\"\n        A dynamic property defining the terms that this structure can be searched for with.\n\n        This property is used by the website files to search for searchable structures in the project.\n\n        :return: A string of terms that this structure can be searched for with\n        \"\"\"\n        ...\n\n    @property\n    @abstractmethod\n    def search_category(self) -> str:\n        \"\"\"\n        A dynamic property defining what category this searchable structure is listed as.\n\n        This property is used by the website files when filtering searches between categories.\n\n        :return: The name of the search category\n        \"\"\"\n        ...\n",
                                "shortDescription": "The module containing the dataclass representing any structure that can be searched for on the generated website.",
                                "longDescription": null,
                                "deprecations": [],
                                "examples": [],
                                "links": [],
                                "notes": [],
                                "searchTerms": "searchable_structure\nThe module containing the dataclass representing any structure that can be searched for on the generated website.\nNone",
                                "globalVariables": []
                            },
                            "children": {
                                "Classes": [
                                    {
                                        "component": "Class",
                                        "meta": {
                                            "searchCategory": "class",
                                            "name": "SearchableStructure",
                                            "source": "@dataclass(frozen=True, slots=True)\nclass SearchableStructure(Structure, ABC):\n    \"\"\"\n    A structure that can be searched for on the generated website.\n    \"\"\"\n\n    @property\n    @abstractmethod\n    def search_terms(self) -> str:\n        \"\"\"\n        A dynamic property defining the terms that this structure can be searched for with.\n\n        This property is used by the website files to search for searchable structures in the project.\n\n        :return: A string of terms that this structure can be searched for with\n        \"\"\"\n        ...\n\n    @property\n    @abstractmethod\n    def search_category(self) -> str:\n        \"\"\"\n        A dynamic property defining what category this searchable structure is listed as.\n\n        This property is used by the website files when filtering searches between categories.\n\n        :return: The name of the search category\n        \"\"\"\n        ...\n",
                                            "signature": "() -> None",
                                            "parameters": [
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "self",
                                                        "description": null,
                                                        "annotation": null,
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                }
                                            ],
                                            "shortDescription": "A structure that can be searched for on the generated website.",
                                            "longDescription": null,
                                            "deprecations": [],
                                            "examples": [],
                                            "links": [],
                                            "notes": [],
                                            "isAbstract": true,
                                            "searchTerms": "SearchableStructure\nA structure that can be searched for on the generated website.\nNone",
                                            "classVariables": []
                                        },
                                        "children": {
                                            "Methods": []
                                        }
                                    }
                                ],
                                "Subroutines": []
                            }
                        },
                        {
                            "component": "Module",
                            "meta": {
                                "searchCategory": "module",
                                "name": "serialized",
                                "source": "\"\"\"\nThe module containing the dataclass that represents a serialized node, ready to be converted to JSON.\n\"\"\"\n\nfrom __future__ import annotations\nfrom dataclasses import dataclass\n\n\nJsonT = dict[str, str | dict[str, object] | list[dict[str, \"JsonT\"]]]\n\n\n@dataclass(frozen=True, slots=True)\nclass Serialized:\n    \"\"\"\n    The dataclass that represents a serialized node, ready to be converted to JSON.\n    \"\"\"\n    component: str\n    meta: dict[str, object]\n    children: dict[str, list[Serialized]]\n\n    def to_json(self) -> JsonT:\n        \"\"\"\n        Converts this object into a JSON tree.\n\n        A method that converts this node, and its children into a compatible JSON format recursively,\n        so that it can be used in the website.\n\n        :return: The JSON tree of structures to be used in the website\n        \"\"\"\n        return {\n            \"component\": self.component,\n            \"meta\": self.meta,\n            \"children\": {\n                child_type: [child.to_json() for child in self.children[child_type]] for child_type in self.children\n            }\n        }\n",
                                "shortDescription": "The module containing the dataclass that represents a serialized node, ready to be converted to JSON.",
                                "longDescription": null,
                                "deprecations": [],
                                "examples": [],
                                "links": [],
                                "notes": [],
                                "searchTerms": "serialized\nThe module containing the dataclass that represents a serialized node, ready to be converted to JSON.\nNone",
                                "globalVariables": []
                            },
                            "children": {
                                "Classes": [
                                    {
                                        "component": "Class",
                                        "meta": {
                                            "searchCategory": "class",
                                            "name": "Serialized",
                                            "source": "@dataclass(frozen=True, slots=True)\nclass Serialized:\n    \"\"\"\n    The dataclass that represents a serialized node, ready to be converted to JSON.\n    \"\"\"\n    component: str\n    meta: dict[str, object]\n    children: dict[str, list[Serialized]]\n\n    def to_json(self) -> JsonT:\n        \"\"\"\n        Converts this object into a JSON tree.\n\n        A method that converts this node, and its children into a compatible JSON format recursively,\n        so that it can be used in the website.\n\n        :return: The JSON tree of structures to be used in the website\n        \"\"\"\n        return {\n            \"component\": self.component,\n            \"meta\": self.meta,\n            \"children\": {\n                child_type: [child.to_json() for child in self.children[child_type]] for child_type in self.children\n            }\n        }\n",
                                            "signature": "(component: 'str', meta: 'dict[str, object]', children: 'dict[str, list[Serialized]]') -> None",
                                            "parameters": [
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "self",
                                                        "description": null,
                                                        "annotation": null,
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "component",
                                                        "description": null,
                                                        "annotation": "str",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "meta",
                                                        "description": null,
                                                        "annotation": "dict[str, object]",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "children",
                                                        "description": null,
                                                        "annotation": "dict[str, list[Serialized]]",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                }
                                            ],
                                            "shortDescription": "The dataclass that represents a serialized node, ready to be converted to JSON.",
                                            "longDescription": null,
                                            "deprecations": [],
                                            "examples": [],
                                            "links": [],
                                            "notes": [],
                                            "isAbstract": false,
                                            "searchTerms": "Serialized\nThe dataclass that represents a serialized node, ready to be converted to JSON.\nNone",
                                            "classVariables": []
                                        },
                                        "children": {
                                            "Methods": [
                                                {
                                                    "component": "Subroutine",
                                                    "meta": {
                                                        "searchCategory": "subroutine",
                                                        "name": "to_json",
                                                        "source": "    def to_json(self) -> JsonT:\n        \"\"\"\n        Converts this object into a JSON tree.\n\n        A method that converts this node, and its children into a compatible JSON format recursively,\n        so that it can be used in the website.\n\n        :return: The JSON tree of structures to be used in the website\n        \"\"\"\n        return {\n            \"component\": self.component,\n            \"meta\": self.meta,\n            \"children\": {\n                child_type: [child.to_json() for child in self.children[child_type]] for child_type in self.children\n            }\n        }\n",
                                                        "signature": "(self) -> 'JsonT'",
                                                        "parameters": [
                                                            {
                                                                "component": "Parameter",
                                                                "meta": {
                                                                    "name": "self",
                                                                    "description": null,
                                                                    "annotation": null,
                                                                    "default": null,
                                                                    "isOptional": false
                                                                },
                                                                "children": {}
                                                            }
                                                        ],
                                                        "raises": [],
                                                        "returns": [
                                                            {
                                                                "component": "SubroutineReturn",
                                                                "meta": {
                                                                    "description": "The JSON tree of structures to be used in the website",
                                                                    "annotation": "JsonT"
                                                                },
                                                                "children": {}
                                                            }
                                                        ],
                                                        "shortDescription": "Converts this object into a JSON tree.",
                                                        "longDescription": "A method that converts this node, and its children into a compatible JSON format recursively,\nso that it can be used in the website.",
                                                        "deprecations": [],
                                                        "examples": [],
                                                        "links": [],
                                                        "notes": [],
                                                        "isGenerator": false,
                                                        "isAsync": false,
                                                        "isAbstract": false,
                                                        "isLambda": false,
                                                        "isContextManager": false,
                                                        "searchTerms": "to_json\nConverts this object into a JSON tree.\nA method that converts this node, and its children into a compatible JSON format recursively,\nso that it can be used in the website."
                                                    },
                                                    "children": {}
                                                }
                                            ]
                                        }
                                    }
                                ],
                                "Subroutines": []
                            }
                        },
                        {
                            "component": "Module",
                            "meta": {
                                "searchCategory": "module",
                                "name": "signature_structure",
                                "source": "\"\"\"\nThe module containing the dataclass representing any structure that has a corresponding signature.\n\"\"\"\n\nfrom __future__ import annotations\nfrom abc import ABC\nfrom dataclasses import dataclass\nfrom inspect import signature, Signature\nfrom typing import TypeVar\nfrom .source_structure import SourceStructure\n\n\nStructureT = TypeVar(\"StructureT\")\n\n\n@dataclass(frozen=True, slots=True)\nclass SignatureStructure(SourceStructure[StructureT], ABC):\n    \"\"\"\n    A structure that has a signature, such as a Python class or subroutine.\n    \"\"\"\n    is_declared: bool\n    signature: Signature | None\n\n    @staticmethod\n    def get_signature(structure: StructureT) -> Signature | None:\n        \"\"\"\n        Gets the signature of a given structure, as provided by the in-built inspect API.\n\n        :param structure: The given structure to get the signature from\n        :return: The signature of the given structure\n        :rtype: Signature\n        :return: If the signature cannot be provided\n        :rtype: None\n        \"\"\"\n        try:\n            return signature(structure)\n        except ValueError:\n            return  # Can't be provided\n",
                                "shortDescription": "The module containing the dataclass representing any structure that has a corresponding signature.",
                                "longDescription": null,
                                "deprecations": [],
                                "examples": [],
                                "links": [],
                                "notes": [],
                                "searchTerms": "signature_structure\nThe module containing the dataclass representing any structure that has a corresponding signature.\nNone",
                                "globalVariables": [
                                    {
                                        "component": "Variable",
                                        "meta": {
                                            "name": "StructureT",
                                            "annotation": null,
                                            "value": "~StructureT"
                                        },
                                        "children": {}
                                    }
                                ]
                            },
                            "children": {
                                "Classes": [
                                    {
                                        "component": "Class",
                                        "meta": {
                                            "searchCategory": "class",
                                            "name": "SignatureStructure",
                                            "source": "@dataclass(frozen=True, slots=True)\nclass SignatureStructure(SourceStructure[StructureT], ABC):\n    \"\"\"\n    A structure that has a signature, such as a Python class or subroutine.\n    \"\"\"\n    is_declared: bool\n    signature: Signature | None\n\n    @staticmethod\n    def get_signature(structure: StructureT) -> Signature | None:\n        \"\"\"\n        Gets the signature of a given structure, as provided by the in-built inspect API.\n\n        :param structure: The given structure to get the signature from\n        :return: The signature of the given structure\n        :rtype: Signature\n        :return: If the signature cannot be provided\n        :rtype: None\n        \"\"\"\n        try:\n            return signature(structure)\n        except ValueError:\n            return  # Can't be provided\n",
                                            "signature": "(name: 'str', is_private: 'bool', is_dunder: 'bool', source: 'str', docstring: 'Docstring | None', deprecations: 'list[Deprecated]', examples: 'list[Example] | None', links: 'list[Link] | None', notes: 'list[Note] | None', is_declared: 'bool', signature: 'Signature | None') -> None",
                                            "parameters": [
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "self",
                                                        "description": null,
                                                        "annotation": null,
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "name",
                                                        "description": null,
                                                        "annotation": "str",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "is_private",
                                                        "description": null,
                                                        "annotation": "bool",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "is_dunder",
                                                        "description": null,
                                                        "annotation": "bool",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "source",
                                                        "description": null,
                                                        "annotation": "str",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "docstring",
                                                        "description": null,
                                                        "annotation": "Docstring | None",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "deprecations",
                                                        "description": null,
                                                        "annotation": "list[Deprecated]",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "examples",
                                                        "description": null,
                                                        "annotation": "list[Example] | None",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "links",
                                                        "description": null,
                                                        "annotation": "list[Link] | None",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "notes",
                                                        "description": null,
                                                        "annotation": "list[Note] | None",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "is_declared",
                                                        "description": null,
                                                        "annotation": "bool",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "signature",
                                                        "description": null,
                                                        "annotation": "Signature | None",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                }
                                            ],
                                            "shortDescription": "A structure that has a signature, such as a Python class or subroutine.",
                                            "longDescription": null,
                                            "deprecations": [],
                                            "examples": [],
                                            "links": [],
                                            "notes": [],
                                            "isAbstract": true,
                                            "searchTerms": "SignatureStructure\nA structure that has a signature, such as a Python class or subroutine.\nNone",
                                            "classVariables": []
                                        },
                                        "children": {
                                            "Methods": [
                                                {
                                                    "component": "Subroutine",
                                                    "meta": {
                                                        "searchCategory": "subroutine",
                                                        "name": "get_signature",
                                                        "source": "    @staticmethod\n    def get_signature(structure: StructureT) -> Signature | None:\n        \"\"\"\n        Gets the signature of a given structure, as provided by the in-built inspect API.\n\n        :param structure: The given structure to get the signature from\n        :return: The signature of the given structure\n        :rtype: Signature\n        :return: If the signature cannot be provided\n        :rtype: None\n        \"\"\"\n        try:\n            return signature(structure)\n        except ValueError:\n            return  # Can't be provided\n",
                                                        "signature": "(structure: 'StructureT') -> 'Signature | None'",
                                                        "parameters": [
                                                            {
                                                                "component": "Parameter",
                                                                "meta": {
                                                                    "name": "structure",
                                                                    "description": "The given structure to get the signature from",
                                                                    "annotation": "StructureT",
                                                                    "default": null,
                                                                    "isOptional": false
                                                                },
                                                                "children": {}
                                                            }
                                                        ],
                                                        "raises": [],
                                                        "returns": [
                                                            {
                                                                "component": "SubroutineReturn",
                                                                "meta": {
                                                                    "description": "The signature of the given structure",
                                                                    "annotation": "Signature | None"
                                                                },
                                                                "children": {}
                                                            },
                                                            {
                                                                "component": "SubroutineReturn",
                                                                "meta": {
                                                                    "description": "If the signature cannot be provided",
                                                                    "annotation": "Signature | None"
                                                                },
                                                                "children": {}
                                                            }
                                                        ],
                                                        "shortDescription": "Gets the signature of a given structure, as provided by the in-built inspect API.",
                                                        "longDescription": null,
                                                        "deprecations": [],
                                                        "examples": [],
                                                        "links": [],
                                                        "notes": [],
                                                        "isGenerator": false,
                                                        "isAsync": false,
                                                        "isAbstract": false,
                                                        "isLambda": false,
                                                        "isContextManager": false,
                                                        "searchTerms": "get_signature\nGets the signature of a given structure, as provided by the in-built inspect API.\nNone"
                                                    },
                                                    "children": {}
                                                }
                                            ]
                                        }
                                    }
                                ],
                                "Subroutines": []
                            }
                        },
                        {
                            "component": "Module",
                            "meta": {
                                "searchCategory": "module",
                                "name": "source_structure",
                                "source": "\"\"\"\nThe module containing the dataclass representing any structure that has source code that can be inspected.\n\"\"\"\n\nfrom __future__ import annotations\nfrom dataclasses import dataclass\nfrom typing import Generic, TypeVar\nfrom inspect import getsource, getdoc\nfrom docstring_parser import parse, Docstring as ParserDocstring\nfrom abc import ABC\nfrom .docstring import Docstring\nfrom .structure import Structure\nfrom ..tags import Deprecated, Example, Link, Note\n\nStructureT = TypeVar(\"StructureT\")\n\n\n@dataclass(frozen=True, slots=True)\nclass SourceStructure(Generic[StructureT], Structure, ABC):\n    \"\"\"\n    A structure that has source code that can be inspected by the in-built inspect API.\n    \"\"\"\n    name: str\n    is_private: bool\n    is_dunder: bool\n    source: str\n    docstring: Docstring | None\n    deprecations: list[Deprecated]\n    examples: list[Example] | None\n    links: list[Link] | None\n    notes: list[Note] | None\n\n    @staticmethod\n    def get_source(structure: StructureT) -> str | None:\n        \"\"\"\n        Gets the source code from a given structure.\n\n        :param structure: The given structure to get the source code from\n        :return: The source code of the given structure\n        :rtype: str\n        :return: If the source code cannot be provided\n        :rtype: None\n        \"\"\"\n        try:\n            return getsource(structure)\n        except OSError:\n            return  # Can't be provided\n        except TypeError:\n            return  # Can't be provided, maybe builtin?\n\n    @staticmethod\n    def get_docstring(structure: StructureT) -> ParserDocstring | None:\n        \"\"\"\n        Gets the docstring from a given structure.\n\n        Uses the in-built inspect API to fetch the corresponding docstring from the structure,\n        falling back to superclasses if necessary, and cleaning / sanitizing the docstring as required.\n\n        :param structure: The structure to get a docstring from\n        :rtype: docstring_parser.Docstring\n        :return: If no docstring exists, or it consists of only empty space\n        :rtype: None\n        \"\"\"\n        docstring = getdoc(structure)\n        if docstring is None or docstring.isspace():\n            return\n        return parse(docstring)\n",
                                "shortDescription": "The module containing the dataclass representing any structure that has source code that can be inspected.",
                                "longDescription": null,
                                "deprecations": [],
                                "examples": [],
                                "links": [],
                                "notes": [],
                                "searchTerms": "source_structure\nThe module containing the dataclass representing any structure that has source code that can be inspected.\nNone",
                                "globalVariables": [
                                    {
                                        "component": "Variable",
                                        "meta": {
                                            "name": "StructureT",
                                            "annotation": null,
                                            "value": "~StructureT"
                                        },
                                        "children": {}
                                    }
                                ]
                            },
                            "children": {
                                "Classes": [
                                    {
                                        "component": "Class",
                                        "meta": {
                                            "searchCategory": "class",
                                            "name": "SourceStructure",
                                            "source": "@dataclass(frozen=True, slots=True)\nclass SourceStructure(Generic[StructureT], Structure, ABC):\n    \"\"\"\n    A structure that has source code that can be inspected by the in-built inspect API.\n    \"\"\"\n    name: str\n    is_private: bool\n    is_dunder: bool\n    source: str\n    docstring: Docstring | None\n    deprecations: list[Deprecated]\n    examples: list[Example] | None\n    links: list[Link] | None\n    notes: list[Note] | None\n\n    @staticmethod\n    def get_source(structure: StructureT) -> str | None:\n        \"\"\"\n        Gets the source code from a given structure.\n\n        :param structure: The given structure to get the source code from\n        :return: The source code of the given structure\n        :rtype: str\n        :return: If the source code cannot be provided\n        :rtype: None\n        \"\"\"\n        try:\n            return getsource(structure)\n        except OSError:\n            return  # Can't be provided\n        except TypeError:\n            return  # Can't be provided, maybe builtin?\n\n    @staticmethod\n    def get_docstring(structure: StructureT) -> ParserDocstring | None:\n        \"\"\"\n        Gets the docstring from a given structure.\n\n        Uses the in-built inspect API to fetch the corresponding docstring from the structure,\n        falling back to superclasses if necessary, and cleaning / sanitizing the docstring as required.\n\n        :param structure: The structure to get a docstring from\n        :rtype: docstring_parser.Docstring\n        :return: If no docstring exists, or it consists of only empty space\n        :rtype: None\n        \"\"\"\n        docstring = getdoc(structure)\n        if docstring is None or docstring.isspace():\n            return\n        return parse(docstring)\n",
                                            "signature": "(name: 'str', is_private: 'bool', is_dunder: 'bool', source: 'str', docstring: 'Docstring | None', deprecations: 'list[Deprecated]', examples: 'list[Example] | None', links: 'list[Link] | None', notes: 'list[Note] | None') -> None",
                                            "parameters": [
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "self",
                                                        "description": null,
                                                        "annotation": null,
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "name",
                                                        "description": null,
                                                        "annotation": "str",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "is_private",
                                                        "description": null,
                                                        "annotation": "bool",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "is_dunder",
                                                        "description": null,
                                                        "annotation": "bool",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "source",
                                                        "description": null,
                                                        "annotation": "str",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "docstring",
                                                        "description": null,
                                                        "annotation": "Docstring | None",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "deprecations",
                                                        "description": null,
                                                        "annotation": "list[Deprecated]",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "examples",
                                                        "description": null,
                                                        "annotation": "list[Example] | None",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "links",
                                                        "description": null,
                                                        "annotation": "list[Link] | None",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "notes",
                                                        "description": null,
                                                        "annotation": "list[Note] | None",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                }
                                            ],
                                            "shortDescription": "A structure that has source code that can be inspected by the in-built inspect API.",
                                            "longDescription": null,
                                            "deprecations": [],
                                            "examples": [],
                                            "links": [],
                                            "notes": [],
                                            "isAbstract": true,
                                            "searchTerms": "SourceStructure\nA structure that has source code that can be inspected by the in-built inspect API.\nNone",
                                            "classVariables": []
                                        },
                                        "children": {
                                            "Methods": [
                                                {
                                                    "component": "Subroutine",
                                                    "meta": {
                                                        "searchCategory": "subroutine",
                                                        "name": "get_source",
                                                        "source": "    @staticmethod\n    def get_source(structure: StructureT) -> str | None:\n        \"\"\"\n        Gets the source code from a given structure.\n\n        :param structure: The given structure to get the source code from\n        :return: The source code of the given structure\n        :rtype: str\n        :return: If the source code cannot be provided\n        :rtype: None\n        \"\"\"\n        try:\n            return getsource(structure)\n        except OSError:\n            return  # Can't be provided\n        except TypeError:\n            return  # Can't be provided, maybe builtin?\n",
                                                        "signature": "(structure: 'StructureT') -> 'str | None'",
                                                        "parameters": [
                                                            {
                                                                "component": "Parameter",
                                                                "meta": {
                                                                    "name": "structure",
                                                                    "description": "The given structure to get the source code from",
                                                                    "annotation": "StructureT",
                                                                    "default": null,
                                                                    "isOptional": false
                                                                },
                                                                "children": {}
                                                            }
                                                        ],
                                                        "raises": [],
                                                        "returns": [
                                                            {
                                                                "component": "SubroutineReturn",
                                                                "meta": {
                                                                    "description": "The source code of the given structure",
                                                                    "annotation": "str | None"
                                                                },
                                                                "children": {}
                                                            },
                                                            {
                                                                "component": "SubroutineReturn",
                                                                "meta": {
                                                                    "description": "If the source code cannot be provided",
                                                                    "annotation": "str | None"
                                                                },
                                                                "children": {}
                                                            }
                                                        ],
                                                        "shortDescription": "Gets the source code from a given structure.",
                                                        "longDescription": null,
                                                        "deprecations": [],
                                                        "examples": [],
                                                        "links": [],
                                                        "notes": [],
                                                        "isGenerator": false,
                                                        "isAsync": false,
                                                        "isAbstract": false,
                                                        "isLambda": false,
                                                        "isContextManager": false,
                                                        "searchTerms": "get_source\nGets the source code from a given structure.\nNone"
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Subroutine",
                                                    "meta": {
                                                        "searchCategory": "subroutine",
                                                        "name": "get_docstring",
                                                        "source": "    @staticmethod\n    def get_docstring(structure: StructureT) -> ParserDocstring | None:\n        \"\"\"\n        Gets the docstring from a given structure.\n\n        Uses the in-built inspect API to fetch the corresponding docstring from the structure,\n        falling back to superclasses if necessary, and cleaning / sanitizing the docstring as required.\n\n        :param structure: The structure to get a docstring from\n        :rtype: docstring_parser.Docstring\n        :return: If no docstring exists, or it consists of only empty space\n        :rtype: None\n        \"\"\"\n        docstring = getdoc(structure)\n        if docstring is None or docstring.isspace():\n            return\n        return parse(docstring)\n",
                                                        "signature": "(structure: 'StructureT') -> 'ParserDocstring | None'",
                                                        "parameters": [
                                                            {
                                                                "component": "Parameter",
                                                                "meta": {
                                                                    "name": "structure",
                                                                    "description": "The structure to get a docstring from",
                                                                    "annotation": "StructureT",
                                                                    "default": null,
                                                                    "isOptional": false
                                                                },
                                                                "children": {}
                                                            }
                                                        ],
                                                        "raises": [],
                                                        "returns": [
                                                            {
                                                                "component": "SubroutineReturn",
                                                                "meta": {
                                                                    "description": "If no docstring exists, or it consists of only empty space",
                                                                    "annotation": "ParserDocstring | None"
                                                                },
                                                                "children": {}
                                                            }
                                                        ],
                                                        "shortDescription": "Gets the docstring from a given structure.",
                                                        "longDescription": "Uses the in-built inspect API to fetch the corresponding docstring from the structure,\nfalling back to superclasses if necessary, and cleaning / sanitizing the docstring as required.",
                                                        "deprecations": [],
                                                        "examples": [],
                                                        "links": [],
                                                        "notes": [],
                                                        "isGenerator": false,
                                                        "isAsync": false,
                                                        "isAbstract": false,
                                                        "isLambda": false,
                                                        "isContextManager": false,
                                                        "searchTerms": "get_docstring\nGets the docstring from a given structure.\nUses the in-built inspect API to fetch the corresponding docstring from the structure,\nfalling back to superclasses if necessary, and cleaning / sanitizing the docstring as required."
                                                    },
                                                    "children": {}
                                                }
                                            ]
                                        }
                                    }
                                ],
                                "Subroutines": []
                            }
                        },
                        {
                            "component": "Module",
                            "meta": {
                                "searchCategory": "module",
                                "name": "structure",
                                "source": "\"\"\"\nThe module containing the dataclass representing any Python structure recorded by the scanning tool for documenting.\n\"\"\"\n\nfrom __future__ import annotations\nfrom dataclasses import dataclass\nfrom inspect import Signature, getmodule\nfrom types import ModuleType, FunctionType\nfrom typing import Callable\nfrom abc import ABC, abstractmethod\nfrom .serialized import Serialized\nfrom ..tags import Private\n\n\n@dataclass(frozen=True, slots=True)\nclass Structure(ABC):\n    \"\"\"\n    The base dataclass representing any Python structure recorded by the scanning tool for documenting.\n    \"\"\"\n\n    @abstractmethod\n    def serialize(self, child_filter: Callable[[Structure], bool] = lambda _: True) -> Serialized:\n        \"\"\"\n        Serializes the structure into a Serialized object, so that it can be used in the website.\n\n        A Serialized object is a standardized format for serialization structures, with customizable filtering\n        options to omit certain structures from the project tree as desired,\n        and a convenient method for conversion to JSON.\n\n        :param child_filter: The filter method used to omit unwanted structures from the serializes project tree\n        :return: The serialized structure, in a compatible JSON format\n        \"\"\"\n        ...\n\n    @staticmethod\n    def object_as_written(object_: object) -> str | None:\n        \"\"\"\n        Writes a given object in a more easily readable format.\n         \n        Writes a given object as it is expected to have been written in the source code.\n        \n        :param object_: The object as expected to have been written in source code\n        :rtype: str\n        :return: If the object has an empty signature, as per the in-built inspect API\n        :rtype: None\n        \"\"\"\n        if object_ in (Signature.empty, \"_empty\"):\n            return\n        return object_.__name__ if isinstance(object_, type) else str(object_)\n\n    @staticmethod\n    def defined_within(member, module_name: str) -> bool | None:\n        \"\"\"\n        Determines whether a given member is in-built or not within a given module.\n\n        :param member: The member to inspect\n        :param module_name: the name of the module the member was declared within\n        :return: Whether the member was defined in the given module, or imported / in-built\n        :rtype: bool\n        :return: If the source module of the given member cannot be determined\n        :rtype: None\n        \"\"\"\n        defined_module = getmodule(member)\n        if defined_module is None:\n            return\n        return getmodule(member).__name__ == module_name\n\n    @staticmethod\n    def check_is_private(structure: object | FunctionType | ModuleType) -> bool:\n        \"\"\"\n        Checks to see whether a structure is considered to be private.\n\n        If a structure does not possess the private tag, and starts with\n        at least one underscore, it is considered to be private.\n\n        :param structure:\n        :return:\n        \"\"\"\n        if hasattr(structure, \"__name__\"):\n            return Private.is_tagged(structure) or structure.__name__.startswith(\"_\")\n        return Private.is_tagged(structure)\n",
                                "shortDescription": "The module containing the dataclass representing any Python structure recorded by the scanning tool for documenting.",
                                "longDescription": null,
                                "deprecations": [],
                                "examples": [],
                                "links": [],
                                "notes": [],
                                "searchTerms": "structure\nThe module containing the dataclass representing any Python structure recorded by the scanning tool for documenting.\nNone",
                                "globalVariables": []
                            },
                            "children": {
                                "Classes": [
                                    {
                                        "component": "Class",
                                        "meta": {
                                            "searchCategory": "class",
                                            "name": "Structure",
                                            "source": "@dataclass(frozen=True, slots=True)\nclass Structure(ABC):\n    \"\"\"\n    The base dataclass representing any Python structure recorded by the scanning tool for documenting.\n    \"\"\"\n\n    @abstractmethod\n    def serialize(self, child_filter: Callable[[Structure], bool] = lambda _: True) -> Serialized:\n        \"\"\"\n        Serializes the structure into a Serialized object, so that it can be used in the website.\n\n        A Serialized object is a standardized format for serialization structures, with customizable filtering\n        options to omit certain structures from the project tree as desired,\n        and a convenient method for conversion to JSON.\n\n        :param child_filter: The filter method used to omit unwanted structures from the serializes project tree\n        :return: The serialized structure, in a compatible JSON format\n        \"\"\"\n        ...\n\n    @staticmethod\n    def object_as_written(object_: object) -> str | None:\n        \"\"\"\n        Writes a given object in a more easily readable format.\n         \n        Writes a given object as it is expected to have been written in the source code.\n        \n        :param object_: The object as expected to have been written in source code\n        :rtype: str\n        :return: If the object has an empty signature, as per the in-built inspect API\n        :rtype: None\n        \"\"\"\n        if object_ in (Signature.empty, \"_empty\"):\n            return\n        return object_.__name__ if isinstance(object_, type) else str(object_)\n\n    @staticmethod\n    def defined_within(member, module_name: str) -> bool | None:\n        \"\"\"\n        Determines whether a given member is in-built or not within a given module.\n\n        :param member: The member to inspect\n        :param module_name: the name of the module the member was declared within\n        :return: Whether the member was defined in the given module, or imported / in-built\n        :rtype: bool\n        :return: If the source module of the given member cannot be determined\n        :rtype: None\n        \"\"\"\n        defined_module = getmodule(member)\n        if defined_module is None:\n            return\n        return getmodule(member).__name__ == module_name\n\n    @staticmethod\n    def check_is_private(structure: object | FunctionType | ModuleType) -> bool:\n        \"\"\"\n        Checks to see whether a structure is considered to be private.\n\n        If a structure does not possess the private tag, and starts with\n        at least one underscore, it is considered to be private.\n\n        :param structure:\n        :return:\n        \"\"\"\n        if hasattr(structure, \"__name__\"):\n            return Private.is_tagged(structure) or structure.__name__.startswith(\"_\")\n        return Private.is_tagged(structure)\n",
                                            "signature": "() -> None",
                                            "parameters": [
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "self",
                                                        "description": null,
                                                        "annotation": null,
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                }
                                            ],
                                            "shortDescription": "The base dataclass representing any Python structure recorded by the scanning tool for documenting.",
                                            "longDescription": null,
                                            "deprecations": [],
                                            "examples": [],
                                            "links": [],
                                            "notes": [],
                                            "isAbstract": true,
                                            "searchTerms": "Structure\nThe base dataclass representing any Python structure recorded by the scanning tool for documenting.\nNone",
                                            "classVariables": []
                                        },
                                        "children": {
                                            "Methods": [
                                                {
                                                    "component": "Subroutine",
                                                    "meta": {
                                                        "searchCategory": "subroutine",
                                                        "name": "serialize",
                                                        "source": "    @abstractmethod\n    def serialize(self, child_filter: Callable[[Structure], bool] = lambda _: True) -> Serialized:\n        \"\"\"\n        Serializes the structure into a Serialized object, so that it can be used in the website.\n\n        A Serialized object is a standardized format for serialization structures, with customizable filtering\n        options to omit certain structures from the project tree as desired,\n        and a convenient method for conversion to JSON.\n\n        :param child_filter: The filter method used to omit unwanted structures from the serializes project tree\n        :return: The serialized structure, in a compatible JSON format\n        \"\"\"\n        ...\n",
                                                        "signature": "(self, child_filter: 'Callable[[Structure], bool]' = <function Structure.<lambda> at 0x0000022DE2E57BA0>) -> 'Serialized'",
                                                        "parameters": [
                                                            {
                                                                "component": "Parameter",
                                                                "meta": {
                                                                    "name": "self",
                                                                    "description": null,
                                                                    "annotation": null,
                                                                    "default": null,
                                                                    "isOptional": false
                                                                },
                                                                "children": {}
                                                            },
                                                            {
                                                                "component": "Parameter",
                                                                "meta": {
                                                                    "name": "child_filter",
                                                                    "description": "The filter method used to omit unwanted structures from the serializes project tree",
                                                                    "annotation": "Callable[[Structure], bool]",
                                                                    "default": "<function Structure.<lambda> at 0x0000022DE2E57BA0>",
                                                                    "isOptional": true
                                                                },
                                                                "children": {}
                                                            }
                                                        ],
                                                        "raises": [],
                                                        "returns": [
                                                            {
                                                                "component": "SubroutineReturn",
                                                                "meta": {
                                                                    "description": "The serialized structure, in a compatible JSON format",
                                                                    "annotation": "Serialized"
                                                                },
                                                                "children": {}
                                                            }
                                                        ],
                                                        "shortDescription": "Serializes the structure into a Serialized object, so that it can be used in the website.",
                                                        "longDescription": "A Serialized object is a standardized format for serialization structures, with customizable filtering\noptions to omit certain structures from the project tree as desired,\nand a convenient method for conversion to JSON.",
                                                        "deprecations": [],
                                                        "examples": [],
                                                        "links": [],
                                                        "notes": [],
                                                        "isGenerator": false,
                                                        "isAsync": false,
                                                        "isAbstract": true,
                                                        "isLambda": false,
                                                        "isContextManager": false,
                                                        "searchTerms": "serialize\nSerializes the structure into a Serialized object, so that it can be used in the website.\nA Serialized object is a standardized format for serialization structures, with customizable filtering\noptions to omit certain structures from the project tree as desired,\nand a convenient method for conversion to JSON."
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Subroutine",
                                                    "meta": {
                                                        "searchCategory": "subroutine",
                                                        "name": "object_as_written",
                                                        "source": "    @staticmethod\n    def object_as_written(object_: object) -> str | None:\n        \"\"\"\n        Writes a given object in a more easily readable format.\n         \n        Writes a given object as it is expected to have been written in the source code.\n        \n        :param object_: The object as expected to have been written in source code\n        :rtype: str\n        :return: If the object has an empty signature, as per the in-built inspect API\n        :rtype: None\n        \"\"\"\n        if object_ in (Signature.empty, \"_empty\"):\n            return\n        return object_.__name__ if isinstance(object_, type) else str(object_)\n",
                                                        "signature": "(object_: 'object') -> 'str | None'",
                                                        "parameters": [
                                                            {
                                                                "component": "Parameter",
                                                                "meta": {
                                                                    "name": "object_",
                                                                    "description": "The object as expected to have been written in source code",
                                                                    "annotation": "object",
                                                                    "default": null,
                                                                    "isOptional": false
                                                                },
                                                                "children": {}
                                                            }
                                                        ],
                                                        "raises": [],
                                                        "returns": [
                                                            {
                                                                "component": "SubroutineReturn",
                                                                "meta": {
                                                                    "description": "If the object has an empty signature, as per the in-built inspect API",
                                                                    "annotation": "str | None"
                                                                },
                                                                "children": {}
                                                            }
                                                        ],
                                                        "shortDescription": "Writes a given object in a more easily readable format.",
                                                        "longDescription": "Writes a given object as it is expected to have been written in the source code.",
                                                        "deprecations": [],
                                                        "examples": [],
                                                        "links": [],
                                                        "notes": [],
                                                        "isGenerator": false,
                                                        "isAsync": false,
                                                        "isAbstract": false,
                                                        "isLambda": false,
                                                        "isContextManager": false,
                                                        "searchTerms": "object_as_written\nWrites a given object in a more easily readable format.\nWrites a given object as it is expected to have been written in the source code."
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Subroutine",
                                                    "meta": {
                                                        "searchCategory": "subroutine",
                                                        "name": "defined_within",
                                                        "source": "    @staticmethod\n    def defined_within(member, module_name: str) -> bool | None:\n        \"\"\"\n        Determines whether a given member is in-built or not within a given module.\n\n        :param member: The member to inspect\n        :param module_name: the name of the module the member was declared within\n        :return: Whether the member was defined in the given module, or imported / in-built\n        :rtype: bool\n        :return: If the source module of the given member cannot be determined\n        :rtype: None\n        \"\"\"\n        defined_module = getmodule(member)\n        if defined_module is None:\n            return\n        return getmodule(member).__name__ == module_name\n",
                                                        "signature": "(member, module_name: 'str') -> 'bool | None'",
                                                        "parameters": [
                                                            {
                                                                "component": "Parameter",
                                                                "meta": {
                                                                    "name": "member",
                                                                    "description": "The member to inspect",
                                                                    "annotation": null,
                                                                    "default": null,
                                                                    "isOptional": false
                                                                },
                                                                "children": {}
                                                            },
                                                            {
                                                                "component": "Parameter",
                                                                "meta": {
                                                                    "name": "module_name",
                                                                    "description": "the name of the module the member was declared within",
                                                                    "annotation": "str",
                                                                    "default": null,
                                                                    "isOptional": false
                                                                },
                                                                "children": {}
                                                            }
                                                        ],
                                                        "raises": [],
                                                        "returns": [
                                                            {
                                                                "component": "SubroutineReturn",
                                                                "meta": {
                                                                    "description": "Whether the member was defined in the given module, or imported / in-built",
                                                                    "annotation": "bool | None"
                                                                },
                                                                "children": {}
                                                            },
                                                            {
                                                                "component": "SubroutineReturn",
                                                                "meta": {
                                                                    "description": "If the source module of the given member cannot be determined",
                                                                    "annotation": "bool | None"
                                                                },
                                                                "children": {}
                                                            }
                                                        ],
                                                        "shortDescription": "Determines whether a given member is in-built or not within a given module.",
                                                        "longDescription": null,
                                                        "deprecations": [],
                                                        "examples": [],
                                                        "links": [],
                                                        "notes": [],
                                                        "isGenerator": false,
                                                        "isAsync": false,
                                                        "isAbstract": false,
                                                        "isLambda": false,
                                                        "isContextManager": false,
                                                        "searchTerms": "defined_within\nDetermines whether a given member is in-built or not within a given module.\nNone"
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Subroutine",
                                                    "meta": {
                                                        "searchCategory": "subroutine",
                                                        "name": "check_is_private",
                                                        "source": "    @staticmethod\n    def check_is_private(structure: object | FunctionType | ModuleType) -> bool:\n        \"\"\"\n        Checks to see whether a structure is considered to be private.\n\n        If a structure does not possess the private tag, and starts with\n        at least one underscore, it is considered to be private.\n\n        :param structure:\n        :return:\n        \"\"\"\n        if hasattr(structure, \"__name__\"):\n            return Private.is_tagged(structure) or structure.__name__.startswith(\"_\")\n        return Private.is_tagged(structure)\n",
                                                        "signature": "(structure: 'object | FunctionType | ModuleType') -> 'bool'",
                                                        "parameters": [
                                                            {
                                                                "component": "Parameter",
                                                                "meta": {
                                                                    "name": "structure",
                                                                    "description": "",
                                                                    "annotation": "object | FunctionType | ModuleType",
                                                                    "default": null,
                                                                    "isOptional": false
                                                                },
                                                                "children": {}
                                                            }
                                                        ],
                                                        "raises": [],
                                                        "returns": [
                                                            {
                                                                "component": "SubroutineReturn",
                                                                "meta": {
                                                                    "description": "",
                                                                    "annotation": "bool"
                                                                },
                                                                "children": {}
                                                            }
                                                        ],
                                                        "shortDescription": "Checks to see whether a structure is considered to be private.",
                                                        "longDescription": "If a structure does not possess the private tag, and starts with\nat least one underscore, it is considered to be private.",
                                                        "deprecations": [],
                                                        "examples": [],
                                                        "links": [],
                                                        "notes": [],
                                                        "isGenerator": false,
                                                        "isAsync": false,
                                                        "isAbstract": false,
                                                        "isLambda": false,
                                                        "isContextManager": false,
                                                        "searchTerms": "check_is_private\nChecks to see whether a structure is considered to be private.\nIf a structure does not possess the private tag, and starts with\nat least one underscore, it is considered to be private."
                                                    },
                                                    "children": {}
                                                }
                                            ]
                                        }
                                    }
                                ],
                                "Subroutines": []
                            }
                        },
                        {
                            "component": "Module",
                            "meta": {
                                "searchCategory": "module",
                                "name": "subroutine",
                                "source": "\"\"\"\nThe module containing the dataclass representing Python subroutines, such as functions, methods, and generators.\n\"\"\"\n\nfrom __future__ import annotations\nfrom dataclasses import dataclass\nfrom types import FunctionType\nfrom typing import Callable\nfrom inspect import isgeneratorfunction, isasyncgenfunction, iscoroutinefunction\nfrom .docstring import Docstring\nfrom .structure import Structure\nfrom .signature_structure import SignatureStructure\nfrom .serialized import Serialized\nfrom .parameter import Parameter\nfrom .subroutine_return import SubroutineReturn\nfrom .searchable_structure import SearchableStructure\nfrom ..tags import ContextManager, Deprecated, Link, Note, Example\n\n\n@dataclass(frozen=True, slots=True)\nclass Subroutine(SignatureStructure[FunctionType], SearchableStructure):\n    \"\"\"\n    The dataclass representing Python subroutines, such as functions, methods, and generators.\n    \"\"\"\n    @property\n    def search_terms(self) -> str:\n        return (\n            f\"{self.name}\\n{self.docstring.short_description if self.docstring else ''}\"\n            f\"\\n{self.docstring.long_description if self.docstring else ''}\"\n        )\n\n    @property\n    def search_category(self) -> str:\n        return \"subroutine\"\n\n    parameters: list[Parameter]\n    is_generator: bool | None\n    is_async: bool\n    is_abstract: bool\n    is_lambda: bool\n    is_context_manager: bool\n\n    @classmethod\n    def from_subroutine(cls, subroutine: FunctionType | type(object.__init__), is_declared: bool,\n                        is_abstract: bool = False) -> Subroutine:\n        \"\"\"\n        Forms an instance of this class from a Python subroutine, as provided by the in-built inspect API.\n        \n        :param subroutine: The inspected subroutine\n        :param is_declared: Whether the subroutine has been previously declared or not\n        :param is_abstract: Whether this subroutine is an abstract method or not\n        :return: A corresponding instance of this class\n        \"\"\"\n        name = subroutine.__name__\n        signature = cls.get_signature(subroutine)\n        docstring = cls.get_docstring(subroutine)\n        docstring = Docstring.from_docstring(\n            docstring, cls.object_as_written(signature.return_annotation)\n        ) if docstring else None\n\n        return cls(\n            name,\n            cls.check_is_private(subroutine),\n            name.startswith(\"__\"),\n            cls.get_source(subroutine),\n            docstring,\n            Deprecated.get_tags(subroutine),\n            Example.get_tags(subroutine),\n            Link.get_tags(subroutine),\n            Note.get_tags(subroutine),\n            is_declared,\n            signature,\n            [\n                Parameter.from_parameter(\n                    signature.parameters[parameter], docstring.parameters if docstring else []\n                ) for parameter in signature.parameters if parameter is not None\n            ],\n            isgeneratorfunction(subroutine) or isasyncgenfunction(subroutine),\n            (\n                isasyncgenfunction(subroutine) or\n                iscoroutinefunction(subroutine) or\n                (\n                    any(tag.is_async for tag in ContextManager.get_tags(subroutine))\n                    if ContextManager.is_tagged(subroutine) else False\n                )\n            ),\n            is_abstract,\n            name == \"<lambda>\",\n            ContextManager.is_tagged(subroutine)\n        )\n\n    def serialize(self, child_filter: Callable[[Structure], bool] = lambda _: True) -> Serialized:\n        return Serialized(\n            \"Subroutine\",\n            {\n                \"searchCategory\": self.search_category,\n                \"name\": self.name,\n                \"source\": self.source,\n                \"signature\": str(self.signature),\n                \"parameters\": [\n                    parameter.serialize(child_filter=child_filter).to_json() for parameter in self.parameters\n                ],\n                \"raises\": [\n                    error.serialize(child_filter=child_filter).to_json() for error in self.docstring.raises\n                ] if self.docstring else [],\n                \"returns\": [\n                    return_.serialize(child_filter=child_filter).to_json() for return_ in self.docstring.returns\n                ] if self.docstring else [\n                    SubroutineReturn(\n                        \"No description...\", self.object_as_written(self.signature.return_annotation)\n                    ).serialize(child_filter=child_filter).to_json()\n                ],\n                \"shortDescription\": self.docstring.short_description if self.docstring else None,\n                \"longDescription\": self.docstring.long_description if self.docstring else None,\n                \"deprecations\": [deprecation.json_serialize() for deprecation in self.deprecations],\n                \"examples\": [example.json_serialize() for example in self.examples],\n                \"links\": [link.json_serialize() for link in self.links],\n                \"notes\": [note.json_serialize() for note in self.notes],\n                \"isGenerator\": self.is_generator,\n                \"isAsync\": self.is_async,\n                \"isAbstract\": self.is_abstract,\n                \"isLambda\": self.is_lambda,\n                \"isContextManager\": self.is_context_manager,\n                \"searchTerms\": self.search_terms\n            },\n            {}\n        )\n",
                                "shortDescription": "The module containing the dataclass representing Python subroutines, such as functions, methods, and generators.",
                                "longDescription": null,
                                "deprecations": [],
                                "examples": [],
                                "links": [],
                                "notes": [],
                                "searchTerms": "subroutine\nThe module containing the dataclass representing Python subroutines, such as functions, methods, and generators.\nNone",
                                "globalVariables": []
                            },
                            "children": {
                                "Classes": [
                                    {
                                        "component": "Class",
                                        "meta": {
                                            "searchCategory": "class",
                                            "name": "Subroutine",
                                            "source": "@dataclass(frozen=True, slots=True)\nclass Subroutine(SignatureStructure[FunctionType], SearchableStructure):\n    \"\"\"\n    The dataclass representing Python subroutines, such as functions, methods, and generators.\n    \"\"\"\n    @property\n    def search_terms(self) -> str:\n        return (\n            f\"{self.name}\\n{self.docstring.short_description if self.docstring else ''}\"\n            f\"\\n{self.docstring.long_description if self.docstring else ''}\"\n        )\n\n    @property\n    def search_category(self) -> str:\n        return \"subroutine\"\n\n    parameters: list[Parameter]\n    is_generator: bool | None\n    is_async: bool\n    is_abstract: bool\n    is_lambda: bool\n    is_context_manager: bool\n\n    @classmethod\n    def from_subroutine(cls, subroutine: FunctionType | type(object.__init__), is_declared: bool,\n                        is_abstract: bool = False) -> Subroutine:\n        \"\"\"\n        Forms an instance of this class from a Python subroutine, as provided by the in-built inspect API.\n        \n        :param subroutine: The inspected subroutine\n        :param is_declared: Whether the subroutine has been previously declared or not\n        :param is_abstract: Whether this subroutine is an abstract method or not\n        :return: A corresponding instance of this class\n        \"\"\"\n        name = subroutine.__name__\n        signature = cls.get_signature(subroutine)\n        docstring = cls.get_docstring(subroutine)\n        docstring = Docstring.from_docstring(\n            docstring, cls.object_as_written(signature.return_annotation)\n        ) if docstring else None\n\n        return cls(\n            name,\n            cls.check_is_private(subroutine),\n            name.startswith(\"__\"),\n            cls.get_source(subroutine),\n            docstring,\n            Deprecated.get_tags(subroutine),\n            Example.get_tags(subroutine),\n            Link.get_tags(subroutine),\n            Note.get_tags(subroutine),\n            is_declared,\n            signature,\n            [\n                Parameter.from_parameter(\n                    signature.parameters[parameter], docstring.parameters if docstring else []\n                ) for parameter in signature.parameters if parameter is not None\n            ],\n            isgeneratorfunction(subroutine) or isasyncgenfunction(subroutine),\n            (\n                isasyncgenfunction(subroutine) or\n                iscoroutinefunction(subroutine) or\n                (\n                    any(tag.is_async for tag in ContextManager.get_tags(subroutine))\n                    if ContextManager.is_tagged(subroutine) else False\n                )\n            ),\n            is_abstract,\n            name == \"<lambda>\",\n            ContextManager.is_tagged(subroutine)\n        )\n\n    def serialize(self, child_filter: Callable[[Structure], bool] = lambda _: True) -> Serialized:\n        return Serialized(\n            \"Subroutine\",\n            {\n                \"searchCategory\": self.search_category,\n                \"name\": self.name,\n                \"source\": self.source,\n                \"signature\": str(self.signature),\n                \"parameters\": [\n                    parameter.serialize(child_filter=child_filter).to_json() for parameter in self.parameters\n                ],\n                \"raises\": [\n                    error.serialize(child_filter=child_filter).to_json() for error in self.docstring.raises\n                ] if self.docstring else [],\n                \"returns\": [\n                    return_.serialize(child_filter=child_filter).to_json() for return_ in self.docstring.returns\n                ] if self.docstring else [\n                    SubroutineReturn(\n                        \"No description...\", self.object_as_written(self.signature.return_annotation)\n                    ).serialize(child_filter=child_filter).to_json()\n                ],\n                \"shortDescription\": self.docstring.short_description if self.docstring else None,\n                \"longDescription\": self.docstring.long_description if self.docstring else None,\n                \"deprecations\": [deprecation.json_serialize() for deprecation in self.deprecations],\n                \"examples\": [example.json_serialize() for example in self.examples],\n                \"links\": [link.json_serialize() for link in self.links],\n                \"notes\": [note.json_serialize() for note in self.notes],\n                \"isGenerator\": self.is_generator,\n                \"isAsync\": self.is_async,\n                \"isAbstract\": self.is_abstract,\n                \"isLambda\": self.is_lambda,\n                \"isContextManager\": self.is_context_manager,\n                \"searchTerms\": self.search_terms\n            },\n            {}\n        )\n",
                                            "signature": "(name: 'str', is_private: 'bool', is_dunder: 'bool', source: 'str', docstring: 'Docstring | None', deprecations: 'list[Deprecated]', examples: 'list[Example] | None', links: 'list[Link] | None', notes: 'list[Note] | None', is_declared: 'bool', signature: 'Signature | None', parameters: 'list[Parameter]', is_generator: 'bool | None', is_async: 'bool', is_abstract: 'bool', is_lambda: 'bool', is_context_manager: 'bool') -> None",
                                            "parameters": [
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "self",
                                                        "description": null,
                                                        "annotation": null,
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "name",
                                                        "description": null,
                                                        "annotation": "str",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "is_private",
                                                        "description": null,
                                                        "annotation": "bool",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "is_dunder",
                                                        "description": null,
                                                        "annotation": "bool",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "source",
                                                        "description": null,
                                                        "annotation": "str",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "docstring",
                                                        "description": null,
                                                        "annotation": "Docstring | None",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "deprecations",
                                                        "description": null,
                                                        "annotation": "list[Deprecated]",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "examples",
                                                        "description": null,
                                                        "annotation": "list[Example] | None",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "links",
                                                        "description": null,
                                                        "annotation": "list[Link] | None",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "notes",
                                                        "description": null,
                                                        "annotation": "list[Note] | None",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "is_declared",
                                                        "description": null,
                                                        "annotation": "bool",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "signature",
                                                        "description": null,
                                                        "annotation": "Signature | None",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "parameters",
                                                        "description": null,
                                                        "annotation": "list[Parameter]",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "is_generator",
                                                        "description": null,
                                                        "annotation": "bool | None",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "is_async",
                                                        "description": null,
                                                        "annotation": "bool",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "is_abstract",
                                                        "description": null,
                                                        "annotation": "bool",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "is_lambda",
                                                        "description": null,
                                                        "annotation": "bool",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "is_context_manager",
                                                        "description": null,
                                                        "annotation": "bool",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                }
                                            ],
                                            "shortDescription": "The dataclass representing Python subroutines, such as functions, methods, and generators.",
                                            "longDescription": null,
                                            "deprecations": [],
                                            "examples": [],
                                            "links": [],
                                            "notes": [],
                                            "isAbstract": false,
                                            "searchTerms": "Subroutine\nThe dataclass representing Python subroutines, such as functions, methods, and generators.\nNone",
                                            "classVariables": []
                                        },
                                        "children": {
                                            "Methods": [
                                                {
                                                    "component": "Subroutine",
                                                    "meta": {
                                                        "searchCategory": "subroutine",
                                                        "name": "from_subroutine",
                                                        "source": "    @classmethod\n    def from_subroutine(cls, subroutine: FunctionType | type(object.__init__), is_declared: bool,\n                        is_abstract: bool = False) -> Subroutine:\n        \"\"\"\n        Forms an instance of this class from a Python subroutine, as provided by the in-built inspect API.\n        \n        :param subroutine: The inspected subroutine\n        :param is_declared: Whether the subroutine has been previously declared or not\n        :param is_abstract: Whether this subroutine is an abstract method or not\n        :return: A corresponding instance of this class\n        \"\"\"\n        name = subroutine.__name__\n        signature = cls.get_signature(subroutine)\n        docstring = cls.get_docstring(subroutine)\n        docstring = Docstring.from_docstring(\n            docstring, cls.object_as_written(signature.return_annotation)\n        ) if docstring else None\n\n        return cls(\n            name,\n            cls.check_is_private(subroutine),\n            name.startswith(\"__\"),\n            cls.get_source(subroutine),\n            docstring,\n            Deprecated.get_tags(subroutine),\n            Example.get_tags(subroutine),\n            Link.get_tags(subroutine),\n            Note.get_tags(subroutine),\n            is_declared,\n            signature,\n            [\n                Parameter.from_parameter(\n                    signature.parameters[parameter], docstring.parameters if docstring else []\n                ) for parameter in signature.parameters if parameter is not None\n            ],\n            isgeneratorfunction(subroutine) or isasyncgenfunction(subroutine),\n            (\n                isasyncgenfunction(subroutine) or\n                iscoroutinefunction(subroutine) or\n                (\n                    any(tag.is_async for tag in ContextManager.get_tags(subroutine))\n                    if ContextManager.is_tagged(subroutine) else False\n                )\n            ),\n            is_abstract,\n            name == \"<lambda>\",\n            ContextManager.is_tagged(subroutine)\n        )\n",
                                                        "signature": "(subroutine: 'FunctionType | type(object.__init__)', is_declared: 'bool', is_abstract: 'bool' = False) -> 'Subroutine'",
                                                        "parameters": [
                                                            {
                                                                "component": "Parameter",
                                                                "meta": {
                                                                    "name": "subroutine",
                                                                    "description": "The inspected subroutine",
                                                                    "annotation": "FunctionType | type(object.__init__)",
                                                                    "default": null,
                                                                    "isOptional": false
                                                                },
                                                                "children": {}
                                                            },
                                                            {
                                                                "component": "Parameter",
                                                                "meta": {
                                                                    "name": "is_declared",
                                                                    "description": "Whether the subroutine has been previously declared or not",
                                                                    "annotation": "bool",
                                                                    "default": null,
                                                                    "isOptional": false
                                                                },
                                                                "children": {}
                                                            },
                                                            {
                                                                "component": "Parameter",
                                                                "meta": {
                                                                    "name": "is_abstract",
                                                                    "description": "Whether this subroutine is an abstract method or not",
                                                                    "annotation": "bool",
                                                                    "default": "False",
                                                                    "isOptional": true
                                                                },
                                                                "children": {}
                                                            }
                                                        ],
                                                        "raises": [],
                                                        "returns": [
                                                            {
                                                                "component": "SubroutineReturn",
                                                                "meta": {
                                                                    "description": "A corresponding instance of this class",
                                                                    "annotation": "Subroutine"
                                                                },
                                                                "children": {}
                                                            }
                                                        ],
                                                        "shortDescription": "Forms an instance of this class from a Python subroutine, as provided by the in-built inspect API.",
                                                        "longDescription": null,
                                                        "deprecations": [],
                                                        "examples": [],
                                                        "links": [],
                                                        "notes": [],
                                                        "isGenerator": false,
                                                        "isAsync": false,
                                                        "isAbstract": false,
                                                        "isLambda": false,
                                                        "isContextManager": false,
                                                        "searchTerms": "from_subroutine\nForms an instance of this class from a Python subroutine, as provided by the in-built inspect API.\nNone"
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Subroutine",
                                                    "meta": {
                                                        "searchCategory": "subroutine",
                                                        "name": "serialize",
                                                        "source": "    def serialize(self, child_filter: Callable[[Structure], bool] = lambda _: True) -> Serialized:\n        return Serialized(\n            \"Subroutine\",\n            {\n                \"searchCategory\": self.search_category,\n                \"name\": self.name,\n                \"source\": self.source,\n                \"signature\": str(self.signature),\n                \"parameters\": [\n                    parameter.serialize(child_filter=child_filter).to_json() for parameter in self.parameters\n                ],\n                \"raises\": [\n                    error.serialize(child_filter=child_filter).to_json() for error in self.docstring.raises\n                ] if self.docstring else [],\n                \"returns\": [\n                    return_.serialize(child_filter=child_filter).to_json() for return_ in self.docstring.returns\n                ] if self.docstring else [\n                    SubroutineReturn(\n                        \"No description...\", self.object_as_written(self.signature.return_annotation)\n                    ).serialize(child_filter=child_filter).to_json()\n                ],\n                \"shortDescription\": self.docstring.short_description if self.docstring else None,\n                \"longDescription\": self.docstring.long_description if self.docstring else None,\n                \"deprecations\": [deprecation.json_serialize() for deprecation in self.deprecations],\n                \"examples\": [example.json_serialize() for example in self.examples],\n                \"links\": [link.json_serialize() for link in self.links],\n                \"notes\": [note.json_serialize() for note in self.notes],\n                \"isGenerator\": self.is_generator,\n                \"isAsync\": self.is_async,\n                \"isAbstract\": self.is_abstract,\n                \"isLambda\": self.is_lambda,\n                \"isContextManager\": self.is_context_manager,\n                \"searchTerms\": self.search_terms\n            },\n            {}\n        )\n",
                                                        "signature": "(self, child_filter: 'Callable[[Structure], bool]' = <function Subroutine.<lambda> at 0x0000022DE2EA6CA0>) -> 'Serialized'",
                                                        "parameters": [
                                                            {
                                                                "component": "Parameter",
                                                                "meta": {
                                                                    "name": "self",
                                                                    "description": null,
                                                                    "annotation": null,
                                                                    "default": null,
                                                                    "isOptional": false
                                                                },
                                                                "children": {}
                                                            },
                                                            {
                                                                "component": "Parameter",
                                                                "meta": {
                                                                    "name": "child_filter",
                                                                    "description": "The filter method used to omit unwanted structures from the serializes project tree",
                                                                    "annotation": "Callable[[Structure], bool]",
                                                                    "default": "<function Subroutine.<lambda> at 0x0000022DE2EA6CA0>",
                                                                    "isOptional": true
                                                                },
                                                                "children": {}
                                                            }
                                                        ],
                                                        "raises": [],
                                                        "returns": [
                                                            {
                                                                "component": "SubroutineReturn",
                                                                "meta": {
                                                                    "description": "The serialized structure, in a compatible JSON format",
                                                                    "annotation": "Serialized"
                                                                },
                                                                "children": {}
                                                            }
                                                        ],
                                                        "shortDescription": "Serializes the structure into a Serialized object, so that it can be used in the website.",
                                                        "longDescription": "A Serialized object is a standardized format for serialization structures, with customizable filtering\noptions to omit certain structures from the project tree as desired,\nand a convenient method for conversion to JSON.",
                                                        "deprecations": [],
                                                        "examples": [],
                                                        "links": [],
                                                        "notes": [],
                                                        "isGenerator": false,
                                                        "isAsync": false,
                                                        "isAbstract": false,
                                                        "isLambda": false,
                                                        "isContextManager": false,
                                                        "searchTerms": "serialize\nSerializes the structure into a Serialized object, so that it can be used in the website.\nA Serialized object is a standardized format for serialization structures, with customizable filtering\noptions to omit certain structures from the project tree as desired,\nand a convenient method for conversion to JSON."
                                                    },
                                                    "children": {}
                                                }
                                            ]
                                        }
                                    }
                                ],
                                "Subroutines": []
                            }
                        },
                        {
                            "component": "Module",
                            "meta": {
                                "searchCategory": "module",
                                "name": "subroutine_return",
                                "source": "\"\"\"\nThe module containing the dataclass representing return (or yield) information from Python subroutines.\n\"\"\"\n\nfrom __future__ import annotations\nfrom dataclasses import dataclass\nfrom inspect import Signature\nfrom typing import Callable\nfrom docstring_parser import DocstringReturns\nfrom .serialized import Serialized\nfrom .structure import Structure\nfrom ..tags import Link\n\n\n@dataclass(frozen=True, slots=True)\nclass SubroutineReturn(Structure):\n    \"\"\"\n    The dataclass representing return (or yield) information from Python subroutines.\n    \"\"\"\n    description: str\n    annotation: str | None\n\n    @classmethod\n    @Link(\n        \"Docstring Parser API\", \"https://pypi.org/project/docstring-parser/\",\n        \"The API that provides the DocstringReturns objects this method uses.\"\n    )\n    def from_docstring_returns(cls, returns: DocstringReturns) -> SubroutineReturn:\n        \"\"\"\n        Forms an instance of this class from a DocstringReturns object.\n\n        This class method is used to form instances of this class from DocstringReturns objects,\n        as provided by the Docstring Parser API.\n\n        :param returns: The object to form a new object from\n        :return: A corresponding instance of this class\n        \"\"\"\n        return cls(\n            returns.description,\n            returns.type_name\n        )\n\n    def patch_annotation(self, annotation: str) -> SubroutineReturn:\n        \"\"\"\n        Overwrites the existing annotation of this object with a new one\n\n        An internal utility method to overwrite the existing annotation attribute\n        of this object with a new one, bypassing this class' frozen nature.\n\n        :param annotation: The new replacement annotation\n        :return: The modified instance of this class\n        \"\"\"\n        if annotation != \"\":\n            object.__setattr__(self, \"annotation\", annotation)\n        return self\n\n    def serialize(self, child_filter: Callable[[Structure], bool] = lambda _: True) -> Serialized:\n        return Serialized(\n            \"SubroutineReturn\",\n            {\n                \"description\": self.description,\n                \"annotation\": self.annotation\n            },\n            {}\n        )\n\n    @staticmethod\n    def get_annotation(annotation: object) -> str | None:\n        \"\"\"\n        Writes a given annotation in a more easily readable format.\n\n        :param annotation: The given annotation\n        :return: A readable string representation of the annotation\n        :rtype: str\n        :return: If no annotation exists on the corresponding structure\n        :rtype: None\n        \"\"\"\n        if annotation in (Signature.empty, \"_empty\"):\n            return\n        return annotation.__name__ if isinstance(annotation, type) else str(annotation)\n",
                                "shortDescription": "The module containing the dataclass representing return (or yield) information from Python subroutines.",
                                "longDescription": null,
                                "deprecations": [],
                                "examples": [],
                                "links": [],
                                "notes": [],
                                "searchTerms": "subroutine_return\nThe module containing the dataclass representing return (or yield) information from Python subroutines.\nNone",
                                "globalVariables": []
                            },
                            "children": {
                                "Classes": [
                                    {
                                        "component": "Class",
                                        "meta": {
                                            "searchCategory": "class",
                                            "name": "SubroutineReturn",
                                            "source": "@dataclass(frozen=True, slots=True)\nclass SubroutineReturn(Structure):\n    \"\"\"\n    The dataclass representing return (or yield) information from Python subroutines.\n    \"\"\"\n    description: str\n    annotation: str | None\n\n    @classmethod\n    @Link(\n        \"Docstring Parser API\", \"https://pypi.org/project/docstring-parser/\",\n        \"The API that provides the DocstringReturns objects this method uses.\"\n    )\n    def from_docstring_returns(cls, returns: DocstringReturns) -> SubroutineReturn:\n        \"\"\"\n        Forms an instance of this class from a DocstringReturns object.\n\n        This class method is used to form instances of this class from DocstringReturns objects,\n        as provided by the Docstring Parser API.\n\n        :param returns: The object to form a new object from\n        :return: A corresponding instance of this class\n        \"\"\"\n        return cls(\n            returns.description,\n            returns.type_name\n        )\n\n    def patch_annotation(self, annotation: str) -> SubroutineReturn:\n        \"\"\"\n        Overwrites the existing annotation of this object with a new one\n\n        An internal utility method to overwrite the existing annotation attribute\n        of this object with a new one, bypassing this class' frozen nature.\n\n        :param annotation: The new replacement annotation\n        :return: The modified instance of this class\n        \"\"\"\n        if annotation != \"\":\n            object.__setattr__(self, \"annotation\", annotation)\n        return self\n\n    def serialize(self, child_filter: Callable[[Structure], bool] = lambda _: True) -> Serialized:\n        return Serialized(\n            \"SubroutineReturn\",\n            {\n                \"description\": self.description,\n                \"annotation\": self.annotation\n            },\n            {}\n        )\n\n    @staticmethod\n    def get_annotation(annotation: object) -> str | None:\n        \"\"\"\n        Writes a given annotation in a more easily readable format.\n\n        :param annotation: The given annotation\n        :return: A readable string representation of the annotation\n        :rtype: str\n        :return: If no annotation exists on the corresponding structure\n        :rtype: None\n        \"\"\"\n        if annotation in (Signature.empty, \"_empty\"):\n            return\n        return annotation.__name__ if isinstance(annotation, type) else str(annotation)\n",
                                            "signature": "(description: 'str', annotation: 'str | None') -> None",
                                            "parameters": [
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "self",
                                                        "description": null,
                                                        "annotation": null,
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "description",
                                                        "description": null,
                                                        "annotation": "str",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "annotation",
                                                        "description": null,
                                                        "annotation": "str | None",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                }
                                            ],
                                            "shortDescription": "The dataclass representing return (or yield) information from Python subroutines.",
                                            "longDescription": null,
                                            "deprecations": [],
                                            "examples": [],
                                            "links": [],
                                            "notes": [],
                                            "isAbstract": false,
                                            "searchTerms": "SubroutineReturn\nThe dataclass representing return (or yield) information from Python subroutines.\nNone",
                                            "classVariables": []
                                        },
                                        "children": {
                                            "Methods": [
                                                {
                                                    "component": "Subroutine",
                                                    "meta": {
                                                        "searchCategory": "subroutine",
                                                        "name": "from_docstring_returns",
                                                        "source": "    @classmethod\n    @Link(\n        \"Docstring Parser API\", \"https://pypi.org/project/docstring-parser/\",\n        \"The API that provides the DocstringReturns objects this method uses.\"\n    )\n    def from_docstring_returns(cls, returns: DocstringReturns) -> SubroutineReturn:\n        \"\"\"\n        Forms an instance of this class from a DocstringReturns object.\n\n        This class method is used to form instances of this class from DocstringReturns objects,\n        as provided by the Docstring Parser API.\n\n        :param returns: The object to form a new object from\n        :return: A corresponding instance of this class\n        \"\"\"\n        return cls(\n            returns.description,\n            returns.type_name\n        )\n",
                                                        "signature": "(returns: 'DocstringReturns') -> 'SubroutineReturn'",
                                                        "parameters": [
                                                            {
                                                                "component": "Parameter",
                                                                "meta": {
                                                                    "name": "returns",
                                                                    "description": "The object to form a new object from",
                                                                    "annotation": "DocstringReturns",
                                                                    "default": null,
                                                                    "isOptional": false
                                                                },
                                                                "children": {}
                                                            }
                                                        ],
                                                        "raises": [],
                                                        "returns": [
                                                            {
                                                                "component": "SubroutineReturn",
                                                                "meta": {
                                                                    "description": "A corresponding instance of this class",
                                                                    "annotation": "SubroutineReturn"
                                                                },
                                                                "children": {}
                                                            }
                                                        ],
                                                        "shortDescription": "Forms an instance of this class from a DocstringReturns object.",
                                                        "longDescription": "This class method is used to form instances of this class from DocstringReturns objects,\nas provided by the Docstring Parser API.",
                                                        "deprecations": [],
                                                        "examples": [],
                                                        "links": [
                                                            {
                                                                "title": "Docstring Parser API",
                                                                "href": "https://pypi.org/project/docstring-parser/",
                                                                "description": "The API that provides the DocstringReturns objects this method uses."
                                                            }
                                                        ],
                                                        "notes": [],
                                                        "isGenerator": false,
                                                        "isAsync": false,
                                                        "isAbstract": false,
                                                        "isLambda": false,
                                                        "isContextManager": false,
                                                        "searchTerms": "from_docstring_returns\nForms an instance of this class from a DocstringReturns object.\nThis class method is used to form instances of this class from DocstringReturns objects,\nas provided by the Docstring Parser API."
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Subroutine",
                                                    "meta": {
                                                        "searchCategory": "subroutine",
                                                        "name": "patch_annotation",
                                                        "source": "    def patch_annotation(self, annotation: str) -> SubroutineReturn:\n        \"\"\"\n        Overwrites the existing annotation of this object with a new one\n\n        An internal utility method to overwrite the existing annotation attribute\n        of this object with a new one, bypassing this class' frozen nature.\n\n        :param annotation: The new replacement annotation\n        :return: The modified instance of this class\n        \"\"\"\n        if annotation != \"\":\n            object.__setattr__(self, \"annotation\", annotation)\n        return self\n",
                                                        "signature": "(self, annotation: 'str') -> 'SubroutineReturn'",
                                                        "parameters": [
                                                            {
                                                                "component": "Parameter",
                                                                "meta": {
                                                                    "name": "self",
                                                                    "description": null,
                                                                    "annotation": null,
                                                                    "default": null,
                                                                    "isOptional": false
                                                                },
                                                                "children": {}
                                                            },
                                                            {
                                                                "component": "Parameter",
                                                                "meta": {
                                                                    "name": "annotation",
                                                                    "description": "The new replacement annotation",
                                                                    "annotation": "str",
                                                                    "default": null,
                                                                    "isOptional": false
                                                                },
                                                                "children": {}
                                                            }
                                                        ],
                                                        "raises": [],
                                                        "returns": [
                                                            {
                                                                "component": "SubroutineReturn",
                                                                "meta": {
                                                                    "description": "The modified instance of this class",
                                                                    "annotation": "SubroutineReturn"
                                                                },
                                                                "children": {}
                                                            }
                                                        ],
                                                        "shortDescription": "Overwrites the existing annotation of this object with a new one",
                                                        "longDescription": "An internal utility method to overwrite the existing annotation attribute\nof this object with a new one, bypassing this class' frozen nature.",
                                                        "deprecations": [],
                                                        "examples": [],
                                                        "links": [],
                                                        "notes": [],
                                                        "isGenerator": false,
                                                        "isAsync": false,
                                                        "isAbstract": false,
                                                        "isLambda": false,
                                                        "isContextManager": false,
                                                        "searchTerms": "patch_annotation\nOverwrites the existing annotation of this object with a new one\nAn internal utility method to overwrite the existing annotation attribute\nof this object with a new one, bypassing this class' frozen nature."
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Subroutine",
                                                    "meta": {
                                                        "searchCategory": "subroutine",
                                                        "name": "serialize",
                                                        "source": "    def serialize(self, child_filter: Callable[[Structure], bool] = lambda _: True) -> Serialized:\n        return Serialized(\n            \"SubroutineReturn\",\n            {\n                \"description\": self.description,\n                \"annotation\": self.annotation\n            },\n            {}\n        )\n",
                                                        "signature": "(self, child_filter: 'Callable[[Structure], bool]' = <function SubroutineReturn.<lambda> at 0x0000022DE2EA42C0>) -> 'Serialized'",
                                                        "parameters": [
                                                            {
                                                                "component": "Parameter",
                                                                "meta": {
                                                                    "name": "self",
                                                                    "description": null,
                                                                    "annotation": null,
                                                                    "default": null,
                                                                    "isOptional": false
                                                                },
                                                                "children": {}
                                                            },
                                                            {
                                                                "component": "Parameter",
                                                                "meta": {
                                                                    "name": "child_filter",
                                                                    "description": "The filter method used to omit unwanted structures from the serializes project tree",
                                                                    "annotation": "Callable[[Structure], bool]",
                                                                    "default": "<function SubroutineReturn.<lambda> at 0x0000022DE2EA42C0>",
                                                                    "isOptional": true
                                                                },
                                                                "children": {}
                                                            }
                                                        ],
                                                        "raises": [],
                                                        "returns": [
                                                            {
                                                                "component": "SubroutineReturn",
                                                                "meta": {
                                                                    "description": "The serialized structure, in a compatible JSON format",
                                                                    "annotation": "Serialized"
                                                                },
                                                                "children": {}
                                                            }
                                                        ],
                                                        "shortDescription": "Serializes the structure into a Serialized object, so that it can be used in the website.",
                                                        "longDescription": "A Serialized object is a standardized format for serialization structures, with customizable filtering\noptions to omit certain structures from the project tree as desired,\nand a convenient method for conversion to JSON.",
                                                        "deprecations": [],
                                                        "examples": [],
                                                        "links": [],
                                                        "notes": [],
                                                        "isGenerator": false,
                                                        "isAsync": false,
                                                        "isAbstract": false,
                                                        "isLambda": false,
                                                        "isContextManager": false,
                                                        "searchTerms": "serialize\nSerializes the structure into a Serialized object, so that it can be used in the website.\nA Serialized object is a standardized format for serialization structures, with customizable filtering\noptions to omit certain structures from the project tree as desired,\nand a convenient method for conversion to JSON."
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Subroutine",
                                                    "meta": {
                                                        "searchCategory": "subroutine",
                                                        "name": "get_annotation",
                                                        "source": "    @staticmethod\n    def get_annotation(annotation: object) -> str | None:\n        \"\"\"\n        Writes a given annotation in a more easily readable format.\n\n        :param annotation: The given annotation\n        :return: A readable string representation of the annotation\n        :rtype: str\n        :return: If no annotation exists on the corresponding structure\n        :rtype: None\n        \"\"\"\n        if annotation in (Signature.empty, \"_empty\"):\n            return\n        return annotation.__name__ if isinstance(annotation, type) else str(annotation)\n",
                                                        "signature": "(annotation: 'object') -> 'str | None'",
                                                        "parameters": [
                                                            {
                                                                "component": "Parameter",
                                                                "meta": {
                                                                    "name": "annotation",
                                                                    "description": "The given annotation",
                                                                    "annotation": "object",
                                                                    "default": null,
                                                                    "isOptional": false
                                                                },
                                                                "children": {}
                                                            }
                                                        ],
                                                        "raises": [],
                                                        "returns": [
                                                            {
                                                                "component": "SubroutineReturn",
                                                                "meta": {
                                                                    "description": "A readable string representation of the annotation",
                                                                    "annotation": "str | None"
                                                                },
                                                                "children": {}
                                                            },
                                                            {
                                                                "component": "SubroutineReturn",
                                                                "meta": {
                                                                    "description": "If no annotation exists on the corresponding structure",
                                                                    "annotation": "str | None"
                                                                },
                                                                "children": {}
                                                            }
                                                        ],
                                                        "shortDescription": "Writes a given annotation in a more easily readable format.",
                                                        "longDescription": null,
                                                        "deprecations": [],
                                                        "examples": [],
                                                        "links": [],
                                                        "notes": [],
                                                        "isGenerator": false,
                                                        "isAsync": false,
                                                        "isAbstract": false,
                                                        "isLambda": false,
                                                        "isContextManager": false,
                                                        "searchTerms": "get_annotation\nWrites a given annotation in a more easily readable format.\nNone"
                                                    },
                                                    "children": {}
                                                }
                                            ]
                                        }
                                    }
                                ],
                                "Subroutines": []
                            }
                        },
                        {
                            "component": "Module",
                            "meta": {
                                "searchCategory": "module",
                                "name": "variable",
                                "source": "\"\"\"\nThe module containing the dataclass representing any public variables, such as class variables.\n\"\"\"\n\nfrom __future__ import annotations\nfrom dataclasses import dataclass\nfrom types import ModuleType\nfrom typing import Iterable, Callable\nfrom inspect import Signature, getmembers\nfrom .serialized import Serialized\nfrom .structure import Structure\n\n\n@dataclass(frozen=True, slots=True)\nclass Variable(Structure):\n    \"\"\"\n    The dataclass representing any public variables, such as class variables.\n    \"\"\"\n    name: str\n    annotation: str | None\n    value: str\n\n    @classmethod\n    def many_from_scope(cls, scope: object | ModuleType, module_name: str,\n                        variable_filter: Callable[[object], bool] = lambda _: True) -> Iterable[Variable]:\n        \"\"\"\n        Forms an instance of this class from a valid scope, such as a class or module.\n\n        :param scope: The scope to retrieve variables from\n        :param module_name: The name of the module in which the variable is located\n        :param variable_filter: A filter function to narrow the selection of yielded variables\n        :return: Each discovered variable from the given scope\n        \"\"\"\n        def is_valid(variable: object) -> bool:\n            return (\n                cls.defined_within(variable, module_name) and variable_filter(variable)\n                and not cls.check_is_private(variable)\n            )\n\n        variable_information = getmembers(scope)\n        try:\n            annotations_ = vars(scope).__annotations__\n        except AttributeError:\n            annotations_ = {}\n        variables = {name: variable for name, variable in variable_information if is_valid(variable)}\n        for variable_name in variables:\n            yield cls(\n                variable_name,\n                cls.object_as_written(annotations_.get(variable_name, Signature.empty)),\n                cls.object_as_written(variables.get(variable_name, Signature.empty))\n            )\n\n    def serialize(self, child_filter: Callable[[Structure], bool] = lambda _: True) -> Serialized:\n        return Serialized(\n            \"Variable\",\n            {\n                \"name\": self.name,\n                \"annotation\": self.annotation,\n                \"value\": self.value\n            },\n            {}\n        )\n",
                                "shortDescription": "The module containing the dataclass representing any public variables, such as class variables.",
                                "longDescription": null,
                                "deprecations": [],
                                "examples": [],
                                "links": [],
                                "notes": [],
                                "searchTerms": "variable\nThe module containing the dataclass representing any public variables, such as class variables.\nNone",
                                "globalVariables": []
                            },
                            "children": {
                                "Classes": [
                                    {
                                        "component": "Class",
                                        "meta": {
                                            "searchCategory": "class",
                                            "name": "Variable",
                                            "source": "@dataclass(frozen=True, slots=True)\nclass Variable(Structure):\n    \"\"\"\n    The dataclass representing any public variables, such as class variables.\n    \"\"\"\n    name: str\n    annotation: str | None\n    value: str\n\n    @classmethod\n    def many_from_scope(cls, scope: object | ModuleType, module_name: str,\n                        variable_filter: Callable[[object], bool] = lambda _: True) -> Iterable[Variable]:\n        \"\"\"\n        Forms an instance of this class from a valid scope, such as a class or module.\n\n        :param scope: The scope to retrieve variables from\n        :param module_name: The name of the module in which the variable is located\n        :param variable_filter: A filter function to narrow the selection of yielded variables\n        :return: Each discovered variable from the given scope\n        \"\"\"\n        def is_valid(variable: object) -> bool:\n            return (\n                cls.defined_within(variable, module_name) and variable_filter(variable)\n                and not cls.check_is_private(variable)\n            )\n\n        variable_information = getmembers(scope)\n        try:\n            annotations_ = vars(scope).__annotations__\n        except AttributeError:\n            annotations_ = {}\n        variables = {name: variable for name, variable in variable_information if is_valid(variable)}\n        for variable_name in variables:\n            yield cls(\n                variable_name,\n                cls.object_as_written(annotations_.get(variable_name, Signature.empty)),\n                cls.object_as_written(variables.get(variable_name, Signature.empty))\n            )\n\n    def serialize(self, child_filter: Callable[[Structure], bool] = lambda _: True) -> Serialized:\n        return Serialized(\n            \"Variable\",\n            {\n                \"name\": self.name,\n                \"annotation\": self.annotation,\n                \"value\": self.value\n            },\n            {}\n        )\n",
                                            "signature": "(name: 'str', annotation: 'str | None', value: 'str') -> None",
                                            "parameters": [
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "self",
                                                        "description": null,
                                                        "annotation": null,
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "name",
                                                        "description": null,
                                                        "annotation": "str",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "annotation",
                                                        "description": null,
                                                        "annotation": "str | None",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "value",
                                                        "description": null,
                                                        "annotation": "str",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                }
                                            ],
                                            "shortDescription": "The dataclass representing any public variables, such as class variables.",
                                            "longDescription": null,
                                            "deprecations": [],
                                            "examples": [],
                                            "links": [],
                                            "notes": [],
                                            "isAbstract": false,
                                            "searchTerms": "Variable\nThe dataclass representing any public variables, such as class variables.\nNone",
                                            "classVariables": []
                                        },
                                        "children": {
                                            "Methods": [
                                                {
                                                    "component": "Subroutine",
                                                    "meta": {
                                                        "searchCategory": "subroutine",
                                                        "name": "many_from_scope",
                                                        "source": "    @classmethod\n    def many_from_scope(cls, scope: object | ModuleType, module_name: str,\n                        variable_filter: Callable[[object], bool] = lambda _: True) -> Iterable[Variable]:\n        \"\"\"\n        Forms an instance of this class from a valid scope, such as a class or module.\n\n        :param scope: The scope to retrieve variables from\n        :param module_name: The name of the module in which the variable is located\n        :param variable_filter: A filter function to narrow the selection of yielded variables\n        :return: Each discovered variable from the given scope\n        \"\"\"\n        def is_valid(variable: object) -> bool:\n            return (\n                cls.defined_within(variable, module_name) and variable_filter(variable)\n                and not cls.check_is_private(variable)\n            )\n\n        variable_information = getmembers(scope)\n        try:\n            annotations_ = vars(scope).__annotations__\n        except AttributeError:\n            annotations_ = {}\n        variables = {name: variable for name, variable in variable_information if is_valid(variable)}\n        for variable_name in variables:\n            yield cls(\n                variable_name,\n                cls.object_as_written(annotations_.get(variable_name, Signature.empty)),\n                cls.object_as_written(variables.get(variable_name, Signature.empty))\n            )\n",
                                                        "signature": "(scope: 'object | ModuleType', module_name: 'str', variable_filter: 'Callable[[object], bool]' = <function Variable.<lambda> at 0x0000022DE2EA7560>) -> 'Iterable[Variable]'",
                                                        "parameters": [
                                                            {
                                                                "component": "Parameter",
                                                                "meta": {
                                                                    "name": "scope",
                                                                    "description": "The scope to retrieve variables from",
                                                                    "annotation": "object | ModuleType",
                                                                    "default": null,
                                                                    "isOptional": false
                                                                },
                                                                "children": {}
                                                            },
                                                            {
                                                                "component": "Parameter",
                                                                "meta": {
                                                                    "name": "module_name",
                                                                    "description": "The name of the module in which the variable is located",
                                                                    "annotation": "str",
                                                                    "default": null,
                                                                    "isOptional": false
                                                                },
                                                                "children": {}
                                                            },
                                                            {
                                                                "component": "Parameter",
                                                                "meta": {
                                                                    "name": "variable_filter",
                                                                    "description": "A filter function to narrow the selection of yielded variables",
                                                                    "annotation": "Callable[[object], bool]",
                                                                    "default": "<function Variable.<lambda> at 0x0000022DE2EA7560>",
                                                                    "isOptional": true
                                                                },
                                                                "children": {}
                                                            }
                                                        ],
                                                        "raises": [],
                                                        "returns": [
                                                            {
                                                                "component": "SubroutineReturn",
                                                                "meta": {
                                                                    "description": "Each discovered variable from the given scope",
                                                                    "annotation": "Iterable[Variable]"
                                                                },
                                                                "children": {}
                                                            }
                                                        ],
                                                        "shortDescription": "Forms an instance of this class from a valid scope, such as a class or module.",
                                                        "longDescription": null,
                                                        "deprecations": [],
                                                        "examples": [],
                                                        "links": [],
                                                        "notes": [],
                                                        "isGenerator": true,
                                                        "isAsync": false,
                                                        "isAbstract": false,
                                                        "isLambda": false,
                                                        "isContextManager": false,
                                                        "searchTerms": "many_from_scope\nForms an instance of this class from a valid scope, such as a class or module.\nNone"
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Subroutine",
                                                    "meta": {
                                                        "searchCategory": "subroutine",
                                                        "name": "serialize",
                                                        "source": "    def serialize(self, child_filter: Callable[[Structure], bool] = lambda _: True) -> Serialized:\n        return Serialized(\n            \"Variable\",\n            {\n                \"name\": self.name,\n                \"annotation\": self.annotation,\n                \"value\": self.value\n            },\n            {}\n        )\n",
                                                        "signature": "(self, child_filter: 'Callable[[Structure], bool]' = <function Variable.<lambda> at 0x0000022DE2EA76A0>) -> 'Serialized'",
                                                        "parameters": [
                                                            {
                                                                "component": "Parameter",
                                                                "meta": {
                                                                    "name": "self",
                                                                    "description": null,
                                                                    "annotation": null,
                                                                    "default": null,
                                                                    "isOptional": false
                                                                },
                                                                "children": {}
                                                            },
                                                            {
                                                                "component": "Parameter",
                                                                "meta": {
                                                                    "name": "child_filter",
                                                                    "description": "The filter method used to omit unwanted structures from the serializes project tree",
                                                                    "annotation": "Callable[[Structure], bool]",
                                                                    "default": "<function Variable.<lambda> at 0x0000022DE2EA76A0>",
                                                                    "isOptional": true
                                                                },
                                                                "children": {}
                                                            }
                                                        ],
                                                        "raises": [],
                                                        "returns": [
                                                            {
                                                                "component": "SubroutineReturn",
                                                                "meta": {
                                                                    "description": "The serialized structure, in a compatible JSON format",
                                                                    "annotation": "Serialized"
                                                                },
                                                                "children": {}
                                                            }
                                                        ],
                                                        "shortDescription": "Serializes the structure into a Serialized object, so that it can be used in the website.",
                                                        "longDescription": "A Serialized object is a standardized format for serialization structures, with customizable filtering\noptions to omit certain structures from the project tree as desired,\nand a convenient method for conversion to JSON.",
                                                        "deprecations": [],
                                                        "examples": [],
                                                        "links": [],
                                                        "notes": [],
                                                        "isGenerator": false,
                                                        "isAsync": false,
                                                        "isAbstract": false,
                                                        "isLambda": false,
                                                        "isContextManager": false,
                                                        "searchTerms": "serialize\nSerializes the structure into a Serialized object, so that it can be used in the website.\nA Serialized object is a standardized format for serialization structures, with customizable filtering\noptions to omit certain structures from the project tree as desired,\nand a convenient method for conversion to JSON."
                                                    },
                                                    "children": {}
                                                }
                                            ]
                                        }
                                    }
                                ],
                                "Subroutines": []
                            }
                        }
                    ]
                }
            },
            {
                "component": "Package",
                "meta": {
                    "searchCategory": "package",
                    "name": "tags",
                    "source": "\"\"\"\nExposed API utilities for detailed code beyond the capability of docstrings.\n\nThis package includes the available tags that users can interact with, allowing for further information\nto be passed to the program about different structures, beyond the capability of docstrings.\nThis includes functionality such as deprecation notices.\n\"\"\"\n\n\nfrom .tags import ContextManager, Deprecated, Private, Example, Link, Note\nfrom .tag import Tag\n",
                    "shortDescription": "Exposed API utilities for detailed code beyond the capability of docstrings.",
                    "longDescription": "This package includes the available tags that users can interact with, allowing for further information\nto be passed to the program about different structures, beyond the capability of docstrings.\nThis includes functionality such as deprecation notices.",
                    "deprecations": [],
                    "examples": [],
                    "links": [],
                    "notes": [],
                    "searchTerms": "tags\nExposed API utilities for detailed code beyond the capability of docstrings.\nThis package includes the available tags that users can interact with, allowing for further information\nto be passed to the program about different structures, beyond the capability of docstrings.\nThis includes functionality such as deprecation notices."
                },
                "children": {
                    "Sub-Packages": [],
                    "Modules": [
                        {
                            "component": "Module",
                            "meta": {
                                "searchCategory": "module",
                                "name": "data_tag",
                                "source": "\"\"\"\nA module containing internal details for how data tags are structured.\n\"\"\"\n\nfrom dataclasses import dataclass\nfrom abc import ABC, abstractmethod\nfrom .tag import Tag\n\n\n@dataclass(frozen=True, slots=True)\nclass DataTag(Tag, ABC):\n    \"\"\"\n    A particular type of tag that requires serialization.\n\n    This is used when the tag holds valuable information that is required in the website.\n    \"\"\"\n\n    @abstractmethod\n    def json_serialize(self) -> dict[str, object]:\n        \"\"\"\n        Serialize the tag, so that it can be used in the website.\n\n        This method must be implemented by children tags, and is used to\n        serialize the information provided by the tag into a JSON compatible\n        dictionary, so that it can be used appropriately in the documentation website.\n\n        :return: The serialized information as a JSON compatible dictionary\n        \"\"\"\n        ...\n",
                                "shortDescription": "A module containing internal details for how data tags are structured.",
                                "longDescription": null,
                                "deprecations": [],
                                "examples": [],
                                "links": [],
                                "notes": [],
                                "searchTerms": "data_tag\nA module containing internal details for how data tags are structured.\nNone",
                                "globalVariables": []
                            },
                            "children": {
                                "Classes": [
                                    {
                                        "component": "Class",
                                        "meta": {
                                            "searchCategory": "class",
                                            "name": "DataTag",
                                            "source": "@dataclass(frozen=True, slots=True)\nclass DataTag(Tag, ABC):\n    \"\"\"\n    A particular type of tag that requires serialization.\n\n    This is used when the tag holds valuable information that is required in the website.\n    \"\"\"\n\n    @abstractmethod\n    def json_serialize(self) -> dict[str, object]:\n        \"\"\"\n        Serialize the tag, so that it can be used in the website.\n\n        This method must be implemented by children tags, and is used to\n        serialize the information provided by the tag into a JSON compatible\n        dictionary, so that it can be used appropriately in the documentation website.\n\n        :return: The serialized information as a JSON compatible dictionary\n        \"\"\"\n        ...\n",
                                            "signature": "() -> None",
                                            "parameters": [
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "self",
                                                        "description": null,
                                                        "annotation": null,
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                }
                                            ],
                                            "shortDescription": "A particular type of tag that requires serialization.",
                                            "longDescription": "This is used when the tag holds valuable information that is required in the website.",
                                            "deprecations": [],
                                            "examples": [],
                                            "links": [],
                                            "notes": [],
                                            "isAbstract": true,
                                            "searchTerms": "DataTag\nA particular type of tag that requires serialization.\nThis is used when the tag holds valuable information that is required in the website.",
                                            "classVariables": []
                                        },
                                        "children": {
                                            "Methods": [
                                                {
                                                    "component": "Subroutine",
                                                    "meta": {
                                                        "searchCategory": "subroutine",
                                                        "name": "json_serialize",
                                                        "source": "    @abstractmethod\n    def json_serialize(self) -> dict[str, object]:\n        \"\"\"\n        Serialize the tag, so that it can be used in the website.\n\n        This method must be implemented by children tags, and is used to\n        serialize the information provided by the tag into a JSON compatible\n        dictionary, so that it can be used appropriately in the documentation website.\n\n        :return: The serialized information as a JSON compatible dictionary\n        \"\"\"\n        ...\n",
                                                        "signature": "(self) -> dict[str, object]",
                                                        "parameters": [
                                                            {
                                                                "component": "Parameter",
                                                                "meta": {
                                                                    "name": "self",
                                                                    "description": null,
                                                                    "annotation": null,
                                                                    "default": null,
                                                                    "isOptional": false
                                                                },
                                                                "children": {}
                                                            }
                                                        ],
                                                        "raises": [],
                                                        "returns": [
                                                            {
                                                                "component": "SubroutineReturn",
                                                                "meta": {
                                                                    "description": "The serialized information as a JSON compatible dictionary",
                                                                    "annotation": "dict[str, object]"
                                                                },
                                                                "children": {}
                                                            }
                                                        ],
                                                        "shortDescription": "Serialize the tag, so that it can be used in the website.",
                                                        "longDescription": "This method must be implemented by children tags, and is used to\nserialize the information provided by the tag into a JSON compatible\ndictionary, so that it can be used appropriately in the documentation website.",
                                                        "deprecations": [],
                                                        "examples": [],
                                                        "links": [],
                                                        "notes": [],
                                                        "isGenerator": false,
                                                        "isAsync": false,
                                                        "isAbstract": true,
                                                        "isLambda": false,
                                                        "isContextManager": false,
                                                        "searchTerms": "json_serialize\nSerialize the tag, so that it can be used in the website.\nThis method must be implemented by children tags, and is used to\nserialize the information provided by the tag into a JSON compatible\ndictionary, so that it can be used appropriately in the documentation website."
                                                    },
                                                    "children": {}
                                                }
                                            ]
                                        }
                                    }
                                ],
                                "Subroutines": []
                            }
                        },
                        {
                            "component": "Module",
                            "meta": {
                                "searchCategory": "module",
                                "name": "tag",
                                "source": "\"\"\"\nA module containing internal details of how the tag API is structured.\n\nThis module contains an abstract base class, which dictates how each tag\nmust be interfaced with, and how they relay their information to the parser\nto be placed in the generated documentation website.\n\"\"\"\n\nfrom __future__ import annotations\nfrom dataclasses import dataclass\nfrom types import ModuleType\nfrom typing import Callable, TypeVar\nfrom abc import ABC\nfrom sys import modules\n\n\n@dataclass(frozen=True, slots=True)\nclass Tag(ABC):\n    \"\"\"\n    An ABC dictating how the tag API must be structured.\n\n    This dataclass provides a template for all public tags in the API,\n    ensuring that they are all interfaced with in the same way.\n    \"\"\"\n    @staticmethod\n    def get_all_tags(f: Callable | ModuleType) -> dict[str, list[Tag]]:\n        \"\"\"\n        Retrieves all the tags from a given structure, irrespective of type.\n\n        :param f: The given structure to retrieve from\n        :return: A mapping of tag names to a list of corresponding tags\n        \"\"\"\n        try:\n            # noinspection PyUnresolvedReferences\n            return f.__scandocs_tags__\n        except AttributeError:\n            return {}\n\n    @classmethod\n    def get_tags(cls: OwnTagT, f: Callable | ModuleType) -> list[OwnTagT]:\n        \"\"\"\n        Gets the tag of the specified type from a given structure.\n\n        Retrieves the first tag corresponding to the specified tag type from\n        the given structure, should it exist.\n\n        :param f: The given structure to retrieve from\n        :return: If a tag exists of the correct type, return it\n        \"\"\"\n        return cls.get_all_tags(f).get(cls.__name__, [])\n\n    def tag(self, f: Callable | ModuleType) -> Callable | ModuleType:\n        \"\"\"\n        Tags a structure with a reference to the specified tag.\n\n        This method can be used as a decorator to tag structures as desired\n        with a concise and readable syntax.\n\n        :param f: The structure to tag\n        :return: The given structure, with the given tag attached\n\n        \"\"\"\n        if hasattr(f, \"__scandocs_tags__\"):\n            if self.__class__.__name__ in f.__scandocs_tags__:\n                f.__scandocs_tags__[self.__class__.__name__].append(self)\n            else:\n                f.__scandocs_tags__[self.__class__.__name__] = [self]\n        else:\n            f.__scandocs_tags__ = {self.__class__.__name__: [self]}\n        return f\n\n    def __call__(self, f: Callable | ModuleType) -> Callable | ModuleType:\n        \"\"\"\n        Tags a structure with a reference to the specified tag.\n\n        This has the same functionality as calling the tag method, and serves only to simplify the API.\n\n        :param f: The structure to tag\n        :return: The given structure, with an attached tag\n        \"\"\"\n        return self.tag(f)\n\n    @classmethod\n    def is_tagged(cls, f: Callable | ModuleType) -> bool:\n        \"\"\"\n        A utility method to check if any tags of this type exist on a structure.\n\n        :param f: The structure which may have tags attached to it\n        :return: Whether the given structure has any tags of the correct type\n        \"\"\"\n        return any(isinstance(tag, cls) for tag_list in cls.get_all_tags(f).values() for tag in tag_list)\n\n    @staticmethod\n    def module_from_name(module_name: str) -> ModuleType | None:\n        return modules.get(module_name)\n\n\nOwnTagT = TypeVar(\"OwnTagT\", bound=Tag)\n",
                                "shortDescription": "A module containing internal details of how the tag API is structured.",
                                "longDescription": "This module contains an abstract base class, which dictates how each tag\nmust be interfaced with, and how they relay their information to the parser\nto be placed in the generated documentation website.",
                                "deprecations": [],
                                "examples": [],
                                "links": [],
                                "notes": [],
                                "searchTerms": "tag\nA module containing internal details of how the tag API is structured.\nThis module contains an abstract base class, which dictates how each tag\nmust be interfaced with, and how they relay their information to the parser\nto be placed in the generated documentation website.",
                                "globalVariables": [
                                    {
                                        "component": "Variable",
                                        "meta": {
                                            "name": "OwnTagT",
                                            "annotation": null,
                                            "value": "~OwnTagT"
                                        },
                                        "children": {}
                                    }
                                ]
                            },
                            "children": {
                                "Classes": [
                                    {
                                        "component": "Class",
                                        "meta": {
                                            "searchCategory": "class",
                                            "name": "Tag",
                                            "source": "@dataclass(frozen=True, slots=True)\nclass Tag(ABC):\n    \"\"\"\n    An ABC dictating how the tag API must be structured.\n\n    This dataclass provides a template for all public tags in the API,\n    ensuring that they are all interfaced with in the same way.\n    \"\"\"\n    @staticmethod\n    def get_all_tags(f: Callable | ModuleType) -> dict[str, list[Tag]]:\n        \"\"\"\n        Retrieves all the tags from a given structure, irrespective of type.\n\n        :param f: The given structure to retrieve from\n        :return: A mapping of tag names to a list of corresponding tags\n        \"\"\"\n        try:\n            # noinspection PyUnresolvedReferences\n            return f.__scandocs_tags__\n        except AttributeError:\n            return {}\n\n    @classmethod\n    def get_tags(cls: OwnTagT, f: Callable | ModuleType) -> list[OwnTagT]:\n        \"\"\"\n        Gets the tag of the specified type from a given structure.\n\n        Retrieves the first tag corresponding to the specified tag type from\n        the given structure, should it exist.\n\n        :param f: The given structure to retrieve from\n        :return: If a tag exists of the correct type, return it\n        \"\"\"\n        return cls.get_all_tags(f).get(cls.__name__, [])\n\n    def tag(self, f: Callable | ModuleType) -> Callable | ModuleType:\n        \"\"\"\n        Tags a structure with a reference to the specified tag.\n\n        This method can be used as a decorator to tag structures as desired\n        with a concise and readable syntax.\n\n        :param f: The structure to tag\n        :return: The given structure, with the given tag attached\n\n        \"\"\"\n        if hasattr(f, \"__scandocs_tags__\"):\n            if self.__class__.__name__ in f.__scandocs_tags__:\n                f.__scandocs_tags__[self.__class__.__name__].append(self)\n            else:\n                f.__scandocs_tags__[self.__class__.__name__] = [self]\n        else:\n            f.__scandocs_tags__ = {self.__class__.__name__: [self]}\n        return f\n\n    def __call__(self, f: Callable | ModuleType) -> Callable | ModuleType:\n        \"\"\"\n        Tags a structure with a reference to the specified tag.\n\n        This has the same functionality as calling the tag method, and serves only to simplify the API.\n\n        :param f: The structure to tag\n        :return: The given structure, with an attached tag\n        \"\"\"\n        return self.tag(f)\n\n    @classmethod\n    def is_tagged(cls, f: Callable | ModuleType) -> bool:\n        \"\"\"\n        A utility method to check if any tags of this type exist on a structure.\n\n        :param f: The structure which may have tags attached to it\n        :return: Whether the given structure has any tags of the correct type\n        \"\"\"\n        return any(isinstance(tag, cls) for tag_list in cls.get_all_tags(f).values() for tag in tag_list)\n\n    @staticmethod\n    def module_from_name(module_name: str) -> ModuleType | None:\n        return modules.get(module_name)\n",
                                            "signature": "() -> None",
                                            "parameters": [
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "self",
                                                        "description": null,
                                                        "annotation": null,
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                }
                                            ],
                                            "shortDescription": "An ABC dictating how the tag API must be structured.",
                                            "longDescription": "This dataclass provides a template for all public tags in the API,\nensuring that they are all interfaced with in the same way.",
                                            "deprecations": [],
                                            "examples": [],
                                            "links": [],
                                            "notes": [],
                                            "isAbstract": false,
                                            "searchTerms": "Tag\nAn ABC dictating how the tag API must be structured.\nThis dataclass provides a template for all public tags in the API,\nensuring that they are all interfaced with in the same way.",
                                            "classVariables": []
                                        },
                                        "children": {
                                            "Methods": [
                                                {
                                                    "component": "Subroutine",
                                                    "meta": {
                                                        "searchCategory": "subroutine",
                                                        "name": "get_all_tags",
                                                        "source": "    @staticmethod\n    def get_all_tags(f: Callable | ModuleType) -> dict[str, list[Tag]]:\n        \"\"\"\n        Retrieves all the tags from a given structure, irrespective of type.\n\n        :param f: The given structure to retrieve from\n        :return: A mapping of tag names to a list of corresponding tags\n        \"\"\"\n        try:\n            # noinspection PyUnresolvedReferences\n            return f.__scandocs_tags__\n        except AttributeError:\n            return {}\n",
                                                        "signature": "(f: 'Callable | ModuleType') -> 'dict[str, list[Tag]]'",
                                                        "parameters": [
                                                            {
                                                                "component": "Parameter",
                                                                "meta": {
                                                                    "name": "f",
                                                                    "description": "The given structure to retrieve from",
                                                                    "annotation": "Callable | ModuleType",
                                                                    "default": null,
                                                                    "isOptional": false
                                                                },
                                                                "children": {}
                                                            }
                                                        ],
                                                        "raises": [],
                                                        "returns": [
                                                            {
                                                                "component": "SubroutineReturn",
                                                                "meta": {
                                                                    "description": "A mapping of tag names to a list of corresponding tags",
                                                                    "annotation": "dict[str, list[Tag]]"
                                                                },
                                                                "children": {}
                                                            }
                                                        ],
                                                        "shortDescription": "Retrieves all the tags from a given structure, irrespective of type.",
                                                        "longDescription": null,
                                                        "deprecations": [],
                                                        "examples": [],
                                                        "links": [],
                                                        "notes": [],
                                                        "isGenerator": false,
                                                        "isAsync": false,
                                                        "isAbstract": false,
                                                        "isLambda": false,
                                                        "isContextManager": false,
                                                        "searchTerms": "get_all_tags\nRetrieves all the tags from a given structure, irrespective of type.\nNone"
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Subroutine",
                                                    "meta": {
                                                        "searchCategory": "subroutine",
                                                        "name": "get_tags",
                                                        "source": "    @classmethod\n    def get_tags(cls: OwnTagT, f: Callable | ModuleType) -> list[OwnTagT]:\n        \"\"\"\n        Gets the tag of the specified type from a given structure.\n\n        Retrieves the first tag corresponding to the specified tag type from\n        the given structure, should it exist.\n\n        :param f: The given structure to retrieve from\n        :return: If a tag exists of the correct type, return it\n        \"\"\"\n        return cls.get_all_tags(f).get(cls.__name__, [])\n",
                                                        "signature": "(f: 'Callable | ModuleType') -> 'list[OwnTagT]'",
                                                        "parameters": [
                                                            {
                                                                "component": "Parameter",
                                                                "meta": {
                                                                    "name": "f",
                                                                    "description": "The given structure to retrieve from",
                                                                    "annotation": "Callable | ModuleType",
                                                                    "default": null,
                                                                    "isOptional": false
                                                                },
                                                                "children": {}
                                                            }
                                                        ],
                                                        "raises": [],
                                                        "returns": [
                                                            {
                                                                "component": "SubroutineReturn",
                                                                "meta": {
                                                                    "description": "If a tag exists of the correct type, return it",
                                                                    "annotation": "list[OwnTagT]"
                                                                },
                                                                "children": {}
                                                            }
                                                        ],
                                                        "shortDescription": "Gets the tag of the specified type from a given structure.",
                                                        "longDescription": "Retrieves the first tag corresponding to the specified tag type from\nthe given structure, should it exist.",
                                                        "deprecations": [],
                                                        "examples": [],
                                                        "links": [],
                                                        "notes": [],
                                                        "isGenerator": false,
                                                        "isAsync": false,
                                                        "isAbstract": false,
                                                        "isLambda": false,
                                                        "isContextManager": false,
                                                        "searchTerms": "get_tags\nGets the tag of the specified type from a given structure.\nRetrieves the first tag corresponding to the specified tag type from\nthe given structure, should it exist."
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Subroutine",
                                                    "meta": {
                                                        "searchCategory": "subroutine",
                                                        "name": "tag",
                                                        "source": "    def tag(self, f: Callable | ModuleType) -> Callable | ModuleType:\n        \"\"\"\n        Tags a structure with a reference to the specified tag.\n\n        This method can be used as a decorator to tag structures as desired\n        with a concise and readable syntax.\n\n        :param f: The structure to tag\n        :return: The given structure, with the given tag attached\n\n        \"\"\"\n        if hasattr(f, \"__scandocs_tags__\"):\n            if self.__class__.__name__ in f.__scandocs_tags__:\n                f.__scandocs_tags__[self.__class__.__name__].append(self)\n            else:\n                f.__scandocs_tags__[self.__class__.__name__] = [self]\n        else:\n            f.__scandocs_tags__ = {self.__class__.__name__: [self]}\n        return f\n",
                                                        "signature": "(self, f: 'Callable | ModuleType') -> 'Callable | ModuleType'",
                                                        "parameters": [
                                                            {
                                                                "component": "Parameter",
                                                                "meta": {
                                                                    "name": "self",
                                                                    "description": null,
                                                                    "annotation": null,
                                                                    "default": null,
                                                                    "isOptional": false
                                                                },
                                                                "children": {}
                                                            },
                                                            {
                                                                "component": "Parameter",
                                                                "meta": {
                                                                    "name": "f",
                                                                    "description": "The structure to tag",
                                                                    "annotation": "Callable | ModuleType",
                                                                    "default": null,
                                                                    "isOptional": false
                                                                },
                                                                "children": {}
                                                            }
                                                        ],
                                                        "raises": [],
                                                        "returns": [
                                                            {
                                                                "component": "SubroutineReturn",
                                                                "meta": {
                                                                    "description": "The given structure, with the given tag attached",
                                                                    "annotation": "Callable | ModuleType"
                                                                },
                                                                "children": {}
                                                            }
                                                        ],
                                                        "shortDescription": "Tags a structure with a reference to the specified tag.",
                                                        "longDescription": "This method can be used as a decorator to tag structures as desired\nwith a concise and readable syntax.",
                                                        "deprecations": [],
                                                        "examples": [],
                                                        "links": [],
                                                        "notes": [],
                                                        "isGenerator": false,
                                                        "isAsync": false,
                                                        "isAbstract": false,
                                                        "isLambda": false,
                                                        "isContextManager": false,
                                                        "searchTerms": "tag\nTags a structure with a reference to the specified tag.\nThis method can be used as a decorator to tag structures as desired\nwith a concise and readable syntax."
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Subroutine",
                                                    "meta": {
                                                        "searchCategory": "subroutine",
                                                        "name": "is_tagged",
                                                        "source": "    @classmethod\n    def is_tagged(cls, f: Callable | ModuleType) -> bool:\n        \"\"\"\n        A utility method to check if any tags of this type exist on a structure.\n\n        :param f: The structure which may have tags attached to it\n        :return: Whether the given structure has any tags of the correct type\n        \"\"\"\n        return any(isinstance(tag, cls) for tag_list in cls.get_all_tags(f).values() for tag in tag_list)\n",
                                                        "signature": "(f: 'Callable | ModuleType') -> 'bool'",
                                                        "parameters": [
                                                            {
                                                                "component": "Parameter",
                                                                "meta": {
                                                                    "name": "f",
                                                                    "description": "The structure which may have tags attached to it",
                                                                    "annotation": "Callable | ModuleType",
                                                                    "default": null,
                                                                    "isOptional": false
                                                                },
                                                                "children": {}
                                                            }
                                                        ],
                                                        "raises": [],
                                                        "returns": [
                                                            {
                                                                "component": "SubroutineReturn",
                                                                "meta": {
                                                                    "description": "Whether the given structure has any tags of the correct type",
                                                                    "annotation": "bool"
                                                                },
                                                                "children": {}
                                                            }
                                                        ],
                                                        "shortDescription": "A utility method to check if any tags of this type exist on a structure.",
                                                        "longDescription": null,
                                                        "deprecations": [],
                                                        "examples": [],
                                                        "links": [],
                                                        "notes": [],
                                                        "isGenerator": false,
                                                        "isAsync": false,
                                                        "isAbstract": false,
                                                        "isLambda": false,
                                                        "isContextManager": false,
                                                        "searchTerms": "is_tagged\nA utility method to check if any tags of this type exist on a structure.\nNone"
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Subroutine",
                                                    "meta": {
                                                        "searchCategory": "subroutine",
                                                        "name": "module_from_name",
                                                        "source": "    @staticmethod\n    def module_from_name(module_name: str) -> ModuleType | None:\n        return modules.get(module_name)\n",
                                                        "signature": "(module_name: 'str') -> 'ModuleType | None'",
                                                        "parameters": [
                                                            {
                                                                "component": "Parameter",
                                                                "meta": {
                                                                    "name": "module_name",
                                                                    "description": null,
                                                                    "annotation": "str",
                                                                    "default": null,
                                                                    "isOptional": false
                                                                },
                                                                "children": {}
                                                            }
                                                        ],
                                                        "raises": [],
                                                        "returns": [
                                                            {
                                                                "component": "SubroutineReturn",
                                                                "meta": {
                                                                    "description": "No description...",
                                                                    "annotation": "ModuleType | None"
                                                                },
                                                                "children": {}
                                                            }
                                                        ],
                                                        "shortDescription": null,
                                                        "longDescription": null,
                                                        "deprecations": [],
                                                        "examples": [],
                                                        "links": [],
                                                        "notes": [],
                                                        "isGenerator": false,
                                                        "isAsync": false,
                                                        "isAbstract": false,
                                                        "isLambda": false,
                                                        "isContextManager": false,
                                                        "searchTerms": "module_from_name\n\n"
                                                    },
                                                    "children": {}
                                                }
                                            ]
                                        }
                                    }
                                ],
                                "Subroutines": []
                            }
                        },
                        {
                            "component": "Module",
                            "meta": {
                                "searchCategory": "module",
                                "name": "tags",
                                "source": "\"\"\"\nThis module contains the tags that can be used to mark structures with particular details.\n\nThis contains the publicly accessible tags that are exposed to users,\nso that subroutines can be marked in a particular way - this allows for the\ndocumentation generator to provide details regarding the tagged subroutine as necessary.\n\"\"\"\n\nfrom __future__ import annotations\nfrom dataclasses import dataclass\nfrom .tag import Tag\nfrom .data_tag import DataTag\n\n\n@dataclass(frozen=True, slots=True)\nclass ContextManager(DataTag):\n    \"\"\"\n    Mark a structure as a context manager.\n\n    This indicates that the structure is designed to be used in a 'with' context statement,\n    which is very difficult to determine internally without a dedicated tag.\n    \"\"\"\n    is_async: bool = False\n\n    def json_serialize(self) -> dict[str, object]:\n        return {\n            \"isAsync\": self.is_async\n        }\n\n\n@dataclass(frozen=True, slots=True)\nclass Deprecated(DataTag):\n    \"\"\"\n    Mark a structure as deprecated.\n\n    This indicates that the structure is now deprecated as of a specific version,\n    and should no longer be used. It is recommended to include an alternative\n    to using the tagged structure in the deprecation notice.\n    \"\"\"\n    version: str\n    description: str | None = None\n\n    def json_serialize(self) -> dict[str, object]:\n        return {\n            \"version\": self.version,\n            \"description\": self.description\n        }\n\n\n@dataclass(frozen=True, slots=True)\nclass Private(Tag):\n    \"\"\"\n    Mark a structure as private.\n\n    This indicates that the structure should not be documented when the\n    website is generated. Variable names starting with a single underscore\n    are treated in the same way.\n    \"\"\"\n\n\n@dataclass(frozen=True, slots=True)\nclass Example(DataTag):\n    \"\"\"\n    Add documented examples to a structure.\n    \"\"\"\n    header: str\n    python_code: str | None = None\n    footer: str | None = None\n\n    def json_serialize(self) -> dict[str, object]:\n        return {\n            \"header\": self.header,\n            \"code\": self.python_code,\n            \"footer\": self.footer\n        }\n\n\n@dataclass(frozen=True, slots=True)\nclass Link(DataTag):\n    \"\"\"\n    Add relevant links to a structure's documentation.\n    \"\"\"\n    title: str\n    href: str\n    description: str | None = None\n\n    def json_serialize(self) -> dict[str, object]:\n        return {\n            \"title\": self.title,\n            \"href\": self.href,\n            \"description\": self.description\n        }\n\n\n@dataclass(frozen=True, slots=True)\nclass Note(DataTag):\n    \"\"\"\n    Add relevant notes to a structure's documentation.\n    \"\"\"\n\n    note: str\n\n    def json_serialize(self) -> dict[str, object]:\n        return {\n            \"note\": self.note\n        }\n",
                                "shortDescription": "This module contains the tags that can be used to mark structures with particular details.",
                                "longDescription": "This contains the publicly accessible tags that are exposed to users,\nso that subroutines can be marked in a particular way - this allows for the\ndocumentation generator to provide details regarding the tagged subroutine as necessary.",
                                "deprecations": [],
                                "examples": [],
                                "links": [],
                                "notes": [],
                                "searchTerms": "tags\nThis module contains the tags that can be used to mark structures with particular details.\nThis contains the publicly accessible tags that are exposed to users,\nso that subroutines can be marked in a particular way - this allows for the\ndocumentation generator to provide details regarding the tagged subroutine as necessary.",
                                "globalVariables": []
                            },
                            "children": {
                                "Classes": [
                                    {
                                        "component": "Class",
                                        "meta": {
                                            "searchCategory": "class",
                                            "name": "ContextManager",
                                            "source": "@dataclass(frozen=True, slots=True)\nclass ContextManager(DataTag):\n    \"\"\"\n    Mark a structure as a context manager.\n\n    This indicates that the structure is designed to be used in a 'with' context statement,\n    which is very difficult to determine internally without a dedicated tag.\n    \"\"\"\n    is_async: bool = False\n\n    def json_serialize(self) -> dict[str, object]:\n        return {\n            \"isAsync\": self.is_async\n        }\n",
                                            "signature": "(is_async: 'bool' = False) -> None",
                                            "parameters": [
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "self",
                                                        "description": null,
                                                        "annotation": null,
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "is_async",
                                                        "description": null,
                                                        "annotation": "bool",
                                                        "default": "False",
                                                        "isOptional": true
                                                    },
                                                    "children": {}
                                                }
                                            ],
                                            "shortDescription": "Mark a structure as a context manager.",
                                            "longDescription": "This indicates that the structure is designed to be used in a 'with' context statement,\nwhich is very difficult to determine internally without a dedicated tag.",
                                            "deprecations": [],
                                            "examples": [],
                                            "links": [],
                                            "notes": [],
                                            "isAbstract": false,
                                            "searchTerms": "ContextManager\nMark a structure as a context manager.\nThis indicates that the structure is designed to be used in a 'with' context statement,\nwhich is very difficult to determine internally without a dedicated tag.",
                                            "classVariables": []
                                        },
                                        "children": {
                                            "Methods": [
                                                {
                                                    "component": "Subroutine",
                                                    "meta": {
                                                        "searchCategory": "subroutine",
                                                        "name": "json_serialize",
                                                        "source": "    def json_serialize(self) -> dict[str, object]:\n        return {\n            \"isAsync\": self.is_async\n        }\n",
                                                        "signature": "(self) -> 'dict[str, object]'",
                                                        "parameters": [
                                                            {
                                                                "component": "Parameter",
                                                                "meta": {
                                                                    "name": "self",
                                                                    "description": null,
                                                                    "annotation": null,
                                                                    "default": null,
                                                                    "isOptional": false
                                                                },
                                                                "children": {}
                                                            }
                                                        ],
                                                        "raises": [],
                                                        "returns": [
                                                            {
                                                                "component": "SubroutineReturn",
                                                                "meta": {
                                                                    "description": "The serialized information as a JSON compatible dictionary",
                                                                    "annotation": "dict[str, object]"
                                                                },
                                                                "children": {}
                                                            }
                                                        ],
                                                        "shortDescription": "Serialize the tag, so that it can be used in the website.",
                                                        "longDescription": "This method must be implemented by children tags, and is used to\nserialize the information provided by the tag into a JSON compatible\ndictionary, so that it can be used appropriately in the documentation website.",
                                                        "deprecations": [],
                                                        "examples": [],
                                                        "links": [],
                                                        "notes": [],
                                                        "isGenerator": false,
                                                        "isAsync": false,
                                                        "isAbstract": false,
                                                        "isLambda": false,
                                                        "isContextManager": false,
                                                        "searchTerms": "json_serialize\nSerialize the tag, so that it can be used in the website.\nThis method must be implemented by children tags, and is used to\nserialize the information provided by the tag into a JSON compatible\ndictionary, so that it can be used appropriately in the documentation website."
                                                    },
                                                    "children": {}
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        "component": "Class",
                                        "meta": {
                                            "searchCategory": "class",
                                            "name": "Deprecated",
                                            "source": "@dataclass(frozen=True, slots=True)\nclass Deprecated(DataTag):\n    \"\"\"\n    Mark a structure as deprecated.\n\n    This indicates that the structure is now deprecated as of a specific version,\n    and should no longer be used. It is recommended to include an alternative\n    to using the tagged structure in the deprecation notice.\n    \"\"\"\n    version: str\n    description: str | None = None\n\n    def json_serialize(self) -> dict[str, object]:\n        return {\n            \"version\": self.version,\n            \"description\": self.description\n        }\n",
                                            "signature": "(version: 'str', description: 'str | None' = None) -> None",
                                            "parameters": [
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "self",
                                                        "description": null,
                                                        "annotation": null,
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "version",
                                                        "description": null,
                                                        "annotation": "str",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "description",
                                                        "description": null,
                                                        "annotation": "str | None",
                                                        "default": "None",
                                                        "isOptional": true
                                                    },
                                                    "children": {}
                                                }
                                            ],
                                            "shortDescription": "Mark a structure as deprecated.",
                                            "longDescription": "This indicates that the structure is now deprecated as of a specific version,\nand should no longer be used. It is recommended to include an alternative\nto using the tagged structure in the deprecation notice.",
                                            "deprecations": [],
                                            "examples": [],
                                            "links": [],
                                            "notes": [],
                                            "isAbstract": false,
                                            "searchTerms": "Deprecated\nMark a structure as deprecated.\nThis indicates that the structure is now deprecated as of a specific version,\nand should no longer be used. It is recommended to include an alternative\nto using the tagged structure in the deprecation notice.",
                                            "classVariables": []
                                        },
                                        "children": {
                                            "Methods": [
                                                {
                                                    "component": "Subroutine",
                                                    "meta": {
                                                        "searchCategory": "subroutine",
                                                        "name": "json_serialize",
                                                        "source": "    def json_serialize(self) -> dict[str, object]:\n        return {\n            \"version\": self.version,\n            \"description\": self.description\n        }\n",
                                                        "signature": "(self) -> 'dict[str, object]'",
                                                        "parameters": [
                                                            {
                                                                "component": "Parameter",
                                                                "meta": {
                                                                    "name": "self",
                                                                    "description": null,
                                                                    "annotation": null,
                                                                    "default": null,
                                                                    "isOptional": false
                                                                },
                                                                "children": {}
                                                            }
                                                        ],
                                                        "raises": [],
                                                        "returns": [
                                                            {
                                                                "component": "SubroutineReturn",
                                                                "meta": {
                                                                    "description": "The serialized information as a JSON compatible dictionary",
                                                                    "annotation": "dict[str, object]"
                                                                },
                                                                "children": {}
                                                            }
                                                        ],
                                                        "shortDescription": "Serialize the tag, so that it can be used in the website.",
                                                        "longDescription": "This method must be implemented by children tags, and is used to\nserialize the information provided by the tag into a JSON compatible\ndictionary, so that it can be used appropriately in the documentation website.",
                                                        "deprecations": [],
                                                        "examples": [],
                                                        "links": [],
                                                        "notes": [],
                                                        "isGenerator": false,
                                                        "isAsync": false,
                                                        "isAbstract": false,
                                                        "isLambda": false,
                                                        "isContextManager": false,
                                                        "searchTerms": "json_serialize\nSerialize the tag, so that it can be used in the website.\nThis method must be implemented by children tags, and is used to\nserialize the information provided by the tag into a JSON compatible\ndictionary, so that it can be used appropriately in the documentation website."
                                                    },
                                                    "children": {}
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        "component": "Class",
                                        "meta": {
                                            "searchCategory": "class",
                                            "name": "Example",
                                            "source": "@dataclass(frozen=True, slots=True)\nclass Example(DataTag):\n    \"\"\"\n    Add documented examples to a structure.\n    \"\"\"\n    header: str\n    python_code: str | None = None\n    footer: str | None = None\n\n    def json_serialize(self) -> dict[str, object]:\n        return {\n            \"header\": self.header,\n            \"code\": self.python_code,\n            \"footer\": self.footer\n        }\n",
                                            "signature": "(header: 'str', python_code: 'str | None' = None, footer: 'str | None' = None) -> None",
                                            "parameters": [
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "self",
                                                        "description": null,
                                                        "annotation": null,
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "header",
                                                        "description": null,
                                                        "annotation": "str",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "python_code",
                                                        "description": null,
                                                        "annotation": "str | None",
                                                        "default": "None",
                                                        "isOptional": true
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "footer",
                                                        "description": null,
                                                        "annotation": "str | None",
                                                        "default": "None",
                                                        "isOptional": true
                                                    },
                                                    "children": {}
                                                }
                                            ],
                                            "shortDescription": "Add documented examples to a structure.",
                                            "longDescription": null,
                                            "deprecations": [],
                                            "examples": [],
                                            "links": [],
                                            "notes": [],
                                            "isAbstract": false,
                                            "searchTerms": "Example\nAdd documented examples to a structure.\nNone",
                                            "classVariables": []
                                        },
                                        "children": {
                                            "Methods": [
                                                {
                                                    "component": "Subroutine",
                                                    "meta": {
                                                        "searchCategory": "subroutine",
                                                        "name": "json_serialize",
                                                        "source": "    def json_serialize(self) -> dict[str, object]:\n        return {\n            \"header\": self.header,\n            \"code\": self.python_code,\n            \"footer\": self.footer\n        }\n",
                                                        "signature": "(self) -> 'dict[str, object]'",
                                                        "parameters": [
                                                            {
                                                                "component": "Parameter",
                                                                "meta": {
                                                                    "name": "self",
                                                                    "description": null,
                                                                    "annotation": null,
                                                                    "default": null,
                                                                    "isOptional": false
                                                                },
                                                                "children": {}
                                                            }
                                                        ],
                                                        "raises": [],
                                                        "returns": [
                                                            {
                                                                "component": "SubroutineReturn",
                                                                "meta": {
                                                                    "description": "The serialized information as a JSON compatible dictionary",
                                                                    "annotation": "dict[str, object]"
                                                                },
                                                                "children": {}
                                                            }
                                                        ],
                                                        "shortDescription": "Serialize the tag, so that it can be used in the website.",
                                                        "longDescription": "This method must be implemented by children tags, and is used to\nserialize the information provided by the tag into a JSON compatible\ndictionary, so that it can be used appropriately in the documentation website.",
                                                        "deprecations": [],
                                                        "examples": [],
                                                        "links": [],
                                                        "notes": [],
                                                        "isGenerator": false,
                                                        "isAsync": false,
                                                        "isAbstract": false,
                                                        "isLambda": false,
                                                        "isContextManager": false,
                                                        "searchTerms": "json_serialize\nSerialize the tag, so that it can be used in the website.\nThis method must be implemented by children tags, and is used to\nserialize the information provided by the tag into a JSON compatible\ndictionary, so that it can be used appropriately in the documentation website."
                                                    },
                                                    "children": {}
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        "component": "Class",
                                        "meta": {
                                            "searchCategory": "class",
                                            "name": "Link",
                                            "source": "@dataclass(frozen=True, slots=True)\nclass Link(DataTag):\n    \"\"\"\n    Add relevant links to a structure's documentation.\n    \"\"\"\n    title: str\n    href: str\n    description: str | None = None\n\n    def json_serialize(self) -> dict[str, object]:\n        return {\n            \"title\": self.title,\n            \"href\": self.href,\n            \"description\": self.description\n        }\n",
                                            "signature": "(title: 'str', href: 'str', description: 'str | None' = None) -> None",
                                            "parameters": [
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "self",
                                                        "description": null,
                                                        "annotation": null,
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "title",
                                                        "description": null,
                                                        "annotation": "str",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "href",
                                                        "description": null,
                                                        "annotation": "str",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "description",
                                                        "description": null,
                                                        "annotation": "str | None",
                                                        "default": "None",
                                                        "isOptional": true
                                                    },
                                                    "children": {}
                                                }
                                            ],
                                            "shortDescription": "Add relevant links to a structure's documentation.",
                                            "longDescription": null,
                                            "deprecations": [],
                                            "examples": [],
                                            "links": [],
                                            "notes": [],
                                            "isAbstract": false,
                                            "searchTerms": "Link\nAdd relevant links to a structure's documentation.\nNone",
                                            "classVariables": []
                                        },
                                        "children": {
                                            "Methods": [
                                                {
                                                    "component": "Subroutine",
                                                    "meta": {
                                                        "searchCategory": "subroutine",
                                                        "name": "json_serialize",
                                                        "source": "    def json_serialize(self) -> dict[str, object]:\n        return {\n            \"title\": self.title,\n            \"href\": self.href,\n            \"description\": self.description\n        }\n",
                                                        "signature": "(self) -> 'dict[str, object]'",
                                                        "parameters": [
                                                            {
                                                                "component": "Parameter",
                                                                "meta": {
                                                                    "name": "self",
                                                                    "description": null,
                                                                    "annotation": null,
                                                                    "default": null,
                                                                    "isOptional": false
                                                                },
                                                                "children": {}
                                                            }
                                                        ],
                                                        "raises": [],
                                                        "returns": [
                                                            {
                                                                "component": "SubroutineReturn",
                                                                "meta": {
                                                                    "description": "The serialized information as a JSON compatible dictionary",
                                                                    "annotation": "dict[str, object]"
                                                                },
                                                                "children": {}
                                                            }
                                                        ],
                                                        "shortDescription": "Serialize the tag, so that it can be used in the website.",
                                                        "longDescription": "This method must be implemented by children tags, and is used to\nserialize the information provided by the tag into a JSON compatible\ndictionary, so that it can be used appropriately in the documentation website.",
                                                        "deprecations": [],
                                                        "examples": [],
                                                        "links": [],
                                                        "notes": [],
                                                        "isGenerator": false,
                                                        "isAsync": false,
                                                        "isAbstract": false,
                                                        "isLambda": false,
                                                        "isContextManager": false,
                                                        "searchTerms": "json_serialize\nSerialize the tag, so that it can be used in the website.\nThis method must be implemented by children tags, and is used to\nserialize the information provided by the tag into a JSON compatible\ndictionary, so that it can be used appropriately in the documentation website."
                                                    },
                                                    "children": {}
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        "component": "Class",
                                        "meta": {
                                            "searchCategory": "class",
                                            "name": "Note",
                                            "source": "@dataclass(frozen=True, slots=True)\nclass Note(DataTag):\n    \"\"\"\n    Add relevant notes to a structure's documentation.\n    \"\"\"\n\n    note: str\n\n    def json_serialize(self) -> dict[str, object]:\n        return {\n            \"note\": self.note\n        }\n",
                                            "signature": "(note: 'str') -> None",
                                            "parameters": [
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "self",
                                                        "description": null,
                                                        "annotation": null,
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "note",
                                                        "description": null,
                                                        "annotation": "str",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                }
                                            ],
                                            "shortDescription": "Add relevant notes to a structure's documentation.",
                                            "longDescription": null,
                                            "deprecations": [],
                                            "examples": [],
                                            "links": [],
                                            "notes": [],
                                            "isAbstract": false,
                                            "searchTerms": "Note\nAdd relevant notes to a structure's documentation.\nNone",
                                            "classVariables": []
                                        },
                                        "children": {
                                            "Methods": [
                                                {
                                                    "component": "Subroutine",
                                                    "meta": {
                                                        "searchCategory": "subroutine",
                                                        "name": "json_serialize",
                                                        "source": "    def json_serialize(self) -> dict[str, object]:\n        return {\n            \"note\": self.note\n        }\n",
                                                        "signature": "(self) -> 'dict[str, object]'",
                                                        "parameters": [
                                                            {
                                                                "component": "Parameter",
                                                                "meta": {
                                                                    "name": "self",
                                                                    "description": null,
                                                                    "annotation": null,
                                                                    "default": null,
                                                                    "isOptional": false
                                                                },
                                                                "children": {}
                                                            }
                                                        ],
                                                        "raises": [],
                                                        "returns": [
                                                            {
                                                                "component": "SubroutineReturn",
                                                                "meta": {
                                                                    "description": "The serialized information as a JSON compatible dictionary",
                                                                    "annotation": "dict[str, object]"
                                                                },
                                                                "children": {}
                                                            }
                                                        ],
                                                        "shortDescription": "Serialize the tag, so that it can be used in the website.",
                                                        "longDescription": "This method must be implemented by children tags, and is used to\nserialize the information provided by the tag into a JSON compatible\ndictionary, so that it can be used appropriately in the documentation website.",
                                                        "deprecations": [],
                                                        "examples": [],
                                                        "links": [],
                                                        "notes": [],
                                                        "isGenerator": false,
                                                        "isAsync": false,
                                                        "isAbstract": false,
                                                        "isLambda": false,
                                                        "isContextManager": false,
                                                        "searchTerms": "json_serialize\nSerialize the tag, so that it can be used in the website.\nThis method must be implemented by children tags, and is used to\nserialize the information provided by the tag into a JSON compatible\ndictionary, so that it can be used appropriately in the documentation website."
                                                    },
                                                    "children": {}
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        "component": "Class",
                                        "meta": {
                                            "searchCategory": "class",
                                            "name": "Private",
                                            "source": "@dataclass(frozen=True, slots=True)\nclass Private(Tag):\n    \"\"\"\n    Mark a structure as private.\n\n    This indicates that the structure should not be documented when the\n    website is generated. Variable names starting with a single underscore\n    are treated in the same way.\n    \"\"\"\n",
                                            "signature": "() -> None",
                                            "parameters": [
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "self",
                                                        "description": null,
                                                        "annotation": null,
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                }
                                            ],
                                            "shortDescription": "Mark a structure as private.",
                                            "longDescription": "This indicates that the structure should not be documented when the\nwebsite is generated. Variable names starting with a single underscore\nare treated in the same way.",
                                            "deprecations": [],
                                            "examples": [],
                                            "links": [],
                                            "notes": [],
                                            "isAbstract": false,
                                            "searchTerms": "Private\nMark a structure as private.\nThis indicates that the structure should not be documented when the\nwebsite is generated. Variable names starting with a single underscore\nare treated in the same way.",
                                            "classVariables": []
                                        },
                                        "children": {
                                            "Methods": []
                                        }
                                    }
                                ],
                                "Subroutines": []
                            }
                        }
                    ]
                }
            }
        ],
        "Modules": []
    }
})
