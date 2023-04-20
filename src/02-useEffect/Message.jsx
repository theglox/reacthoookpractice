import { useEffect, useState } from "react";



export const Message = () => {
    const [coords, setCoords] = useState({x:0, y:0});
    useEffect(() => {
        
      

        //tenemos que crear una referencia  ala funcion o espacio de memoria cdonde esta definida la funcion
        console.log('mesage mounted')
        const onMouseMove = ({x,y}) =>{
           
            console.log(coords)
            setCoords({x,y})
        }
        window.addEventListener('mousemove',onMouseMove);
        return   () => {
            console.log('message unmounted')
            window.removeEventListener('mousemove',onMouseMove);
        }
    }, []);
  return (
    <>
      <h1> El usuario ya existe</h1>
      {JSON.stringify(coords)}
 
    </>
  )
}


