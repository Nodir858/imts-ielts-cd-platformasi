import { useEffect, useState } from "react";
//import { getItem, setItem } from "../../LocalStorage/LocalStorage";
type Quizzes = {
    question: string;
    options: string[];
    correctAnswer: string;
}

type ResultQuiz = {
    quizzes: Quizzes[];
    showResult: boolean;
    score: number;
    correctAnswer: string;
    selectedAnswer: string | null;
    userAnswers: string[]
}

export default function Result({quizzes, showResult, score, correctAnswer, selectedAnswer, userAnswers} : ResultQuiz) {


    return (
    <div className= {`bg-gray-200 flex justify-center text-white ${showResult ? '' : "hidden"}`}>
        <div className="text-black bg-slate-300 min-w-xl flex justify-center items-center">
            {/* <h1>{score > (quizzes.length *2 /2) ? 'awesome' : 'oops'}</h1> */}
            <div className="min-w-lg">
                <h1 className="font-semibold text-3xl text-center">Quiz completed</h1>
                <h2 className="font-semibold text-xl text-center">your score is {score}</h2>
                <form>
                    {quizzes.map((quiz : Quizzes, index: number) => (
                        <div key={index}>
                            <p>{quiz.question}</p>
                            <h1 className="mt-5 font-semibold">Your answer: {userAnswers[index]}</h1>
                            {quiz.options.map((item, index) => (
                                    
                                    <div>
                                        <label htmlFor="" key={index} className={`block px-5 py-4 mt-3 rounded-lg border cursor-pointer `}>
                                            <input type="text" name="" id="" value={item} />
                                        </label>
                                    </div>
                                ))
                            }
                        </div>
                        
                    ))}
                </form>
            </div>

        </div>
    </div>
  )
}