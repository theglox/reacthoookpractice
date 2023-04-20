
import { useCounter } from "../hooks/UseCounter"


export const CounterWitCustomHook = () => {

    const {counter,increment,decrement,reset} = useCounter();


  return (
    <>

    <h1>Counter wih Hook . . . {counter}</h1>
    <hr />

    <button className="btn btn-outline-secondary" onClick={increment} >+1</button>
    <button className="btn btn-outline-secondary" onClick={reset} >Reset</button>   
    <button className="btn btn-outline-secondary"  onClick={decrement}>-1</button>   
    </>
  )
}


