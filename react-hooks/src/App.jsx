import React, { useContext } from 'react';
import { useState } from 'react';
import Rating from './components/rating';
import UseEffectHook from './components/useEffect-hook';
import UseReducerHook from './components/useReducer-hook';
import UseRefHook from './components/useRef-hook';
import CustomHook from './components/custom-hooks';
import { TreesContext } from './main'
import { useFetch } from './components/use-fetch';



function App() {
  const [status, setStatus] = useState(false);
  const [delivery, setDelivery] = useState('Pending');
  const [rating, setRating] = useState(3);

  const {trees} = useContext(TreesContext);

  const [first] = [...trees];
  console.log(first.type);

  const login = 'sukhraj101'
  const {loading, data, error} = useFetch(`https://api.github.com/users/${login}`)

  return (
    
    <>

    {loading && <p>Loading...</p>}
    {error && <pre>{JSON.stringify(error, null, 2)}</pre>}
    {/* {data && <pre>{JSON.stringify(data, null, 2)}</pre>} */}

    {data && <div>
        <div>{data.login}</div>
        {data.name && <div>{data.name}</div>}
        {data.avatar_url && <img src={data.avatar_url} alt={data.name} />}
      </div>}


    <UseRefHook />
    <h2>Custom Hooks</h2>
    <CustomHook />
   <div className="App min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md space-y-6">
        
        {/* Title */}
        <h1 className="text-2xl font-bold text-center text-gray-800">Hello World!</h1>

        {/* Checkbox */}
        <label htmlFor="ageCheck" className="flex items-center space-x-3 text-gray-700">
          <input
            id="ageCheck"
            onChange={() => setStatus(!status)}
            type="checkbox"
            checked={status}
            name="age"
            className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <span>Check this box if you are 18+</span>
        </label>

        {/* Delivery status */}
        <div className="space-y-2">
          <h2 className="text-lg font-semibold text-gray-700">Delivery Status: <span className="font-normal">{delivery}</span></h2>
          <button
            onClick={() => setDelivery("Delivered")}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition"
          >
            Set Status
          </button>
        </div>

        {/* Rating Section */}
        <div className="flex items-center space-x-4">
          <button onClick={() => {if (rating > 0) setRating(rating - 1)}} className="text-xl px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded">-</button>

          <Rating rating={rating} />

          <button onClick={() => {if (rating < 5) setRating(rating + 1)}} className="text-xl px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded">+</button>
        </div>
      </div>
    </div>
    <UseEffectHook />
    <UseReducerHook />

    <h2>Data from Context API</h2>
 {trees && (
  <ul>
    {trees.map((tree, index) => (
      <li key={index}>{tree.type}</li>  
    ))}
  </ul>
)}

    </>
  );
}

export default App;
