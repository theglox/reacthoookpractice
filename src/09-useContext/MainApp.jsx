import { Link, Navigate, Route, Routes } from "react-router-dom"
import { AboutPage } from "./AboutPage"
import UserProvider from "./context/UserProvider"
import { HomePage } from "./HomePage"
import { LoginPage } from "./LoginPage"
import { Navbar } from "./Navbar"




export const MainApp = () => {
  return (
    <UserProvider>
        <Navbar/>
      <hr/>


      {/* //hog que recibe hijos las cuales son rutas */}
      <Routes> 
        <Route path="/" element={<HomePage/>}  />
        <Route path="login" element={<LoginPage/>}  />
        <Route path="about" element={<AboutPage/>}  />

        {/* para rutas no definidas podemos ahcer lo siguiente */}
        {/* <Route path="/*" element={<AboutPage/>}  /> */}
        {/* otra forma  mas aceptable */}
        <Route path="/*" element={<Navigate to="/"/>}  />

      </Routes>
    </UserProvider>
  )
}

