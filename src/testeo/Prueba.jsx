
import { useImperativeHandle, useState } from "react"
import { Footer } from "./Footer"
import { Homa } from "./Homa";
import Principal from "./Principal";

export const Prueba = () => {
      const [formState, setformState] = useState({
        submit:false,
        Message:"",
      });
      const {submit,Message} = formState
      
      const changestate =(value)=>{
        setformState({
          ...formState,
          ['Message']:value,
          ['submit']:true

        })
      }

    return (
      <>
    
			<div className="jumbotron bg-dark text-center text-white ">
				<h1 > My web aplication  </h1>
			</div>


      <div className="row align-items-center justify-content-center vh-100">
        {(submit==false)?<Principal onInput ={ value =>changestate(value)} />:  <Homa Message={Message}/>}
      </div>
      
      <Footer></Footer>
         
      </>
    )
  }
  
  
  


//   // 1. To import React Hooks use: React.useState()
// // 2. To add Fragments use: <React.Fragment></React.Fragment>
// // 3. You can use bootstrap 5 and CSS
// const {
// 	// you can add others functions of react-router-dom here:
// 	HashRouter
// } = ReactRouterDOM


// // You can add other components here

// const ShowMessage = (props) => {
// 	const [imageUrl, setImageUrl] = React.useState(null);

// 	const printImage = () => {
// 		var image = document.getElementById("image-url");
// 		setImageUrl(image.value);
// 	};

// 	return (
// 		<div>
// 		</div>
// 	);
// };



// const App = () => {
// 	return (
// 		<div>
// 			hello
// 		</div>
// 	)
// }