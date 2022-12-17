""" This file was code generated by turms. If you want to change the contents of this file, you should make sure to add the MergeProcessor to your config will keep your changes when you re-run turms)."""

from enum import Enum
from typing import Any, List, Optional, Union

import strawberry


@strawberry.enum
class __TypeKind(Enum):
    """An enum describing what kind of type a given `__Type` is."""

    SCALAR = "scalar"
    "Indicates this type is a scalar."
    OBJECT = "object"
    "Indicates this type is an object. `fields` and `interfaces` are valid fields."
    INTERFACE = "interface"
    "Indicates this type is an interface. `fields`, `interfaces`, and `possibleTypes` are valid fields."
    UNION = "union"
    "Indicates this type is a union. `possibleTypes` is a valid field."
    ENUM = "enum"
    "Indicates this type is an enum. `enumValues` is a valid field."
    INPUT_OBJECT = "input object"
    "Indicates this type is an input object. `inputFields` is a valid field."
    LIST = "list"
    "Indicates this type is a list. `ofType` is a valid field."
    NON_NULL = "non-null"
    "Indicates this type is a non-null. `ofType` is a valid field."


@strawberry.enum
class __DirectiveLocation(Enum):
    """A Directive can be adjacent to many parts of the GraphQL language, a __DirectiveLocation describes one such possible adjacencies."""

    QUERY = "query"
    "Location adjacent to a query operation."
    MUTATION = "mutation"
    "Location adjacent to a mutation operation."
    SUBSCRIPTION = "subscription"
    "Location adjacent to a subscription operation."
    FIELD = "field"
    "Location adjacent to a field."
    FRAGMENT_DEFINITION = "fragment definition"
    "Location adjacent to a fragment definition."
    FRAGMENT_SPREAD = "fragment spread"
    "Location adjacent to a fragment spread."
    INLINE_FRAGMENT = "inline fragment"
    "Location adjacent to an inline fragment."
    VARIABLE_DEFINITION = "variable definition"
    "Location adjacent to a variable definition."
    SCHEMA = "schema"
    "Location adjacent to a schema definition."
    SCALAR = "scalar"
    "Location adjacent to a scalar definition."
    OBJECT = "object"
    "Location adjacent to an object type definition."
    FIELD_DEFINITION = "field definition"
    "Location adjacent to a field definition."
    ARGUMENT_DEFINITION = "argument definition"
    "Location adjacent to an argument definition."
    INTERFACE = "interface"
    "Location adjacent to an interface definition."
    UNION = "union"
    "Location adjacent to a union definition."
    ENUM = "enum"
    "Location adjacent to an enum definition."
    ENUM_VALUE = "enum value"
    "Location adjacent to an enum value definition."
    INPUT_OBJECT = "input object"
    "Location adjacent to an input object type definition."
    INPUT_FIELD_DEFINITION = "input field definition"
    "Location adjacent to an input object field definition."


@strawberry.input
class StringQueryOperatorInput:
    eq: Optional[str]
    ne: Optional[str]
    in_: Optional[List[Optional[str]]]
    nin: Optional[List[Optional[str]]]
    regex: Optional[str]
    glob: Optional[str]


@strawberry.input
class CountryFilterInput:
    code: Optional[StringQueryOperatorInput]
    currency: Optional[StringQueryOperatorInput]
    continent: Optional[StringQueryOperatorInput]


@strawberry.input
class ContinentFilterInput:
    code: Optional[StringQueryOperatorInput]


@strawberry.input
class LanguageFilterInput:
    code: Optional[StringQueryOperatorInput]


@strawberry.type
class Country:
    code: str
    name: str
    native: str
    phone: str
    continent: "Continent"
    capital: Optional[str]
    currency: Optional[str]
    languages: List["Language"]
    emoji: str
    emoji_u: str
    states: List["State"]


@strawberry.type
class Continent:
    code: str
    name: str
    countries: List[Country]


@strawberry.type
class Language:
    code: str
    name: Optional[str]
    native: Optional[str]
    rtl: bool


@strawberry.type
class State:
    code: Optional[str]
    name: str
    country: Country


@strawberry.type
class Query:
    @strawberry.field()
    def _entities(
        self, representations: List[Any]
    ) -> List[Optional[Union[Country, Continent, Language]]]:
        return None

    @strawberry.field()
    def _service(self) -> "_Service":
        return None

    @strawberry.field()
    def countries(self, filter: Optional[CountryFilterInput]) -> List[Country]:
        return None

    @strawberry.field()
    def country(self, code: str) -> Optional[Country]:
        return None

    @strawberry.field()
    def continents(self, filter: Optional[ContinentFilterInput]) -> List[Continent]:
        return None

    @strawberry.field()
    def continent(self, code: str) -> Optional[Continent]:
        return None

    @strawberry.field()
    def languages(self, filter: Optional[LanguageFilterInput]) -> List[Language]:
        return None

    @strawberry.field()
    def language(self, code: str) -> Optional[Language]:
        return None


Country.update_forward_refs()


@strawberry.type
class _Service:
    sdl: Optional[str] = strawberry.field(
        description="The sdl representing the federated service capabilities. Includes federation directives, removes federation types, and includes rest of full schema after schema directives have been applied"
    )
Query.update_forward_refs()
