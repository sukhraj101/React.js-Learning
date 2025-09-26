import { useRef } from "react";
import { useInput } from "./use-input";

export default function CustomHook() {

    const [titleProps, resetTitle] = useInput("");
    const [colorProps, resetColor] = useInput("#000000");

    const submit = (e) => {
        e.preventDefault();
        alert(`${titleProps.value} & ${colorProps.value}`);
        resetTitle();
        resetColor();
    };

    return (
        <>
            <form onSubmit={submit}>
                <input {...titleProps} type="text" placeholder="sounds..." className="border-gray-300 rounded"/>
                <input {...colorProps} type="color" className="border-gray-300 rounded"/>
                <button type="submit" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition cursor-pointer">Add</button>
            </form>
        </>
    );
}