from scandocs import Package, Documentation, Configuration, Themes
from pathlib import Path
from pprint import pprint
import test_project


project = Package.from_module(test_project)
docs = Documentation(project, Path("./docs"), Configuration("Test Project Title", theme=Themes.GOLD_NOUVEAU))
pprint(project.serialize(docs.filter).to_json())
docs.output()
