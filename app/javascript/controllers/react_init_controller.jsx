import {Controller} from "@hotwired/stimulus"

import * as React from 'react';
import * as ReactDOM from "react-dom/client";

import Clicker from "../components/Clicker";

// Connects to data-controller="hello-react"
export default class extends Controller {
    initialize() {
        console.log(new Date(), "React (init)");
        this.root = ReactDOM.createRoot(this.element);
        this.root.render(<Clicker/>);
    }

    connect() {
        console.log(new Date(), "React (connect)");
        this.root.render(<Clicker/>);
    }

    disconnect() {
        this.root.unmount();
    }

    unmount() {
        console.log(new Date(), "React (teardown/unmount)");
        this.root.unmount();
    }
}
