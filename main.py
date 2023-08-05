from scandocs import Package, Documentation
from pathlib import Path
from pprint import pprint
import test_project


project = Package.from_module(test_project)
docs = Documentation(project, Path("./docs"))
pprint(project.serialize(docs.filter).to_json())
docs.output()


"""
TODO:

Searching: https://stackoverflow.com/questions/65604254/how-to-make-a-search-filter-in-svelte
Settings: Theme, Project Title, etc
"""
