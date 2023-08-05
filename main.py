from scandocs import Package, Documentation, Configuration, Themes
from pathlib import Path
from pprint import pprint
import scandocs


project = Package.from_module(scandocs)
docs = Documentation(project, Path("./docs"), Configuration("ScanDocs", theme=Themes.CRIMSON))
pprint(project.serialize(docs.filter).to_json())
docs.output()


"""
TODO: Attributes and methods for classes
      Classes for modules
      Modules for packages
      Search grouping
"""
