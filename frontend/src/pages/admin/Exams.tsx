import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

//TYPE FOR DISPLAY 
type Exam = {
    _id: string;
    title: string;
    duration: string;
    category: string;
};

//TYPE FOR CREATE 
type CreateExam = {
    title: string;
    duration: string;
    category: string;
}
export default function Exams() {
    const [title, setTitle] = useState("");
    const [duration, setDuration] = useState("")
    const [category, setSubject] = useState("Math");
    //const { examId } = useParams();
    const [exams, setExams] = useState<Exam[]>([])
    
    const getAllExams = async function() {
            const getExams = await fetch("http://localhost:3000/exams");
            const data = await getExams.json();
            setExams(data)
            console.log(data)
    }

    useEffect(() => {
        getAllExams()
    }, [])

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>): Promise<void>{

        e.preventDefault()

        const createExam : CreateExam = {
            title,
            duration,
            category
        }

        try{
            //create exam
        const response = await fetch("http://localhost:3000/exams", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(createExam)
        });

        const data = await response.json()

        console.log(data)

        }catch(error){
        console.log(error)
        }

    }
  return (
    <div>
        <div className='w-full bg-zinc-100 max-w-2xl h-64 mx-auto'>
            <h1 className='text-2xl font-semibold text-center'>Add Exams</h1>
            <form className='flex flex-col space-y-3' onSubmit={handleSubmit}>
                    <div className='flex flex-col'>
                        <label htmlFor="">Exam Name</label>
                        <input className='border outline-0 px-2 py-1 bg-gray-200' type="text" placeholder="Exam Name" value={title} onChange={(e) => setTitle(e.target.value)}/>
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="">Exam duration</label> 
                        <input className='border outline-0 px-2 py-1 bg-gray-200' type="text" placeholder="Exam duration" value={duration} onChange={(e) => setDuration(e.target.value)}/>
                    </div>
                    <div className='w-60 flex justify-between'>
                        <label className='flex justify-center items-center' htmlFor="category">Choose a category:</label>
                        <select className='border outline-0 px-2 py-1' name="category" id="subjects" value={category} onChange={(e) => setSubject(e.target.value)}>
                                <option value="math">Math</option>
                                <option value="physics">Physics</option>
                                <option value="algebra">Algebra</option>
                        </select>
                    </div>
                    <div className='flex justify-center'>
                        <button type="submit" className="bg-blue-600 text-white font-semibold px-2 py-1 rounded-sm w-64">Add Exam</button>
                    </div>
            </form>
        </div>
        <div className='w-full max-w-6xl mx-auto'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {exams.map((exam) =>(
                    <div key={exam._id} className='border px-2 py-3 space-y-1'>
                            <h2 className='text-xl font-semibold'>{exam.title }</h2>
                            <p>Duration: {exam.duration}</p>
                            <p>Category: {exam.category}</p>
                            <button className='w-full border-blue-600 border px-1 py-2'>Start Exam</button>
                            <Link to={`/admin/exams/${exam._id}/questions`}>
                                <button className='cursor-pointer w-full border-red-600 border px-1 py-2'>
                                    Add Question
                                </button>
                            </Link>
                    </div>
                ))}
        </div>
        </div>
    </div>
  )
}
