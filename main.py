from scandocs import Package, Documentation, Configuration
from pathlib import Path
from pprint import pprint
import test_project


project = Package.from_module(test_project)
docs = Documentation(project, Path("./docs"), Configuration("Test Project Title"))
pprint(project.serialize(docs.filter).to_json())
docs.output()
