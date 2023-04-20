import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";




export const useTodo = ([]) => {

 
    const init =()=>{
        return JSON.parse(localStorage.getItem('todos')) || []
    }
        const [todos, dispatch] = useReducer(todoReducer,[],init); ///todos es el estado desctructurado que esta recibienbdo del odoReducer
        
        useEffect(() => {
            //serializar  ya que el local storage solo lee strings no objetos 
            localStorage.setItem('todos',JSON.stringify(todos))
        }, [todos]);
        
        const handleNewTodo = (todo) =>{
            console.log(todo)
            const action ={
                type: '[TODO] Add todo',
                payload: todo
            }
            dispatch(action)
        }
        const handleDeleteTodo =(id)=>{
            const action ={
                type: '[TODO] Remove todo',
                payload: id
            }
            dispatch(action)
        }
        const handleToggleTodo =(id)=>{
            const action ={
                type: '[TODO] Toggle todo',
                payload: id
            }
            dispatch(action)
        }


  return {
    ...todos,
    todos,
    todosCount:todos.length,
    todosPending: todos.filter(todo => !todo.done).length,
    handleNewTodo,handleDeleteTodo,handleToggleTodo
  }
}


