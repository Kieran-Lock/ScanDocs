from scandocs import Package, Documentation
from pathlib import Path
from pprint import pprint
import test_project


project = Package.from_module(test_project)
pprint(project.serialize())
# docs = Documentation(project)
# docs.output(Path("./docs-test"))
