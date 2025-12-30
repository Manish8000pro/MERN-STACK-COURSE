function Food({foods}){


    return(
        <>
        <ul>
            {foods.map(foods=><li>{foods}</li>)}
        </ul>
        </>
    )
}

export default Food;