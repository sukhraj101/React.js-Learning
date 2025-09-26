import { useEffect, useState } from "react";

export default function UseEffectHook() {



    const [data, setData] = useState(null);

    console.log(data)

    useEffect( () => {
        fetch('https://api.github.com/users')
        .then(response => response.json())
        .then(response => setData(response))
    }, []);

    if(!data) {
        return <div>No records Found!</div>;
    }

    return (
        <ul className="space-y-1 list-disc list-inside">
            {data.map( user => (
                <li key={user.id}>{user.login}</li>
            ))}
            <button onClick={() => setData([])} 
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition">Remove Data</button>
        </ul>
    );

    // const [name, setName] = useState('Jean');

    // useEffect(() => {
    //     console.log(`Congrats ${name}, your name changed!`);
    // });

    // return (
    //     <>
    //         <div className="flex justify-center align-center space-x-3 text-gray-700">
    //             <div className="text-cyan-700 text-center">
    //                 Congratulations {name}!
    //             </div>
    //             <button onClick={() => setName('William')} className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition">Change Name</button>
    //         </div>
    //     </>
    // );
}