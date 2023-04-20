import { useLayoutEffect, useRef, useState } from "react"


export const CardRender = ({data}) => {
   
    const {family,fullName,imageUrl,title}=data //con el !! paso el undefined a false que me arroja a principio pla peticion  si es true me arroja los datos
    console.log(data)
     const iRef = useRef();
     const [boxSize, setBoxSize] = useState({width:0,height:0});

    useLayoutEffect(() => {
      console.log(iRef.current.getBoundingClientRect())
      const {height,width} = iRef.current.getBoundingClientRect()
      setBoxSize({height,width})

    }, [imageUrl]);
  return (
    <>
         <div >
            <img className="card-img-top" ref={iRef} style={{display:'flex'}} src={imageUrl} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{fullName}</h5>
          
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item"> familia : {family}</li>
                <li className="list-group-item">titulo : {title }</li>
           
            </ul>
     </div>

     <code>{JSON.stringify(boxSize)}</code>
     <hr />
    </>
  )
}

