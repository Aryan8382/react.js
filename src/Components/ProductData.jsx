import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ProductData() {
    const [state, setState] = useState([]);

    useEffect(() => {
        fetch();
    }, []);

    async function fetch() {
        const res = await axios.get("http://localhost:3001/users");
        setState(res.data);
    }

    return (
        <div>
            <h1>Users List</h1>

            {state.map((el, i) => {
                return (
                    <li key={i}>
                        {el.name}
                    </li>
                );
            })}
        </div>
    );
}
