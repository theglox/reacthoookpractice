import { useEffect, useState } from "react"
import {Message} from "./Message";


export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        username:'diego',
        email:'diego@googlce.co'
    });
    const {username,email} = formState;
    const onInputchange = ({target}) =>{
        const {name ,value} = target
        setFormState({
            ...formState,
            [name] : value
        });
    }  


    useEffect(() => {
        console.log('useeffect invocado')
    }, [formState]);
  return (
    <>
      <h1>Formulario simple</h1>
      <hr />

      <input 
        type="text"
        className="form-control"
        placeholder="Username"
        name="username" 
        value={username}
        onChange = {onInputchange}
      />

      <input 
        type="email"
        className="form-control mt-2"
        placeholder="diego@google.com"
        name="email" 
        value={email}
        onChange = {onInputchange}
      />
        {username === 'diego2' && <Message/>}
        






    </>
    
  )
}

