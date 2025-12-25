import React, { useState } from 'react'
import Child from './Child'

export default function Props() {
    const [state, setState] = useState({
        name: "aryan",
        email: "aryan@gmail.com"
    });

    return (
        <div>
            <h1>parent comp</h1>
            <p>{state.name}</p>
            <Child data={state} />

        </div>
    );
}