import * as React from "react";
import {useState} from "react";

export default function Clicker() {
    const [count, setCount] = useState(0);
    const [incBy, setIncBy] = useState(2);

    const defaultBtnClass = "btn btn--dark";
    const actionBtnClass = "btn btn--secondary";

    function inc() {
        setCount(count + incBy);
    }

    function dec() {
        setCount(count - incBy);
    }

    return (
        <>
            <button className={defaultBtnClass} onClick={dec}>-</button>
            <span style={{marginLeft: "5px"}}></span>
            <button className={defaultBtnClass} onClick={inc}>+</button>

            <label style={{marginLeft: "50px"}}>Increment counter values by</label>
            <input style={{width: "60px", marginLeft: "10px"}} type="number" value={incBy}
                   onChange={e => setIncBy(Number(e.target.value))}/>

            <br/>
            <br/>
            <pre>
                {JSON.stringify({count, incBy})}
            </pre>
            <br/>

            <p>
                Go to: <a href="/hello_elm">Hello Elm from React!</a>
                Or press this button: <button className={actionBtnClass}>Reset state!</button>
            </p>

        </>
    )
}