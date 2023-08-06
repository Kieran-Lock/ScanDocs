"""
A tool to automatically generate documentation for Python projects.

ScanDocs allows for users to document their Python projects autonomously,
utilizing the power of SvelteKit to create both beautiful and adaptable documentation
websites for Python packages of any size and complexity.
"""


from .structures import Package, Structure, SourceStructure, SignatureStructure, SearchableStructure
from .documentation import Documentation, Configuration, Themes
from .tags import ContextManager, Deprecated
