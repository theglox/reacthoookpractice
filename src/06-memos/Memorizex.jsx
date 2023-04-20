import { useContext, useState } from "react"
import { useCounter } from "../hooks/UseCounter"
import { Small } from "./Small";




export const Memorizex = () => {
    const {counter, increment} = useCounter(10);
    const [show, setShow] = useState(true);
  return (
    <>
        <h1>Counter:  <Small value={counter}/>  </h1>
        <hr />
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
