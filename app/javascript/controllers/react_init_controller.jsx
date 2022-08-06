import {Controller} from "@hotwired/stimulus"

import * as React from 'react';
import * as ReactDOM from "react-dom/client";

import Clicker from "../components/Clicker";

// Connects to data-controller="hello-react"
export default class extends Controller {
    connect() {
        console.log("React (connect)", Date.now());
        this.root = ReactDOM.createRoot(this.element);
        this.root.render(<Clicker/>);
    }

    disconnect() {
        console.log("React (disconnect/unmount)", Date.now());
        this.root.unmount();
    }
}
