import { useContext, useMemo, useState } from "react"
import { useCounter } from "../hooks/UseCounter"


const heavyStuff = (it=100)=>{
    for (let index = 0; index < it; index++) {
        console.log('ahi vamos')
        
    }

    return `${it} : iteraciones realizadas`

}


export const MemorizeHook = () => {
    const {counter, increment} = useCounter(10);
    const [show, setShow] = useState(true);
    const messageMemorizedValue = useMemo(() => heavyStuff(counter), [counter]);
    
  return (
    <>
        <h1>Counter: <small> {counter }</small>    </h1>
        <hr />
        <h4>{messageMemorizedValue}</h4>
        <button
            className="btn btn-primary"
            onClick={increment}
        >
            +1
        </button>

        <button
            className="btn btn-primary"
            onClick={() => setShow(!show)}
        >
                show/hide : {JSON.stringify(show)}
        </button>
      
   
        

    </>
  )
  }
