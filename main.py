from scandocs import Package, Documentation
from pathlib import Path
import test_project


project = Package.from_module(test_project)
docs = Documentation(project, Path("./docs-test"))
docs.output()
