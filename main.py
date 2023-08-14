from src.scandocs import Package, Documentation, Configuration, Themes
from pathlib import Path
from src import scandocs


project = Package.from_module(scandocs)
docs = Documentation(project, Path("./docs"), Configuration("ScanDocs", theme=Themes.GOLD_NOUVEAU))
docs.output()
