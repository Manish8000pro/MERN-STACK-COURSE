import React from "react";

const Sum = React.memo(({number})=>{
    function calculateSum(){

        let Sum = 0;

        for(let i=1;i<=number;i++){
            Sum+=i;
        }

        return Sum;
    }

    const total = calculateSum();
    console.log("sum render")

    return(
        <>
        <h1>This is Our Math Library</h1>
        <h2>Sum:{total} </h2>
        </>
    )

})


export default Sum;