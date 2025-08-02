import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import UserLogin from './pages/UserLogin'
import UserSingup from './pages/UserSingup'
import CaptainSingup from './pages/CaptainSingup'
import CaptainLogin from './pages/CaptainLogin'

const App = () => {
  return (
    <div> 
     <Routes>
       <Route path='/' element = {<Home/>}/>
        <Route path='/user-login' element = {<UserLogin/>}/>
         <Route path='/user-singup' element = {<UserSingup/>}/>
          <Route path='/captain-singup' element = {<CaptainSingup/>}/>
           <Route path='/captain-login' element = {<CaptainLogin />}/>
     </Routes>

    </div>
  )
}

export default App