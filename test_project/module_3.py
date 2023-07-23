from contextlib import contextmanager, asynccontextmanager
from typing import Iterator


class Nonsense:
    pass


def function_1() -> None:
    print("This is a function")
    return


def function_2(arg_1: type, arg_2: str = "Default Arg") -> tuple[type, str]:
    return arg_1, arg_2


lambda_function = lambda x: x + 1


async def async_function() -> None:
    pass


def normal_generator() -> Iterator[str]:
    yield "Generator"


async def async_generator() -> Iterator[str]:
    yield "Generator"


@contextmanager
def context_manager() -> Iterator[int]:
    x = 0
    try:
        yield x
    finally:
        x = 1


@asynccontextmanager
async def async_context_manager() -> Iterator[int]:
    x = 0
    try:
        yield x
    finally:
        x = 1
