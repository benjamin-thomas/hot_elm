// app/javascript/components/Clicker.jsx

import * as React from "react";
import {useState} from "react";

export default function Clicker(props) {
    const [count, setCount] = useState(props.count);

    function inc() {
        const newCount = count + 1;
        setCount(newCount);
        props.onCountChanged(newCount);
    }

    function dec() {
        const newCount = count - 1;
        setCount(newCount);
        props.onCountChanged(newCount);
    }

    function resetState() {
        setCount(props.count);
        props.onCountChanged(props.count);
    }

    return (
        <>
            <button onClick={dec}>-</button>
            <button onClick={inc}>+</button>
            <br/>
            <button onClick={resetState}>Reset state!</button>

            <h3>COUNT={count}</h3>
        </>
    )
}