"""
A module containing the exceptions parser

This module contains the class which parses subroutine source code to find what exceptions
a subroutine may raise. This class has been deprecated.
"""

from ast import Name, Call, Raise
from deep_ast import DeepVisitor
from ..tags import Deprecated


@Deprecated("v0.1.1", "Docstrings are used instead to provide accurate detail about exceptions").tag
class ExceptionsParser(DeepVisitor):
    """
    A class which parses the source code to find the possible exceptions a subroutine might raise.

    This class uses the inbuilt ast module, extended to visit deeply nested subroutines calls,
    and finds any instances where the subroutines raise an error, keeping track of these details.
    This has been deprecated in favour of using docstrings to document subroutine exceptions.
    """
    def __init__(self) -> None:
        super().__init__()
        self.exceptions = set()

    def visit_Raise(self, node: Raise) -> object:
        """
        Keeps track of any raise statements visited.

        This method is called by a superclasses whenever a raise statement is visited.
        It proceeds to track the details of the raise node visited in an instance-wide set.

        :param node: The AST node visited when a raise statement was detected
        :return: Any object being parsed next
        """
        if isinstance(node.exc, (Call, Name)):  # Non-bare raise
            self.exceptions.add(node.exc.id if isinstance(node.exc, Name) else node.exc.func.id)
        return self.generic_visit(node)
