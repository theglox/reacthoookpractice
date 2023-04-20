



export const TodoItem = ( {todo,onDeletetodo,onToggleTodo}) => {
   // console.log(todo)
  return (
          <li  className='list-group-item d-flex justify-content-between'>
            <span 
              className={`align-self-center  ${todo.done && "bg-success"}`}
              onDoubleClick={(()=>onToggleTodo(todo.id))}

            >
                {todo.description}
            </span>
            <button className='btn btn-danger' onClick={()=>onDeletetodo(todo.id)}>Borrar</button>
          </li>
  )
}

