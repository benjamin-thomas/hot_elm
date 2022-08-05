import { Elm } from '../elm/Main.elm';
import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="elm-initializer"
export default class extends Controller {
    static values = { lineItems: Array }

    connect() {
        let node = this.element;

        Elm.Main.init({ node: node, flags: { lineItems: this.lineItemsValue } });
    }
}
