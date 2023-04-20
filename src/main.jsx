import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
//importar browser router

import CounterApp from './01-useState/CounterApp'
import { CounterWitCustomHook } from './01-useState/CounterWitCustomHook'
import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
import { SimpleForm } from './02-useEffect/SimpleForm'
import { MultipleCustomHoocks } from './03-examples/MultipleCustomHoocks'
import { FocusScreen } from './04-userReef/FocusScreen'
import { Layout } from './05-useLayoutEffect/Layout'
import CallbackHook from './06-memos/CallbackHook'

import { MemorizeHook } from './06-memos/MemorizeHook'
import { Memorizex } from './06-memos/Memorizex'
import { Padre } from './07-tarea-memo/Padre'
import { TodoApp } from './08-useReducer/TodoApp'
import { MainApp } from './09-useContext/MainApp'

//import './08-useReducer/intro-reducer'

import { HooksApp } from './HooksApp'
import './index.css'
import { Prueba } from './testeo/Prueba'

ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    {/* <React.StrictMode> */}
       <MainApp />
    {/* </React.StrictMode>, */}
  </BrowserRouter>

)
