import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Category() {
    const { catId } = useParams();
    const [categoryList, setCategoryList] = useState([]);

    useEffect(() => {
        const fetchCategoryData = async () => {
            try {
                const response = await fetch(`https://api.example.com/categories/${catId}`);
                const data = await response.json();
                setCategoryList(data); // Update state with the fetched data
            } catch (error) {
                console.error("Error fetching category data:", error);
            }
        };

        fetchCategoryData();
    }, [catId]); // Re-run the effect if the category ID changes

    return (
        <>
            <h1>Category: {catId}</h1>
            {categoryList.length > 0 ? (
                <ul className="list-items">
                    {categoryList.map((item) => (
                        <li key={item.id}>{item.name}</li>
                    ))}
                </ul>
            ) : (
                <p>Loading...</p>
            )}
        </>
    );
}

export default Category;
