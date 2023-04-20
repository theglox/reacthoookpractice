import { useState } from "react";

 export const useForm = (initialForm = {}) => {

            // username:'',
        // email:'',
        // password: '',
    const [formState, setFormState] = useState(initialForm);
    

    const onInputchange = ({target}) =>{
        const {name ,value} = target
        setFormState({
            ...formState,
            [name] : value
        });
    }  

    const onResetForm =()=>{
        setFormState(initialForm)

    }




   return {
    ...formState,
    formState,
    onInputchange,
    onResetForm,

   }
 }
 

 