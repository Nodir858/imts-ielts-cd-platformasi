// import { useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Navbar from "./components/Navbar";
import Test from "./pages/Test";
import Inha from "./universities/Inha";
import './App.css'
import CalculusTest from "./AcademicSubjects/Calculus1/CalculusTest";
// import Question from "./AcademicSubjects/Calculus1/Question";

function App() {

  return (
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path="/test" element={<Test></Test>}></Route>
          <Route path="/inha" element={<Inha></Inha>}></Route>
          <Route path="/inha/calculus1" element={<CalculusTest></CalculusTest>}></Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
