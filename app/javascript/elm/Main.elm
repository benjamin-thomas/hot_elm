module Main exposing (main)

import Browser
import Html exposing (a, br, button, div, input, label, span, text)
import Html.Attributes exposing (id, type_, value)
import Html.Events exposing (onClick, onInput)
import Routes exposing (toHref)



-- MAIN


main : Program () Model Msg
main =
    Browser.sandbox { init = init, update = update, view = view }



-- MODEL


type alias Model =
    { count : Int
    , incBy : Int
    }


init : Model
init =
    { count = 0
    , incBy = 2
    }



-- UPDATE


type Msg
    = Inc
    | Dec
    | Reset
    | ChangedIncBy String


update : Msg -> Model -> Model
update msg model =
    case msg of
        Inc ->
            { model | count = model.count + model.incBy }

        Dec ->
            { model | count = model.count - model.incBy }

        Reset ->
            { model | count = 0, incBy = 1 }

        ChangedIncBy str ->
            let
                incBy =
                    Maybe.withDefault 1 (String.toInt str)
            in
            { model | incBy = incBy }


view : Model -> Html.Html Msg
view model =
    div []
        [ button [ onClick Dec ] [ text "-" ]
        , span [] []
        , button [ onClick Inc ] [ text "+" ]
        , div []
            [ text ("Current (esbuild) count: " ++ String.fromInt model.count)
            , br [] []
            , text ("incBy=" ++ String.fromInt model.incBy)
            , br [] []
            , br [] []
            , label [] [ text "Increment counter by" ]
            , input [ type_ "number", onInput ChangedIncBy, value (String.fromInt model.incBy) ] []
            , br [] []
            , br [] []
            , div []
                [ text "Go to: "
                , a [ Routes.Hello |> toHref ] [ text "Hello from Elm!" ]
                , text " Or reset: "
                , button [ id "counter-reset", onClick Reset ] [ text "here" ]
                ]
            ]
        ]
