import { useRef } from "react"


export const FocusScreen = () => {

 const inputRef= useRef();

const  onclick = ()=>{
    console.log(inputRef)
    inputRef.current.select()
}


  return (
    <>
      <h1>Focus Screen0</h1>
      <br />

      <input 
        ref={inputRef}
        type="text"
        placeholder="Ingrese su nombre"
        className="form-control"
        />

        <button 
        className="btn btn-primary mt-2"
        onClick={onclick}
        >
            Set focus
        </button>   
    </>
  )
}


