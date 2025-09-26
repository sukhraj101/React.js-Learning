import { useRef } from "react";

export default function UseRefHook() {

    const sound = useRef();
    const color = useRef();

    const submit = (e) => {
        e.preventDefault();
        const soundVal = sound.current.value;
        const colorVal = color.current.value;
        alert(`${soundVal} & ${colorVal}`);
        sound.current.value = '';
        color.current.value = '';
    };

    return (
        <>
            <form onSubmit={submit}>
                <input ref={sound} type="text" placeholder="sounds..." className="border-gray-300 rounded"/>
                <input ref={color} type="color" className="border-gray-300 rounded"/>
                <button type="submit" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition cursor-pointer">Add</button>
            </form>
        </>
    );
}