from dataclasses import dataclass
from .themes import Themes


@dataclass
class Configuration:
    project_name: str
    theme: Themes = Themes.SKELETON
    search_placeholder: str = "Search Documentation..."
    json_indent: int = 4
