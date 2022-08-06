module Main exposing (main)

import Browser
import Html exposing (a, br, button, div, input, label, p, span, text)
import Html.Attributes exposing (class, id, style, type_, value)
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
    , incBy = 1
    }



-- UPDATE


type Msg
    = Inc
    | Dec
    | Reset
    | ChangedIncBy String


positive n =
    if n <= 0 then
        1

    else
        n


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
            { model | incBy = positive incBy }


defaultBtnClass : Html.Attribute msg
defaultBtnClass =
    class "btn btn--dark"


actionBtnClass : Html.Attribute msg
actionBtnClass =
    class "btn btn--secondary"


view : Model -> Html.Html Msg
view model =
    div []
        [ button [ defaultBtnClass, onClick Dec ] [ text "-" ]
        , span [ style "margin-left" "5px" ] []
        , button [ defaultBtnClass, onClick Inc ] [ text "+" ]
        , label [ style "margin-left" "50px" ] [ text "Increment counter values by" ]
        , input
            [ style "margin-left" "10px"
            , style "width" "60px"
            , type_ "number"
            , onInput ChangedIncBy
            , value (String.fromInt model.incBy)
            ]
            []
        , div [ class "bundle" ]
            [ text ("Current count: " ++ String.fromInt model.count)
            , br [] []
            , text ("increment values by: " ++ String.fromInt model.incBy)
            , br [] []
            , br [] []
            , div []
                [ text "Go to: "
                , a [ Routes.Hello |> toHref ] [ text "Hello from Elm!" ]
                , text " Or press this button: "
                , button [ actionBtnClass, onClick Reset ] [ text "Reset model!" ]
                ]
            ]
        ]
