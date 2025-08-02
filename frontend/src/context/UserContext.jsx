import React, { createContext, useState } from 'react'

export const UserDataContext = createContext()


const UserContext = ({children}) => {
   
     const [user, setuser] = useState({
        email : "" ,
        fullname : {
            firstname : "" ,
            lastname : ""
        }

     })
     
  return (
    <div>
      <UserDataContext.Provider value={[user,setuser]} >

      </UserDataContext.Provider>
    </div>
  )
}

export default UserContext