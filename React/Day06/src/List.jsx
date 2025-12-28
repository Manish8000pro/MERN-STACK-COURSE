import { useState } from "react";

function List(){
    const [foodItems,setFoodItems] = useState(["Apple","Orange","Banana"]);

    function handleChange(){
        setFoodItems(["Mango",...foodItems])
    }


    return(
        <>
        <button onClick={handleChange}>Increment</button>
        <Food></Food>
        </>
    )
}