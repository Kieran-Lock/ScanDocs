import {parseProject} from "$lib/utils/parsing";

export const project = parseProject({
    "component": "Package",
    "meta": {
        "name": "test_project",
        "source": "from .module_1 import TestClass1, AbstractTestClass\nfrom .module_2 import TestClass2, TestClass3\nfrom .module_3 import Nonsense\n",
        "shortDescription": null,
        "longDescription": null
    },
    "children": {
        "subpackages": [
            {
                "component": "Package",
                "meta": {
                    "name": "module_1",
                    "source": "from .file_1 import TestClass1, AbstractTestClass\n",
                    "shortDescription": null,
                    "longDescription": null
                },
                "children": {
                    "subpackages": [],
                    "modules": [
                        {
                            "component": "Module",
                            "meta": {
                                "name": "file_1",
                                "source": "from abc import ABC, abstractmethod\n\n\nclass TestClass1:\n    \"\"\"\n    Test class 1\n\n    Just a small class, for minimal testing\n    \"\"\"\n    def __init__(self, hello, there: str, kenobi: bool = True, *args, **kwargs):\n        self.stuff = (hello, there, kenobi, args, kwargs)\n\n\nclass AbstractTestClass(ABC):\n    @abstractmethod\n    def abstract_method(self) -> int:\n        return 5\n\n    def non_abstract_method(self) -> None:\n        return\n",
                                "shortDescription": null,
                                "longDescription": null
                            },
                            "children": {
                                "classes": [
                                    {
                                        "component": "Class",
                                        "meta": {
                                            "name": "AbstractTestClass",
                                            "source": "class AbstractTestClass(ABC):\n    @abstractmethod\n    def abstract_method(self) -> int:\n        return 5\n\n    def non_abstract_method(self) -> None:\n        return\n",
                                            "signature": "()",
                                            "parameters": [
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "self",
                                                        "description": null,
                                                        "annotation": null,
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "args",
                                                        "description": null,
                                                        "annotation": null,
                                                        "default": null,
                                                        "isOptional": true
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "kwargs",
                                                        "description": null,
                                                        "annotation": null,
                                                        "default": null,
                                                        "isOptional": true
                                                    },
                                                    "children": {}
                                                }
                                            ],
                                            "shortDescription": "Helper class that provides a standard way to create an ABC using",
                                            "longDescription": "inheritance.",
                                            "deprecation": null,
                                            "isAbstract": true
                                        },
                                        "children": {
                                            "methods": [
                                                {
                                                    "component": "Subroutine",
                                                    "meta": {
                                                        "name": "abstract_method",
                                                        "source": "    @abstractmethod\n    def abstract_method(self) -> int:\n        return 5\n",
                                                        "signature": "(self) -> int",
                                                        "parameters": [
                                                            {
                                                                "component": "Parameter",
                                                                "meta": {
                                                                    "name": "self",
                                                                    "description": null,
                                                                    "annotation": null,
                                                                    "default": null,
                                                                    "isOptional": false
                                                                },
                                                                "children": {}
                                                            }
                                                        ],
                                                        "raises": [],
                                                        "returns": [
                                                            {
                                                                "component": "SubroutineReturn",
                                                                "meta": {
                                                                    "description": "No description...",
                                                                    "annotation": "int"
                                                                },
                                                                "children": {}
                                                            }
                                                        ],
                                                        "shortDescription": null,
                                                        "longDescription": null,
                                                        "deprecation": null,
                                                        "isGenerator": false,
                                                        "isAsync": null,
                                                        "isAbstract": true,
                                                        "isLambda": false,
                                                        "isContextManager": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Subroutine",
                                                    "meta": {
                                                        "name": "non_abstract_method",
                                                        "source": "    def non_abstract_method(self) -> None:\n        return\n",
                                                        "signature": "(self) -> None",
                                                        "parameters": [
                                                            {
                                                                "component": "Parameter",
                                                                "meta": {
                                                                    "name": "self",
                                                                    "description": null,
                                                                    "annotation": null,
                                                                    "default": null,
                                                                    "isOptional": false
                                                                },
                                                                "children": {}
                                                            }
                                                        ],
                                                        "raises": [],
                                                        "returns": [
                                                            {
                                                                "component": "SubroutineReturn",
                                                                "meta": {
                                                                    "description": "No description...",
                                                                    "annotation": "None"
                                                                },
                                                                "children": {}
                                                            }
                                                        ],
                                                        "shortDescription": null,
                                                        "longDescription": null,
                                                        "deprecation": null,
                                                        "isGenerator": false,
                                                        "isAsync": null,
                                                        "isAbstract": false,
                                                        "isLambda": false,
                                                        "isContextManager": false
                                                    },
                                                    "children": {}
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        "component": "Class",
                                        "meta": {
                                            "name": "TestClass1",
                                            "source": "class TestClass1:\n    \"\"\"\n    Test class 1\n\n    Just a small class, for minimal testing\n    \"\"\"\n    def __init__(self, hello, there: str, kenobi: bool = True, *args, **kwargs):\n        self.stuff = (hello, there, kenobi, args, kwargs)\n",
                                            "signature": "(hello, there: str, kenobi: bool = True, *args, **kwargs)",
                                            "parameters": [
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "self",
                                                        "description": null,
                                                        "annotation": null,
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "hello",
                                                        "description": null,
                                                        "annotation": null,
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "there",
                                                        "description": null,
                                                        "annotation": "str",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "kenobi",
                                                        "description": null,
                                                        "annotation": "bool",
                                                        "default": "True",
                                                        "isOptional": true
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "args",
                                                        "description": null,
                                                        "annotation": null,
                                                        "default": null,
                                                        "isOptional": true
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "kwargs",
                                                        "description": null,
                                                        "annotation": null,
                                                        "default": null,
                                                        "isOptional": true
                                                    },
                                                    "children": {}
                                                }
                                            ],
                                            "shortDescription": "Test class 1",
                                            "longDescription": "Just a small class, for minimal testing",
                                            "deprecation": null,
                                            "isAbstract": false
                                        },
                                        "children": {
                                            "methods": []
                                        }
                                    }
                                ],
                                "subroutines": []
                            }
                        }
                    ]
                }
            },
            {
                "component": "Package",
                "meta": {
                    "name": "module_2",
                    "source": "\"\"\"\nThis is the __init__ file for module_2\n\nIt imports both file_2 and file_3, so that they can be exposed to the parent __init__\n\"\"\"\n\n\nfrom .file_2 import TestClass2\nfrom .file_3 import TestClass3\n",
                    "shortDescription": "This is the __init__ file for module_2",
                    "longDescription": "It imports both file_2 and file_3, so that they can be exposed to the parent __init__"
                },
                "children": {
                    "subpackages": [],
                    "modules": [
                        {
                            "component": "Module",
                            "meta": {
                                "name": "file_2",
                                "source": "from __future__ import annotations\nfrom dataclasses import dataclass\n\n\n@dataclass(frozen=True, slots=True)\nclass TestClass2:\n    \"\"\"\n    TestClass2 showcase\n    This class showcases how both attributes and method behave in a (data)class\n    \"\"\"\n    attribute: int = 50\n\n    def method(self, arg: float) -> None:\n        print(self.attribute, arg)\n\n    @staticmethod\n    def static_method(arg_1: bool, arg_2: str = \"Default\") -> int:\n        \"\"\"\n        A static method in TestClass2\n        :param arg_1:\n        :param arg_2:\n        :return:\n        \"\"\"\n        print(arg_1, arg_2)\n        return 0\n\n    @classmethod\n    def class_method(cls, arg_1: str) -> tuple[type[TestClass2], str]:\n        \"\"\"\n        A class method in TestClass2\n        :param arg_1:\n        :return:\n        \"\"\"\n        return cls, arg_1\n",
                                "shortDescription": null,
                                "longDescription": null
                            },
                            "children": {
                                "classes": [
                                    {
                                        "component": "Class",
                                        "meta": {
                                            "name": "TestClass2",
                                            "source": "@dataclass(frozen=True, slots=True)\nclass TestClass2:\n    \"\"\"\n    TestClass2 showcase\n    This class showcases how both attributes and method behave in a (data)class\n    \"\"\"\n    attribute: int = 50\n\n    def method(self, arg: float) -> None:\n        print(self.attribute, arg)\n\n    @staticmethod\n    def static_method(arg_1: bool, arg_2: str = \"Default\") -> int:\n        \"\"\"\n        A static method in TestClass2\n        :param arg_1:\n        :param arg_2:\n        :return:\n        \"\"\"\n        print(arg_1, arg_2)\n        return 0\n\n    @classmethod\n    def class_method(cls, arg_1: str) -> tuple[type[TestClass2], str]:\n        \"\"\"\n        A class method in TestClass2\n        :param arg_1:\n        :return:\n        \"\"\"\n        return cls, arg_1\n",
                                            "signature": "(attribute: 'int' = 50) -> None",
                                            "parameters": [
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "self",
                                                        "description": null,
                                                        "annotation": null,
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "attribute",
                                                        "description": null,
                                                        "annotation": "int",
                                                        "default": "50",
                                                        "isOptional": true
                                                    },
                                                    "children": {}
                                                }
                                            ],
                                            "shortDescription": "TestClass2 showcase",
                                            "longDescription": "This class showcases how both attributes and method behave in a (data)class",
                                            "deprecation": null,
                                            "isAbstract": false
                                        },
                                        "children": {
                                            "methods": [
                                                {
                                                    "component": "Subroutine",
                                                    "meta": {
                                                        "name": "method",
                                                        "source": "    def method(self, arg: float) -> None:\n        print(self.attribute, arg)\n",
                                                        "signature": "(self, arg: 'float') -> 'None'",
                                                        "parameters": [
                                                            {
                                                                "component": "Parameter",
                                                                "meta": {
                                                                    "name": "self",
                                                                    "description": null,
                                                                    "annotation": null,
                                                                    "default": null,
                                                                    "isOptional": false
                                                                },
                                                                "children": {}
                                                            },
                                                            {
                                                                "component": "Parameter",
                                                                "meta": {
                                                                    "name": "arg",
                                                                    "description": null,
                                                                    "annotation": "float",
                                                                    "default": null,
                                                                    "isOptional": false
                                                                },
                                                                "children": {}
                                                            }
                                                        ],
                                                        "raises": [],
                                                        "returns": [
                                                            {
                                                                "component": "SubroutineReturn",
                                                                "meta": {
                                                                    "description": "No description...",
                                                                    "annotation": "None"
                                                                },
                                                                "children": {}
                                                            }
                                                        ],
                                                        "shortDescription": null,
                                                        "longDescription": null,
                                                        "deprecation": null,
                                                        "isGenerator": false,
                                                        "isAsync": null,
                                                        "isAbstract": false,
                                                        "isLambda": false,
                                                        "isContextManager": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Subroutine",
                                                    "meta": {
                                                        "name": "static_method",
                                                        "source": "    @staticmethod\n    def static_method(arg_1: bool, arg_2: str = \"Default\") -> int:\n        \"\"\"\n        A static method in TestClass2\n        :param arg_1:\n        :param arg_2:\n        :return:\n        \"\"\"\n        print(arg_1, arg_2)\n        return 0\n",
                                                        "signature": "(arg_1: 'bool', arg_2: 'str' = 'Default') -> 'int'",
                                                        "parameters": [
                                                            {
                                                                "component": "Parameter",
                                                                "meta": {
                                                                    "name": "arg_1",
                                                                    "description": "",
                                                                    "annotation": "bool",
                                                                    "default": null,
                                                                    "isOptional": false
                                                                },
                                                                "children": {}
                                                            },
                                                            {
                                                                "component": "Parameter",
                                                                "meta": {
                                                                    "name": "arg_2",
                                                                    "description": "",
                                                                    "annotation": "str",
                                                                    "default": "Default",
                                                                    "isOptional": true
                                                                },
                                                                "children": {}
                                                            }
                                                        ],
                                                        "raises": [],
                                                        "returns": [
                                                            {
                                                                "component": "SubroutineReturn",
                                                                "meta": {
                                                                    "description": "",
                                                                    "annotation": "int"
                                                                },
                                                                "children": {}
                                                            }
                                                        ],
                                                        "shortDescription": "A static method in TestClass2",
                                                        "longDescription": null,
                                                        "deprecation": null,
                                                        "isGenerator": false,
                                                        "isAsync": null,
                                                        "isAbstract": false,
                                                        "isLambda": false,
                                                        "isContextManager": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Subroutine",
                                                    "meta": {
                                                        "name": "class_method",
                                                        "source": "    @classmethod\n    def class_method(cls, arg_1: str) -> tuple[type[TestClass2], str]:\n        \"\"\"\n        A class method in TestClass2\n        :param arg_1:\n        :return:\n        \"\"\"\n        return cls, arg_1\n",
                                                        "signature": "(arg_1: 'str') -> 'tuple[type[TestClass2], str]'",
                                                        "parameters": [
                                                            {
                                                                "component": "Parameter",
                                                                "meta": {
                                                                    "name": "arg_1",
                                                                    "description": "",
                                                                    "annotation": "str",
                                                                    "default": null,
                                                                    "isOptional": false
                                                                },
                                                                "children": {}
                                                            }
                                                        ],
                                                        "raises": [],
                                                        "returns": [
                                                            {
                                                                "component": "SubroutineReturn",
                                                                "meta": {
                                                                    "description": "",
                                                                    "annotation": "tuple[type[TestClass2], str]"
                                                                },
                                                                "children": {}
                                                            }
                                                        ],
                                                        "shortDescription": "A class method in TestClass2",
                                                        "longDescription": null,
                                                        "deprecation": null,
                                                        "isGenerator": false,
                                                        "isAsync": null,
                                                        "isAbstract": false,
                                                        "isLambda": false,
                                                        "isContextManager": false
                                                    },
                                                    "children": {}
                                                }
                                            ]
                                        }
                                    }
                                ],
                                "subroutines": []
                            }
                        },
                        {
                            "component": "Module",
                            "meta": {
                                "name": "file_3",
                                "source": "from dataclasses import dataclass\nfrom functools import cached_property\n\n\n@dataclass(frozen=True)\nclass TestClass3:\n    \"\"\"\n    A complicated dataclass\n\n    This one has all kinds of attributes, but no methods\n    \"\"\"\n    attribute: bool\n    cached_attribute: str\n\n    @property\n    def property_method(self) -> bool:\n        \"\"\"\n        A very simple getter method\n        :return:\n        \"\"\"\n        return self.attribute\n\n    @cached_property\n    def cached_property_method(self) -> str:\n        return self.cached_attribute\n\n\ndef silent_function(x: int, y: str) -> None | str:\n    \"\"\"\n    This isn't exposed\n\n    This function was deprecated in v4.2.0, so probably don't use it lol.\n\n    :param y:\n    :param x:\n    :type y: str\n    :return: whether the inputs passed the test\n    :rtype: None | str\n    \"\"\"\n    if x or y:\n        return \"Passed\"\n    return\n",
                                "shortDescription": null,
                                "longDescription": null
                            },
                            "children": {
                                "classes": [
                                    {
                                        "component": "Class",
                                        "meta": {
                                            "name": "TestClass3",
                                            "source": "@dataclass(frozen=True)\nclass TestClass3:\n    \"\"\"\n    A complicated dataclass\n\n    This one has all kinds of attributes, but no methods\n    \"\"\"\n    attribute: bool\n    cached_attribute: str\n\n    @property\n    def property_method(self) -> bool:\n        \"\"\"\n        A very simple getter method\n        :return:\n        \"\"\"\n        return self.attribute\n\n    @cached_property\n    def cached_property_method(self) -> str:\n        return self.cached_attribute\n",
                                            "signature": "(attribute: bool, cached_attribute: str) -> None",
                                            "parameters": [
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "self",
                                                        "description": null,
                                                        "annotation": null,
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "attribute",
                                                        "description": null,
                                                        "annotation": "bool",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "cached_attribute",
                                                        "description": null,
                                                        "annotation": "str",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                }
                                            ],
                                            "shortDescription": "A complicated dataclass",
                                            "longDescription": "This one has all kinds of attributes, but no methods",
                                            "deprecation": null,
                                            "isAbstract": false
                                        },
                                        "children": {
                                            "methods": []
                                        }
                                    }
                                ],
                                "subroutines": [
                                    {
                                        "component": "Subroutine",
                                        "meta": {
                                            "name": "silent_function",
                                            "source": "def silent_function(x: int, y: str) -> None | str:\n    \"\"\"\n    This isn't exposed\n\n    This function was deprecated in v4.2.0, so probably don't use it lol.\n\n    :param y:\n    :param x:\n    :type y: str\n    :return: whether the inputs passed the test\n    :rtype: None | str\n    \"\"\"\n    if x or y:\n        return \"Passed\"\n    return\n",
                                            "signature": "(x: int, y: str) -> None | str",
                                            "parameters": [
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "x",
                                                        "description": "",
                                                        "annotation": "int",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                },
                                                {
                                                    "component": "Parameter",
                                                    "meta": {
                                                        "name": "y",
                                                        "description": "",
                                                        "annotation": "str",
                                                        "default": null,
                                                        "isOptional": false
                                                    },
                                                    "children": {}
                                                }
                                            ],
                                            "raises": [],
                                            "returns": [
                                                {
                                                    "component": "SubroutineReturn",
                                                    "meta": {
                                                        "description": "whether the inputs passed the test",
                                                        "annotation": "None | str"
                                                    },
                                                    "children": {}
                                                }
                                            ],
                                            "shortDescription": "This isn't exposed",
                                            "longDescription": "This function was deprecated in v4.2.0, so probably don't use it lol.",
                                            "deprecation": null,
                                            "isGenerator": false,
                                            "isAsync": null,
                                            "isAbstract": false,
                                            "isLambda": false,
                                            "isContextManager": false
                                        },
                                        "children": {}
                                    }
                                ]
                            }
                        }
                    ]
                }
            }
        ],
        "modules": [
            {
                "component": "Module",
                "meta": {
                    "name": "module_3",
                    "source": "\"\"\"\nThis is module_3\n\nIt is a python file full of random structures!\n\"\"\"\n\n\nfrom contextlib import contextmanager, asynccontextmanager\nfrom typing import Iterator\nfrom scandocs import ContextManager, Deprecated\n\n\nclass Nonsense:\n    pass\n\n\n@Deprecated(\"v4.2.0\", \"Because it wasn't awesome enough\").tag\ndef function_1() -> None:\n    \"\"\"\n    Boring function\n    :return: Nothing\n    :rtype: None\n    \"\"\"\n    print(\"This is a function\")\n    return\n\n\ndef function_2(arg_1: type, arg_2: str = \"Default Arg\") -> tuple[type, str]:\n    \"\"\"\n    A detailed function\n\n    This function has lots of different bits\n\n    :param arg_1: the first argument\n    :type arg_1: type\n    :param arg_2: the second argument, defaults to \"Default Arg\"\n    :type arg_2?: str\n    :return: returns a tuple (very cool)\n    :raises ValueError: If neither of the arguments are truthy\n    :rtype: tuple[type, str]\n    \"\"\"\n    if not (arg_1 or arg_2):\n        raise ValueError\n    return arg_1, arg_2\n\n\nlambda_function = lambda x: x + 1\n\n\nasync def async_function() -> None:\n    \"\"\"\n        Boring async function\n        :return: Nothing\n        :rtype:\n        \"\"\"\n    pass\n\n\ndef normal_generator() -> Iterator[str]:\n    \"\"\"\n    basic generator test\n\n    :yield: \"Generator\"\n    :raise RuntimeError: End with a runtime error for extra punishment\n    \"\"\"\n    yield \"Generator\"\n    raise RuntimeError\n\n\nasync def async_generator() -> Iterator[str]:\n    yield \"Generator\"\n\n\n@ContextManager().tag\n@contextmanager\ndef context_manager() -> Iterator[int]:\n    \"\"\"\n    A very simple context manager\n\n    This returns an iterator, which makes it a good test!\n\n    :return iterator: From the as statement\n    :rtype: Iterator[int]\n    \"\"\"\n    x = 0\n    try:\n        yield x\n    finally:\n        x = 1\n\n\n@ContextManager(is_async=True).tag\n@asynccontextmanager\nasync def async_context_manager() -> Iterator[int]:\n    x = 0\n    try:\n        yield x\n    finally:\n        x = 1\n",
                    "shortDescription": "This is module_3",
                    "longDescription": "It is a python file full of random structures!"
                },
                "children": {
                    "classes": [
                        {
                            "component": "Class",
                            "meta": {
                                "name": "Nonsense",
                                "source": "class Nonsense:\n    pass\n",
                                "signature": "()",
                                "parameters": [
                                    {
                                        "component": "Parameter",
                                        "meta": {
                                            "name": "self",
                                            "description": null,
                                            "annotation": null,
                                            "default": null,
                                            "isOptional": false
                                        },
                                        "children": {}
                                    },
                                    {
                                        "component": "Parameter",
                                        "meta": {
                                            "name": "args",
                                            "description": null,
                                            "annotation": null,
                                            "default": null,
                                            "isOptional": true
                                        },
                                        "children": {}
                                    },
                                    {
                                        "component": "Parameter",
                                        "meta": {
                                            "name": "kwargs",
                                            "description": null,
                                            "annotation": null,
                                            "default": null,
                                            "isOptional": true
                                        },
                                        "children": {}
                                    }
                                ],
                                "shortDescription": null,
                                "longDescription": null,
                                "deprecation": null,
                                "isAbstract": false
                            },
                            "children": {
                                "methods": []
                            }
                        }
                    ],
                    "subroutines": [
                        {
                            "component": "Subroutine",
                            "meta": {
                                "name": "async_context_manager",
                                "source": "@ContextManager(is_async=True).tag\n@asynccontextmanager\nasync def async_context_manager() -> Iterator[int]:\n    x = 0\n    try:\n        yield x\n    finally:\n        x = 1\n",
                                "signature": "() -> Iterator[int]",
                                "parameters": [],
                                "raises": [],
                                "returns": [
                                    {
                                        "component": "SubroutineReturn",
                                        "meta": {
                                            "description": "No description...",
                                            "annotation": "typing.Iterator[int]"
                                        },
                                        "children": {}
                                    }
                                ],
                                "shortDescription": null,
                                "longDescription": null,
                                "deprecation": null,
                                "isGenerator": false,
                                "isAsync": true,
                                "isAbstract": false,
                                "isLambda": false,
                                "isContextManager": true
                            },
                            "children": {}
                        },
                        {
                            "component": "Subroutine",
                            "meta": {
                                "name": "async_function",
                                "source": "async def async_function() -> None:\n    \"\"\"\n        Boring async function\n        :return: Nothing\n        :rtype:\n        \"\"\"\n    pass\n",
                                "signature": "() -> None",
                                "parameters": [],
                                "raises": [],
                                "returns": [
                                    {
                                        "component": "SubroutineReturn",
                                        "meta": {
                                            "description": "Nothing",
                                            "annotation": "None"
                                        },
                                        "children": {}
                                    }
                                ],
                                "shortDescription": "Boring async function",
                                "longDescription": null,
                                "deprecation": null,
                                "isGenerator": false,
                                "isAsync": null,
                                "isAbstract": false,
                                "isLambda": false,
                                "isContextManager": false
                            },
                            "children": {}
                        },
                        {
                            "component": "Subroutine",
                            "meta": {
                                "name": "async_generator",
                                "source": "async def async_generator() -> Iterator[str]:\n    yield \"Generator\"\n",
                                "signature": "() -> Iterator[str]",
                                "parameters": [],
                                "raises": [],
                                "returns": [
                                    {
                                        "component": "SubroutineReturn",
                                        "meta": {
                                            "description": "No description...",
                                            "annotation": "typing.Iterator[str]"
                                        },
                                        "children": {}
                                    }
                                ],
                                "shortDescription": null,
                                "longDescription": null,
                                "deprecation": null,
                                "isGenerator": true,
                                "isAsync": null,
                                "isAbstract": false,
                                "isLambda": false,
                                "isContextManager": false
                            },
                            "children": {}
                        },
                        {
                            "component": "Subroutine",
                            "meta": {
                                "name": "context_manager",
                                "source": "@ContextManager().tag\n@contextmanager\ndef context_manager() -> Iterator[int]:\n    \"\"\"\n    A very simple context manager\n\n    This returns an iterator, which makes it a good test!\n\n    :return iterator: From the as statement\n    :rtype: Iterator[int]\n    \"\"\"\n    x = 0\n    try:\n        yield x\n    finally:\n        x = 1\n",
                                "signature": "() -> Iterator[int]",
                                "parameters": [],
                                "raises": [],
                                "returns": [
                                    {
                                        "component": "SubroutineReturn",
                                        "meta": {
                                            "description": "From the as statement",
                                            "annotation": "typing.Iterator[int]"
                                        },
                                        "children": {}
                                    }
                                ],
                                "shortDescription": "A very simple context manager",
                                "longDescription": "This returns an iterator, which makes it a good test!",
                                "deprecation": null,
                                "isGenerator": false,
                                "isAsync": false,
                                "isAbstract": false,
                                "isLambda": false,
                                "isContextManager": true
                            },
                            "children": {}
                        },
                        {
                            "component": "Subroutine",
                            "meta": {
                                "name": "function_1",
                                "source": "@Deprecated(\"v4.2.0\", \"Because it wasn't awesome enough\").tag\ndef function_1() -> None:\n    \"\"\"\n    Boring function\n    :return: Nothing\n    :rtype: None\n    \"\"\"\n    print(\"This is a function\")\n    return\n",
                                "signature": "() -> None",
                                "parameters": [],
                                "raises": [],
                                "returns": [
                                    {
                                        "component": "SubroutineReturn",
                                        "meta": {
                                            "description": "Nothing",
                                            "annotation": "None"
                                        },
                                        "children": {}
                                    }
                                ],
                                "shortDescription": "Boring function",
                                "longDescription": null,
                                "deprecation": {
                                    "version": "v4.2.0",
                                    "description": "Because it wasn't awesome enough"
                                },
                                "isGenerator": false,
                                "isAsync": null,
                                "isAbstract": false,
                                "isLambda": false,
                                "isContextManager": false
                            },
                            "children": {}
                        },
                        {
                            "component": "Subroutine",
                            "meta": {
                                "name": "function_2",
                                "source": "def function_2(arg_1: type, arg_2: str = \"Default Arg\") -> tuple[type, str]:\n    \"\"\"\n    A detailed function\n\n    This function has lots of different bits\n\n    :param arg_1: the first argument\n    :type arg_1: type\n    :param arg_2: the second argument, defaults to \"Default Arg\"\n    :type arg_2?: str\n    :return: returns a tuple (very cool)\n    :raises ValueError: If neither of the arguments are truthy\n    :rtype: tuple[type, str]\n    \"\"\"\n    if not (arg_1 or arg_2):\n        raise ValueError\n    return arg_1, arg_2\n",
                                "signature": "(arg_1: type, arg_2: str = 'Default Arg') -> tuple[type, str]",
                                "parameters": [
                                    {
                                        "component": "Parameter",
                                        "meta": {
                                            "name": "arg_1",
                                            "description": "the first argument",
                                            "annotation": "type",
                                            "default": null,
                                            "isOptional": false
                                        },
                                        "children": {}
                                    },
                                    {
                                        "component": "Parameter",
                                        "meta": {
                                            "name": "arg_2",
                                            "description": "the second argument, defaults to \"Default Arg\"",
                                            "annotation": "str",
                                            "default": "Default Arg",
                                            "isOptional": true
                                        },
                                        "children": {}
                                    }
                                ],
                                "raises": [
                                    {
                                        "component": "Exception",
                                        "meta": {
                                            "name": "ValueError",
                                            "description": "If neither of the arguments are truthy"
                                        },
                                        "children": {}
                                    }
                                ],
                                "returns": [
                                    {
                                        "component": "SubroutineReturn",
                                        "meta": {
                                            "description": "returns a tuple (very cool)",
                                            "annotation": "tuple[type, str]"
                                        },
                                        "children": {}
                                    }
                                ],
                                "shortDescription": "A detailed function",
                                "longDescription": "This function has lots of different bits",
                                "deprecation": null,
                                "isGenerator": false,
                                "isAsync": null,
                                "isAbstract": false,
                                "isLambda": false,
                                "isContextManager": false
                            },
                            "children": {}
                        },
                        {
                            "component": "Subroutine",
                            "meta": {
                                "name": "normal_generator",
                                "source": "def normal_generator() -> Iterator[str]:\n    \"\"\"\n    basic generator test\n\n    :yield: \"Generator\"\n    :raise RuntimeError: End with a runtime error for extra punishment\n    \"\"\"\n    yield \"Generator\"\n    raise RuntimeError\n",
                                "signature": "() -> Iterator[str]",
                                "parameters": [],
                                "raises": [
                                    {
                                        "component": "Exception",
                                        "meta": {
                                            "name": "RuntimeError",
                                            "description": "End with a runtime error for extra punishment"
                                        },
                                        "children": {}
                                    }
                                ],
                                "returns": [
                                    {
                                        "component": "SubroutineReturn",
                                        "meta": {
                                            "description": "\"Generator\"",
                                            "annotation": "typing.Iterator[str]"
                                        },
                                        "children": {}
                                    }
                                ],
                                "shortDescription": "basic generator test",
                                "longDescription": null,
                                "deprecation": null,
                                "isGenerator": true,
                                "isAsync": null,
                                "isAbstract": false,
                                "isLambda": false,
                                "isContextManager": false
                            },
                            "children": {}
                        }
                    ]
                }
            }
        ]
    }
})
