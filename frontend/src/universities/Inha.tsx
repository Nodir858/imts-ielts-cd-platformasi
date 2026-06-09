import { useNavigate } from "react-router-dom";
import { FaRegClock } from "react-icons/fa6";
import { CiCircleList } from "react-icons/ci";
import { useEffect, useState } from "react";
// import {CalculusTest} from '../AcademicSubjects/Calculus1/CalculusTest'

//get exams
type Exam = {
    _id: string;
    title: string;
    duration: string;
    category: string;
};

export default function Inha() {
  
  const [exams, setExams] = useState<Exam[]>([])
  const getAllExams = async function(){
    const getExams = await fetch("http://localhost:3000/exams")
    const data = await getExams.json()
    setExams(data)
    console.log(data)
  }

  useEffect(() => {
    getAllExams()
  }, [])

  const navigate = useNavigate()

  return (
    <section className="bg-gray-100 h-screen">
      <div className=" max-w-7xl mx-auto px-5 py-10 ">
        <h1 className="text-3xl font-semibold mb-5">INHA (Inha university tashkent)</h1>
        
            {/* <div className="h-auto bg-white space-y-5 p-3 rounded-xl border-gray-200 border">
                <h1 className="font-semibold">Calculus 1</h1>
                <div className="flex justify-between w-3/4">
                    <div className="flex items-center">
                      <div className="h-10 w-10 bg-blue-200 flex justify-center items-center"><FaRegClock className="h-6 w-6 bg-blue-200"></FaRegClock></div>
                      <p className="text-sm">1 min</p>
                    </div>
                    <div className="flex items-center">
                      <div className="h-10 w-10 bg-green-200 flex justify-center items-center"><CiCircleList className="h-6 w-6 bg-green-200"></CiCircleList></div>
                      <p className="text-sm">10 questions</p>
                    </div>
                </div>
                <div className="flex w-2/3 justify-between text-xs">
                  <span className="px-3 py-1 rounded-2xl bg-slate-200">Video Analysis</span>
                  <span className="px-3 py-1 rounded-2xl bg-slate-200">Topic</span>
                  <span className="px-3 py-1 rounded-2xl bg-slate-200">Free</span>
                </div>
                <button onClick={() => navigate("calculus1")} className="cursor-pointer w-full bg-blue-600 text-white py-2 rounded-2xl">Start Test</button>
            </div> */}
            <div className="grid grid-cols-3 gap-5">
              {exams.map((exam) => (
                <div key={exam._id} className="bg-white space-y-5 p-3 rounded-xl border-gray-200 border">
                  <h1 className="font-bold text-lg">{exam.title}</h1>
                  <div className="flex justify-between w-3/4">
                    <div className="flex items-center">
                      <div className="h-10 w-10 bg-blue-200 flex justify-center items-center"><FaRegClock className="h-6 w-6 bg-blue-200"></FaRegClock></div>
                      <p>Duration: {exam.duration}</p>
                    </div>
                    <div className="flex items-center">
                        <div className="h-10 w-10 bg-green-200 flex justify-center items-center"><CiCircleList className="h-6 w-6 bg-green-200"></CiCircleList></div>
                        <p className="text-sm">10 questions</p>
                    </div>
                  </div>
                  <p className="font-semibold">Category: {exam.category}</p>
                  <div className="flex w-2/3 justify-between text-xs">
                    <span className="px-3 py-1 rounded-2xl bg-slate-200">Video Analysis</span>
                    <span className="px-3 py-1 rounded-2xl bg-slate-200">Topic</span>
                    <span className="px-3 py-1 rounded-2xl bg-slate-200">Free</span>
                  </div>
                  <button className="cursor-pointer w-full bg-blue-600 text-white py-2 rounded-2xl" onClick={() => navigate(`/exam/${exam._id}`)}>Start Exam</button>
                </div>
              ))}
            </div>
            {/* <div className="h-auto bg-white space-y-5 p-3 rounded-xl border-gray-200 border">
              <h1 className="font-semibold">Calculus 1</h1>
                <div className="flex justify-between w-3/4">
                    <div className="flex items-center">
                      <div className="h-10 w-10 bg-blue-200 flex justify-center items-center"><FaRegClock className="h-6 w-6 bg-blue-200"></FaRegClock></div>
                      <p className="text-sm">1 min</p>
                    </div>
                    <div className="flex items-center">
                      <div className="h-10 w-10 bg-green-200 flex justify-center items-center"><CiCircleList className="h-6 w-6 bg-green-200"></CiCircleList></div>
                      <p className="text-sm">10 questions</p>
                    </div>
                </div>
                <div className="flex w-2/3 justify-between text-xs">
                  <span className="px-3 py-1 rounded-2xl bg-slate-200">Video Analysis</span>
                  <span className="px-3 py-1 rounded-2xl bg-slate-200">Topic</span>
                  <span className="px-3 py-1 rounded-2xl bg-slate-200">Free</span>
                </div>
                <button className="w-full bg-blue-600 text-white py-2 rounded-2xl">Start Test</button>
            </div>
            <div className="h-auto bg-white space-y-5 p-3 rounded-xl border-gray-200 border">
              <h1 className="font-semibold">Calculus 1</h1>
                <div className="flex justify-between w-3/4">
                    <div className="flex items-center">
                      <div className="h-10 w-10 bg-blue-200 flex justify-center items-center"><FaRegClock className="h-6 w-6 bg-blue-200"></FaRegClock></div>
                      <p className="text-sm">1 min</p>
                    </div>
                    <div className="flex items-center">
                      <div className="h-10 w-10 bg-green-200 flex justify-center items-center"><CiCircleList className="h-6 w-6 bg-green-200"></CiCircleList></div>
                      <p className="text-sm">10 questions</p>
                    </div>
                </div>
                <div className="flex w-2/3 justify-between text-xs">
                  <span className="px-3 py-1 rounded-2xl bg-slate-200">Video Analysis</span>
                  <span className="px-3 py-1 rounded-2xl bg-slate-200">Topic</span>
                  <span className="px-3 py-1 rounded-2xl bg-slate-200">Free</span>
                </div>
                <button className="w-full bg-blue-600 text-white py-2 rounded-2xl">Start Test</button>
            </div> */}
       
      </div>
    </section>
  )
}
