import React, { useState } from 'react'
import { Homa } from './Homa'
import { Prueba } from './Prueba'

const Principal = ({onInput}) => {
     const [formState, setformState] = useState({
        Message:'',
        submit:false,
      });
      const {Message} = formState
      
      const onInpuChange = ({target})=>{
         const {name,value} = target
         setformState({
          ...formState,
          [name]:value,
        })

      };

      const printMessage =(event)=>{
        event.preventDefault();
        console.log(Message)
        onInput(Message)
      }

  return (
    <>
             
     
     <form 
       className="translate-middle "
        onSubmit={printMessage}
       >
           <input type="text" 
           placeholder="Enter Message"
           className="form-control"
           name="Message"
           id="input-message"
           value={Message}
           onChange={onInpuChange}/>

           <button 
               type="submit"
               className="btn btn-dark  mx-auto d-block mt-3"
           >
               Show mesage
           </button>
       </form>

    </>
  )
}

export default Principal
