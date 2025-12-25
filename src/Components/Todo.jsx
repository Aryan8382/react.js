import React, { useState } from "react";

export default function Todo() {
    const [text, setText] = useState("");
    const [state, setState] = useState([]);
    const [edit, setEdit] = useState(null);

    function addText(e) {
        setText(e.target.value);
    }

    function HandleSubmit(e) {
        e.preventDefault();
        if (text.trim() === "") return;

        if (edit !== null) {
            const updated = [...state];
            updated[edit] = text;
            setState(updated);
            setEdit(null);
            setText("");
        }
        else {
            setState([...state, text]);
            setText("");
        }
    }

    function deleteBtn(id) {
        const deleted = state.filter((el, i) => i !== id);
        setState(deleted);
    }

    function editBTn(i) {
        setText(state[i]);
        setEdit(i);
    }

    return (
        <div>
            <h1>Todo app</h1>

            <form onSubmit={HandleSubmit}>
                <input type="text" placeholder="enter the name" value={text} onChange={addText} />
                <input type="submit" />
            </form>

            {state.map((el, i) => {
                return (
                    <div key={i}>
                        <li>{el}</li>
                        <button onClick={() => deleteBtn(i)}>delete</button>
                        <button onClick={() => editBTn(i)}>edit</button>
                    </div>
                );
            })}
        </div>
    );
}