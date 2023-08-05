"""
Parsing utilities.

This package includes parsing utilities only - currently, this involves only parsing source code for exceptions.
The contents of this module have now been deprecated - consider using docstrings instead to specify
the exceptions a subroutine may raise, to ensure the documentation is correct.
"""


from .exceptions_parser import ExceptionsParser
