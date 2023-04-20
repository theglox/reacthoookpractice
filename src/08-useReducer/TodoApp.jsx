


 import React, { useEffect, useReducer } from 'react'
import { useTodo } from '../hooks/useTodo';
import { TodoAdd } from './TodoAdd';
import { Todolist } from './Todolist';

//  const initialState = [
//     // {
//     //    id: new Date().getTime(),
//     //    description: 'Recolectar la Piedra del alma',
//     //    done: false, 
//     // },
//     // {
//     //     id: new Date().getTime()*3,
//     //     description: 'Recolectar la Piedra del poder',
//     //     done: false, 
//     //  }

//  ]

 export const TodoApp = () => {
    // const initalState =[
    //   {
    //     id: new Date().getTime(),
    //     description: 'recolectar piedra del alma',
    //     done:false,
    //   },
    //   {
    //     id: new Date().getTime()*3,
    //     description: 'recolectar piedra del poder',
    //     done:false,
    //   },

    // ]
    const {todos,handleNewTodo,handleDeleteTodo,handleToggleTodo,todosCount,todosPending} = useTodo([])


  return (
    <>
     <h1>TodoApp:  || <small>Pendientes : </small></h1>
     <hr />

    <div className='row'>
        <div className='col-7'>
            <Todolist 
            onDeletetodo ={handleDeleteTodo} 
            onToggleTodo={handleToggleTodo}
            todos ={todos}/>
        </div>
        <div className='col-5'>

            <h4>Agregar TODO</h4>
            <hr />
                        {/* TodoAdd */}
            <TodoAdd onNewTodo = {handleNewTodo}/>
                        {/* TodoAdd */}
        </div>

    </div>

    </>
  )
}


