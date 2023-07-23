class Nonsense:
    pass


def function_1() -> None:
    print("This is a function")
    return


def function_2(arg_1: type, arg_2: str = "Default Arg") -> tuple[type, str]:
    return arg_1, arg_2


lambda_function = lambda x: x + 1
