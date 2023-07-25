from ast import Name, Call, Raise
from deep_ast import DeepVisitor


class ExceptionsParser(DeepVisitor):
    def __init__(self) -> None:
        super().__init__()
        self.exceptions = set()

    def visit_Raise(self, node: Raise) -> object:
        if isinstance(node.exc, (Call, Name)):  # Non-bare raise
            self.exceptions.add(node.exc.id if isinstance(node.exc, Name) else node.exc.func.id)
        return self.generic_visit(node)
