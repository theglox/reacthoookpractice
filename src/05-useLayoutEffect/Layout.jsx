import { useState } from "react";
import { CardRender } from "../03-examples/CardRender";
import { LoadingQuote } from "../03-examples/LoadingQuote";
import { useFetch } from "../hooks/useFetch"


export const Layout = () => {

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


