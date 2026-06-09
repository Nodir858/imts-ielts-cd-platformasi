import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

type Quiz = {
    text: string;
    options: Option[];
}

type Option = {
    text: string;
    isCorrect: boolean;
}

type Exam = {
    _id: string;
    title: string;
    duration: string;
    category: string;
};


export default function ExamPage() {

    const {examId} = useParams()
    const [quiz, setQuiz] = useState<Quiz[]>([])
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0)
    const [selectedOption, setSelectedOption] = useState<string | null>(null)
    const [answers, setAnswers] = useState<string[]>([])
    const [score, setScore] = useState<number>(0);
    const [timeLeft, setTimeLeft] = useState<number>(30 * 60);

    const getQuestions = async function () {
        const response = await fetch(`http://localhost:3000/exams/${examId}`);
        const data = await response.json()
        setQuiz(data.questions)
        console.log(data)
    }
    useEffect(() => {
        getQuestions();
    }, [examId])

    const question = quiz[currentQuestionIndex];

    const selectAnswer = (select: string) => {
        setSelectedOption(select);
        const selectedOption = question.options.find(option => option.text === select)

        if(selectedOption && selectedOption.isCorrect){
            setScore(prevScore => prevScore + 1)
        }
        setAnswers(prevAnswers => [...prevAnswers, select])
        // if (currentQuestionIndex < quiz.length - 1) {
        //     setCurrentQuestionIndex(prevIndex => prevIndex + 1);
        // } else {
        //     // Handle the end of the quiz here (e.g., show a results screen)
        //     console.log("Quiz finished! Final score:", score);
        // }
    }

    const nextQuestion = () : any => {
        if (currentQuestionIndex < quiz.length - 1) {
            setCurrentQuestionIndex(prevIndex => prevIndex + 1);
        } else {
            console.log(`quiz finished final score : ${score}`)
        }
    }

    const prevQuestion = () : any => {
        if(currentQuestionIndex > 0){
            setCurrentQuestionIndex(prevIndex => prevIndex - 1);
        }
        setSelectedOption(null)
    }
    
    // const startTimer = () => {
    //     let totalSeconds : number =  30;

    // }
    console.log(timeLeft)
    if (!question) {
  return <div>Loading...</div>;
}
    return (
    <div className='bg-gray-100 h-screen'>
        <div className='bg-white max-w-3xl mx-auto rounded-2xl p-5'>
            <h1 className="font-semibold">Questions 4 of 4</h1>
            <div>
                <h1 className="p-3 bg-gray-100 rounded-2xl border border-gray-300 mt-5">{question.text}</h1>
                <h1 className="font-semibold mt-5">Select your answer:</h1>
                <form>
                    {question.options.map((option, index) => (
                        <p 
                            key={index} 
                            //type="button" 
                            className={`px-5 py-4 mt-3 rounded-3xl border cursor-pointer ${
                                selectedOption === option.text
                                ? 'bg-sky-100 text-black border-sky-500' // Applies if selected
                                : 'bg-white text-black hover:bg-zinc-100' // Applies if NOT selected
                            }`}
                            onClick={() => selectAnswer(option.text)}

                            >
                                {option.text}
                        </p>
                    ))}
                </form>
                <div className="flex justify-center space-x-5 mt-5">
                                <button className="p-2 rounded-lg font-semibold text-white bg-sky-500 hover:bg-sky-700 cursor-pointer" onClick={prevQuestion}>
                                    Previous
                                </button>
                                <button className="p-2 rounded-lg font-semibold text-white bg-green-500 hover:bg-green-700 cursor-pointer" onClick={nextQuestion}>
                                    Next and Submit
                                </button>
                                <button className="p-2 rounded-lg font-semibold text-white bg-red-500 hover:bg-red-700 cursor-pointer"  >
                                    Finish test                
                                </button>
                </div>
            </div>
        </div>
    </div>
  )
}
