import { useForm } from "../hooks/useForm"




export const TodoAdd = ({onNewTodo}) => {

//hook personalisado
const {description,onInputchange,onResetForm} =useForm({
    description :''
})
    const onFormSubmit= (event)=>{
        event.preventDefault();
       if(description.length <=1) return;
       const newTodo = {
            id: new Date().getTime(),
            done:false,
            description:description,
       }

     onNewTodo(newTodo) //verificamos que la funcion exista
     onResetForm();
    }
  return (
    <form onSubmit={onFormSubmit}>
        <input 
            type="text"
            placeholder='¿que hay que hacer?'
            className='form-control'
            name="description"
            value={description}
            onChange={onInputchange}
        />
        <button 
            type='submit'
            className='btn btn-outline-primary mt-1'
        >
            Agregar
        </button>
    </form>

  )
}

