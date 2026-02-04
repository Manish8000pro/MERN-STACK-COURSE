import { useForm } from "react-hook-form";
import React from "react";
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod'

const formSchema = z.object ( {
    name:z.string().min(3,"Minimum Length should be 5").max(20,"Maximum Lenght should be 20"),
    age:z.coerce.number().min(10,"Minimum age should be 10").max(90,"Maximum age should be 90"),
    password:z.string().min(5,"Minimum Length should be 5").max(10,"Maximum length should be 10"),
    confirm:z.string(),
    email: z.string("Email is invalid")
})
.refine((data) => data.password === data.confirm,{
    message: "Passwords do not match",
    path: ["confirm"],
  });

function ZodForm(){
    
    const {register,handleSubmit,formState: { errors }} = useForm({
        resolver:zodResolver(formSchema)
    });


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
            {errors.name&&<span>{errors.name.message} </span>}
        </div>
        <div>
            <label htmlFor="fourth">Email:</label>
            <input id="fourth" {...register('email')} />
            {errors.email&&<span>{errors.email.message} </span>}
        </div>
        <div>
            <label htmlFor="second">Age:</label>
            <input  id="second" {...register('age')} />
            {errors.age&&<span>{errors.age.message} </span>}
        </div>
        <div>
            <label htmlFor="third">Password:</label>
            <input type="password" id="third" {...register('password')} />
            {errors.password&&<span>{errors.password.message} </span>}
        </div>
        <div>
            <label htmlFor="fifth">Confirm Password:</label>
            <input type="password" id="fifth" {...register('confirm')} />
            {errors.confirm&&<span>{errors.confirm.message} </span>}
        </div>
        
        <button type="submit">Submit</button>
        </form>
        </>
    )
}
export default ZodForm;