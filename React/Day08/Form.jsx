import { useForm } from "react-hook-form";
import React from "react";

function Form(){
    
    const {register,handleSubmit} = useForm();


    function submitForm(data){
        console.log(data);
    }
    console.log("render");

    return(
        <>
        <form onSubmit={handleSubmit(submitForm)}>
        <div>
            <label htmlFor="first">Name:</label>
            <input type="text" id="first" {...register('name')} />
        </div>
        <div>
            <label htmlFor="second">Age:</label>
            <input type="number" id="second" {...register('age')} />
        </div>
        <div>
            <label htmlFor="third">Password:</label>
            <input type="password" id="third" {...register('password')} />
        </div>
        <button type="submit">Submit</button>
        </form>
        </>
    )
}
export default Form;