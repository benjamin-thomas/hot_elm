// app/javascript/controllers/react_init_controller.jsx

import {Controller} from "@hotwired/stimulus"

import * as React from 'react';
import * as ReactDOM from "react-dom/client";

import Clicker from "../components/Clicker";

/*
    Usage:

        <div
            data-turbo-cache="true"
            data-controller="react-init"
            data-react-init-count-value="123"
        ></div>
*/
export default class extends Controller {
    static values = {
        count: Number
    }

    connect() {
        console.log(new Date(), "Connecting with value: ", this.countValue);
        this.root = ReactDOM.createRoot(this.element);
        this.root.render(<Clicker count={this.countValue} onCountChanged={ (val) => this.countValue = val }/>);
    }

    disconnect() {
        this.root.unmount();
    }

    countValueChanged(val, prevVal) {
        console.log("new value:", this['countValue'], "val:", val, "prevVal:", prevVal);
    }
}
