from turms.parsers.base import Parser, ParserConfig
from typing import Union, Literal, List
import ast
from pydantic import validator


class PolyfillPluginConfig(ParserConfig):
    type = "turms.parsers.polyfill.PolyfillPlugin"
    skip_underscore: bool = True
    python_version: Union[
        Literal["3.7"], Literal["3.8"], Literal["3.9"], Literal["3.10"]
    ] = "3.9"

    @validator("python_version", pre=True)
    def validate(cls, v):
        v = str(v)
        if v not in ["3.7", "3.8", "3.9", "3.10"]:
            raise ValueError(f"Invalid python version: {v}")
        return v

    class Config:
        env_prefix = "TURMS_PARSERS_POLYFILL_"


def polyfill_python_seven(
    asts: List[ast.AST], config: PolyfillPluginConfig
) -> List[ast.AST]:
    print("Hallo")
    new_nodes = []
    for node in asts:
        if isinstance(node, ast.ImportFrom):
            if node.module == "typing":
                # okay imports
                aliases = {alias.name for alias in node.names}
                need_extensions = aliases.intersection({"Literal"})
                if need_extensions:
                    new_nodes.append(
                        ast.ImportFrom(
                            module="typing_extensions",
                            names=[ast.alias(name=name) for name in need_extensions],
                            level=0,
                        )
                    )

                okay_imports = aliases - need_extensions
                new_nodes.append(
                    ast.ImportFrom(
                        names=[ast.alias(name=name) for name in okay_imports],
                        module="typing",
                        level=0,
                    )
                )
            else:
                new_nodes.append(node)

        else:
            new_nodes.append(node)

    return new_nodes


class PolyfillParser(Parser):
    """Base Paser Class

    Raises:
        NotImplementedError: [description]
    """

    plugin_config: PolyfillPluginConfig

    def __init__(self, config: PolyfillPluginConfig = None, **data):
        self.plugin_config = config or PolyfillPluginConfig(**data)

    def parse_ast(
        self,
        asts: List[ast.AST],
    ) -> List[ast.AST]:

        if self.plugin_config.python_version == "3.7":
            return polyfill_python_seven(asts, self.plugin_config)

        return asts

    def __str__(self) -> str:
        return self.__class__.__name__
