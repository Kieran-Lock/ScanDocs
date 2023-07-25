from scandocs import Package, Documentation
from pathlib import Path
from pprint import pprint
import scandocs


project = Package.from_module(scandocs)
docs = Documentation(project, Path("./docs"))
pprint(project.serialize(docs.filter).to_json())
docs.output()
