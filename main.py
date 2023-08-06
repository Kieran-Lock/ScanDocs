from scandocs import Package, Documentation, Configuration, Themes
from pathlib import Path
from pprint import pprint
import scandocs


project = Package.from_module(scandocs)
docs = Documentation(project, Path("./docs"), Configuration("ScanDocs", theme=Themes.SEAFOAM))
pprint(project.serialize(docs.filter).to_json())
docs.output()


"""
TODO: Attributes, methods, and class variables for classes
      Classes, and global variables for modules
      Modules for packages
      Search grouping
      Tags: Examples, Links, Notes, Private
"""
