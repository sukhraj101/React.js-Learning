// if the data isn't available yet but loading
// if we got the data
// if we got a error

import { useState, useEffect } from 'react';

export function useFetch(uri) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        fetch(uri)
        .then((response) => response.json())
        .then((response) => {
            setData(response);
            setLoading(false);
        })
        .catch((err) => {
            setError('Error fetching data');
            setLoading(false);
        });
    }, [uri])

    return { loading, data, error };
}
