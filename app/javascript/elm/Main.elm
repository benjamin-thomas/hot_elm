module Main exposing (main)

import Browser
import Html exposing (a, br, button, div, span, text)
import Html.Events exposing (onClick)
import Routes exposing (toHref)



-- MAIN


main : Program () Model Msg
main =
    Browser.sandbox { init = init, update = update, view = view }



-- MODEL


type alias Model =
    Int


init : Model
init =
    0



-- UPDATE


type Msg
    = Inc
    | Dec


update : Msg -> Model -> Model
update msg model =
    case msg of
        Inc ->
            model + 1

        Dec ->
            model - 1


view : Model -> Html.Html Msg
view model =
    div []
        [ button [ onClick Dec ] [ text "-" ]
        , span [] []
        , button [ onClick Inc ] [ text "+" ]
        , div []
            [ text ("Current count: " ++ String.fromInt model)
            , br [] []
            , br [] []
            , div []
                [ text "Go to: "
                , a [ Routes.Hello |> toHref ] [ text "Hello from Elm!" ]
                ]
            ]
        ]
