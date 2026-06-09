// import { useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Navbar from "./components/Navbar";
import Test from "./pages/Test";
import Inha from "./universities/Inha";
import './App.css'
import CalculusTest from "./AcademicSubjects/Calculus1/CalculusTest";
import Index from "./pages/admin/index";
import Exams from "./pages/admin/Exams"
import AddEditQuestion from "./pages/admin/addEditQuestion";
import Register from "./pages/common/Register";
import Login from "./pages/common/Login";
import UserDashboard from "./pages/user/UserDashboard";
import ExamPage from "./universities/ExamPage";
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
          <Route path="/admin" element={<Index></Index>}></Route>
          <Route path="/admin/exams" element={<Exams></Exams>}></Route>
          <Route path="/admin/exams/:examId/questions" element={<AddEditQuestion></AddEditQuestion>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/user" element={<UserDashboard></UserDashboard>}></Route>
          <Route path="/exam/:examId" element={<ExamPage></ExamPage>}></Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
