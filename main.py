from scandocs import Package
import test_project
from pprint import pprint


project = Package.from_module(test_project)
pprint(project.modules)
