import { useEffect } from "react"
import { useForm } from "../hooks/useForm";


export const FormWithCustomHook = () => {
// custom hooks
  const {formState,onInputchange,username,email,password,onResetForm} = useForm({
    username:'',
    email:'',
    password: '',
  })



  /// funciones



 //const {username,email,password} = formState
  return (
    <>
      <h1>Formulario con custom Hook</h1>
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

      <input 
        type="password"
        className="form-control mt-2"
        placeholder="******"
        name="password" 
        value={password}
        onChange = {onInputchange}
      />

      <button
      className="btn btn-primary mt-2"
      onClick={onResetForm}
      >Reset</button>




    </>
    
  )
}

