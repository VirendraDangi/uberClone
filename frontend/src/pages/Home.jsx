import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <div className=' bg-cover bg-[url("https://images.unsplash.com/photo-1557404763-69708cd8b9ce?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] pt-5  h-screen w-full flex justify-between bg-red-400 flex-col' >
            <img className='w-16 ml-3' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
           <div className='bg-white py-5 px-5 ' >
             <h2 className='text-2xl font-bold text-center' >Getting started with uber</h2>
            <Link to="/user-singup" className=' flex items-center justify-center active:scale-105 w-full bg-black text-white py-2 rounded-md mt-3 text-xl' >continue</Link>
           </div>
        </div>
    </div>
  )
}

export default Home