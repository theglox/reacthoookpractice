
// que es el initial state ?
 const initialState = [{
    id: 1,
    todo: 'recolectar la piedra del Alma',
    done: false,
 }];

 //como luce un reducer ?
 const todoReducer =( state=initialState, action={} )=>{ //revcibe dos argumentos el state y la action que es como quiero que cambie el estado

    //regresamo el nuevo state

    if(action.type ==='[TODO] add todo' ){
        return [...state, action.newTodo]; // tomamos el estado  anterior y le añadimos el payload
    }

    return state; // siempre tiene que retornar el estado
 }

// estado incial 
 let todos = todoReducer();

  //para hacer una modificaion al reducer hay que mandarle una acion
//   la accion dice como se va modificar

const newTodo ={
    id: 2,
    todo: 'recolectar la piedra del poder',
    done: false,
 };

 ///la accion es esta

 const addTodoAction = {
    type: '[TODO] add todo', // el type es un standart , es un string para que sepamo que se disparo la accion add todo
    newTodo: newTodo, // el newtodo es el payload
 }

 todos = todoReducer(todos,addTodoAction); // al reducer le pasamos el estado  yla accion  
 console.log(todos)


