import {Elm} from '../elm/Main.elm';
import {Controller} from "@hotwired/stimulus"

// Connects to data-controller="elm-initializer"
export default class extends Controller {
    connect() {
        Elm.Main.init({ node: this.element });
    }
}
