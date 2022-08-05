module Routes exposing (Route(..), toHref)

import Html exposing (Attribute)
import Html.Attributes exposing (href)


type Route
    = Root
    | Hello


toHref : Route -> Attribute msg
toHref route =
    case route of
        Root ->
            href "/"

        Hello ->
            href "/hello"



-- toString : Route -> String
-- toString route =
--     case route of
--         Root ->
--             "/"
--         Hello ->
--             "/hello"
