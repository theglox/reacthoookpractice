import { useState } from "react"

import { UserContext } from "./UserContext"

// const user = {
//     id:123,
//     name: 'Diego Andres',
//     Email: 'diego@coreo.co'
// }
const UserProvider = ({children}) => { //loc componented de alto nivelreciben los hijos por ejemplo los pahs de router

    const [user, setUser] = useState();
  return (
    //le proporcionamos toda la informacion qu el user context va a proporcionar alarbl de nuestros componente 
    <UserContext.Provider value ={{user,setUser}}>
        {/* //rederizmos los componentes hijos */}
        {children} 
    </UserContext.Provider>
  )
}

export default UserProvider
