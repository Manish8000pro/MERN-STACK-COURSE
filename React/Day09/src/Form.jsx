import { useForm } from "react-hook-form";
import React from "react";


function Form(){
    
    const {register,handleSubmit,formState: { errors }} = useForm();


    function submitForm(data){
        console.log(data);
    }
    console.log("render");

    return(
        <>
        <form onSubmit={handleSubmit(submitForm)}>
        <div>
            <label htmlFor="first">Name:</label>
            <input type="text" id="first" {...register('name',
                {required:"Name can't be empty"}
            )} />
            {errors.name&&<span>{errors.name.message} </span>}
        </div>
        <div>
            <label htmlFor="second">Age:</label>
            <input type="number" id="second" {...register('age',
                {
                    min:{
                        value:10,
                        message:"Minimum Age should bo 10"
                    },
                    max:{
                        value:80,
                        message:"Maximum Age should bo 80"
                    }
                }
            )} />
            {errors.age&&<span>{errors.age.message} </span>}
        </div>
        <div>
            <label htmlFor="third">Password:</label>
            <input type="password" id="third" {...register('password',
                {
                    minLength:{
                        value:5,
                        message:"Minimum Length should bo 5"
                    },
                    maxLength:{
                        value:80,
                        message:"Maximum Length should bo 20"
                    }
                }
            )} />
            {errors.password&&<span>{errors.password.message} </span>}
        </div>
        <button type="submit">Submit</button>
        </form>
        </>
    )
}
export default Form;