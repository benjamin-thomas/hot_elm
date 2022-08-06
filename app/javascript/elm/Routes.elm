module Routes exposing (Route(..), toHref)

import Html exposing (Attribute)
import Html.Attributes exposing (href)


type Route
    = Root
    | HelloElm
    | HelloReact


toHref : Route -> Attribute msg
toHref route =
    case route of
        Root ->
            href "/"

        HelloElm ->
            href "/hello_elm"

        HelloReact ->
            href "/hello_react"
