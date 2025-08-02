import React from 'react'
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const UserLogin = () => {
  
     const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const onsubmit = (data) => {
        console.log(data);
      };
    
 

  return (
     <div className=" h-screen">
                <Link to = "/" >
                         <img className='w-16 ml-5 mt-5 ' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
                        </Link>
        <div className='flex  flex-col justify-around h-screen' >
              <form className=" px-5 " onSubmit={handleSubmit(onsubmit)}>
        
            <div className="mb-7 ">
              <h3 className="font-medium text-lg mb-2">What's your email</h3>
              <input
                {...register("email", {
                  required: "email is required",
                  minLength: {
                    value: 5,
                    message: " minimum 5 character required",
                  },
                })}
                placeholder="jhona@email.com"
                type="email"
                className="p-1   bg-[#eeeeee] py-2 w-full"
              />
              {errors.email && (
                <p className="text-red-600 text-sm">{errors.email.message}</p>
              )}
            </div>
    
            <div className="mb-7">
              <h3 className="font-medium text-lg mb-2">Enter Password</h3>
              <input
                {...register("password", {
                  required: "password is required",
                  minLength: {
                    value: 6,
                    message: " minimum 6 character required",
                  },
                })}
                placeholder="password"
                type="password"
                className="p-1   bg-[#eeeeee] py-2 w-full"
              />
              {errors.password && (
                <p className="text-red-600 text-sm">{errors.password.message}</p>
              )}
            </div>
    
            <button className="bg-black rounded text-white w-full py-2 active:scale-105 mb-3">
              Login
            </button>
    
            <p className="text-center" >
              Don't have an account ? <Link className="text-blue-500" to="/user-singup">Singup here</Link>
            </p>
          </form>
          <div className=" px-15" >

            <Link
              to="/captain-singup"
            className=' flex items-center justify-center w-full rounded py-2 active:scale-105 mb-3 bg-green-500' >
        Register as a captain
            </Link>
          </div>
        </div>
        </div>
  )
}

export default UserLogin