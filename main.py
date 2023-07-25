from scandocs import Package, Documentation
from pathlib import Path
from pprint import pprint
import sqliteframe


project = Package.from_module(sqliteframe)
docs = Documentation(project, Path("./docs"))
pprint(project.serialize(docs.filter).to_json())
docs.output()
