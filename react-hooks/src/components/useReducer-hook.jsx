import { useReducer } from "react";

export default function UseReducerHook() {
    const [number, setNumber] = useReducer(
        (number, newNumber) => number + newNumber, 
        0
    );

    const [checked, toggle] = useReducer(
        (checked) => !checked,
        false
    )

    return (
        <>
        <h1>{number}</h1>
        
        <button onClick={() => setNumber(2)}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition cursor-pointer">Add</button>
        <br/>
        <label htmlFor="checkBox" className="mb-6">
            <input type="checkbox" id="checkBox" checked={checked} onChange={toggle} />
            <span>{ checked ? "checked" : "not checked" }</span>
        </label>

        </>
    )
}