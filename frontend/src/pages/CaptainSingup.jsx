import React from 'react'
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const CaptainSingup = () => {
  
   const {
           register,
           handleSubmit,
           formState: { errors },
         } = useForm();
       
         const onsubmit = (data) => {
           console.log(data);
         };
   
  return (
    <div>
        <div className="flex  flex-col justify-between h-screen">
            <Link to = "/" >
                     <img className='w-16 ml-5 mt-5 ' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
                    </Link>
      <form className=" px-5 " onSubmit={handleSubmit(onsubmit)}>
        <h3 className="font-medium text-lg mb-2">What's our captain name</h3>
        <div className="flex gap-x-6 w-[300px]">
          <div className="flex flex-col w-1/2 mb-7 ">
            <input
              id="firstname"
              {...register("firstname", {
                required: "First name is required",
                minLength: {
                  value: 3,
                  message: "Minimum 3 characters required",
                },
              })}
              placeholder="John"
              type="text"
              className="p-1   bg-[#eeeeee] py-2"
            />
            {errors.firstname && (
              <p className="text-red-600 text-sm">{errors.firstname.message}</p>
            )}
          </div>

          <div className="flex flex-col w-1/2">
            {/* <label htmlFor="lastname" className="text-sm mb-1">Last Name</label> */}
            <input
              id="lastname"
              {...register("lastname", {
                minLength: {
                  value: 3,
                  message: "Minimum 3 characters required",
                },
              })}
              placeholder="Roger"
              type="text"
              className="p-1   bg-[#eeeeee] py-2"
            />
            {errors.lastname && (
              <p className="text-red-600 text-sm">{errors.lastname.message}</p>
            )}
          </div>
        </div>

        <div className="mb-7 ">
          <h3 className="font-medium text-lg mb-2">What's our captain email</h3>
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
          Singup
        </button>

        <p className="text-center" >
          Already have an captain account ? <Link className="text-blue-500" to="/captain-login">Login here</Link>
        </p>
      </form>
      <div className="flex flex-col justify-items-end px-15" >
        <p className="text-[10px] leading-3  pb-10" >
        by proceeding, you consent to get calls, WhatsApp or SMS
        messages including by automated means, from uber and 
        its affiliates to the number provided 
      </p>
      </div>
    </div>
    </div>
  )
}

export default CaptainSingup