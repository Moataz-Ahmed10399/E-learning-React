
// import './App.css'
// import { Route } from 'react-router-dom'
import Heaader from './components/Header/Header'
import Student from './components/student/Student'
import Home from "./components/home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {


  return (
    // <>
    //   {/* <Heaader/> */}


    //   <Student/>
    // </>
   <BrowserRouter>
      <Routes>
        <Route path="/" element ={<Home/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>


  )
}

export default App
