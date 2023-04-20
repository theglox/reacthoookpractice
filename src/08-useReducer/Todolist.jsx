import { TodoItem } from "./TodoItem"



export const Todolist = ({todos=[],onDeletetodo,onToggleTodo}) => {
    console.log(todos)
  return (
    <>
    <ul className='list-group'>
      {
        todos.map(todo =>(

          <TodoItem 
          onDeletetodo ={onDeletetodo}
          onToggleTodo={onToggleTodo} 
          key ={todo.id} 
          todo = {todo}/>
        ))
      }
       


    </ul>
    </>
  )
}

