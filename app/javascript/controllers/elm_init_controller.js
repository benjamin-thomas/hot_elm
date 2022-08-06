import {Elm} from '../elm/Main.elm';
import {Controller} from "@hotwired/stimulus"

// Connects to data-controller="elm-init"
export default class extends Controller {
    connect() {
        console.log(new Date(), "Connecting Elm node");
        if (this.init === undefined) {
            console.log(new Date(), "Initializing Elm node");
            this.init = Elm.Main.init({node: this.element});
        } else {
            console.log(new Date(), "Reusing Elm node");
        }
    }

    disconnect() {
        // this.element.remove();
    }
}
