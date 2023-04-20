import { useState } from "react";
import { useFetch } from "../hooks/useFetch"
import { CardRender } from "./CardRender";
import { LoadingQuote } from "./LoadingQuote";

export const MultipleCustomHoocks = () => {

    const [nextpj, setNextpj] = useState(1);

    const {data,isLoading,hasError} = useFetch(`https://thronesapi.com/api/v2/Characters/${nextpj}`);
    

    const nextCharacter =()=>{
        setNextpj(nextpj+1)
    }
    
    console.log({data,isLoading,hasError})
    const datos=!!data && data

  return (
    <>
    
        <h1>Game Of Thrones API</h1>
        <hr />

        {
            isLoading ?     <LoadingQuote/> :  <CardRender data={datos}/>
               
        }

        <button 
            className="btn btn-primary"
            onClick={nextCharacter}
            disabled= {isLoading} >
        Next pj
       </button>


    </>
  )
}


