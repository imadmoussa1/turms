from abc import abstractmethod
import ast
from optparse import Option
from typing import List, Optional

from pydantic import BaseSettings
from graphql.utilities.build_client_schema import GraphQLSchema


class PluginConfig(BaseSettings):
    type: str

    class Config:
        extra = "allow"


class Plugin:
    """Base Plugin Class

    Raises:
        NotImplementedError: [description]
    """

    @abstractmethod
    def generate_ast(
        self,
        config,
        client_schema: GraphQLSchema,
        registry,
    ) -> List[ast.AST]:
        raise NotImplementedError("Plugin must overrwrite this")

    def __str__(self) -> str:
        return self.__class__.__name__
