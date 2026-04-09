
import { useEffect, useState } from "react"
import Result from "./Result";
import Timer from "../../LocalStorage/Timer";

type Quiz = {
    question: string;
    options: string[];
    correctAnswer: string;
}

export default function CalculusTest({}) {

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
    const [quizzes, setQuizzes] = useState<Quiz[]>([]);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [userAnswers, setUserAnswer] = useState<string[]>([]);
    const [correctAnswer, setCorrectAnswer] = useState<string>('');
    //const [yourAnswer, setYourAnswer] = useState<string[]>([]);
    // const [isSubmitted, setIsSubmitted] = useState<boolean>(false)
    // const [answers, setAnswers] = useState<string>('');
    const [score, setScore] = useState<number>(0);
    //display states
    const [showQuiz, setShowQuiz] = useState<boolean>(true);
    const [showResult, setShowResult] = useState<boolean>(false);
    const [savedAnswers, setSavedAnswers] = useState<string[]>([]);
    //const [isAnswered, setIsAnswered] = useState<boolean>(false);
    //we need to take our data JSON quizzes
    // useEffect stays synchronous (React is happy);
    useEffect(() => {
     async function getApi() {
        try{
            const response = await fetch("/quiz.json");

            const data = await response.json();
            //set data to quizzes useState
            setQuizzes(data);
        }
        catch(error){
            console.log("error:", error)
        }
     }
     getApi()
    }, [])  

    useEffect(() => {
        const data = localStorage.getItem("userAnswers");
        if(data){
            setSavedAnswers(JSON.parse(data));
        }
    }, [])

    //we need to set a single question
   const questions : Quiz | undefined = quizzes[currentQuestionIndex]

   const selectAnswer = (selected :string) => {
            setSelectedAnswer(selected)
            setCorrectAnswer(questions.correctAnswer);
            //person selected answers
            setUserAnswer(prev => {
                if(prev.length >= quizzes.length) return prev;
                return [...prev, selected]
            })
            if(selected === questions.correctAnswer){
                setScore(prev => prev + 1);
            };
   }


    //never call functions inside onClick events always need to pass a function reference because prevQuestion will runs immediately, this function will runs during the render not on click
    const prevQuestion = () : any => {
        setCurrentQuestionIndex( prev => {
            if(prev === 0) return prev;
            return prev - 1;
        })
    }
    //move to next question, moveforward (keyingi savolga otish)
    const nextQuestion = () => {

        setCurrentQuestionIndex(prev => {
            if(prev >= quizzes.length -1 ){
                return prev;
            }
            return prev + 1;
        })

        //setSelectedAnswer(null);
    }

    const showTheResult= (): void => {
        setShowResult(true);
        setShowQuiz(false);
        localStorage.setItem("userAnswers", JSON.stringify(userAnswers))
    }
    

    // const startQuizState = () : void => {
    //     setStartQuiz(false)
    //     setShowQuiz(true);
    // }
    return (
    <div className="bg-gray-100 h-screen " >
        

        {!showResult ? (
            <div className="bg-white max-w-3xl mx-auto rounded-2xl p-5">


                <h1 className="font-semibold">Questions 4 of 4</h1>
                <div>


                    <h2 className="p-3 bg-gray-100 rounded-2xl border border-gray-300 mt-5">
                        {questions?.question}
                    </h2>
                    <h2 className="font-semibold mt-5">
                        Select your answer:
                    </h2>
                    <form>
                        {questions?.options?.map((item: string, index: number) => (
                            <label
                                key={index}
                                className="block px-5 py-4 mt-3 rounded-3xl border cursor-pointer"
                            >
                                <input
                                    type="radio"
                                    value={item}
                                    checked={selectedAnswer === item}
                                    onChange={() => selectAnswer(item)}
                                    className="mr-5"
                                />
                                {item}
                            </label>
                        ))}
                    </form>
                        <div className="flex justify-center space-x-5 mt-5">
                                <button className="p-2 rounded-lg font-semibold text-white bg-sky-500 hover:bg-sky-700 cursor-pointer" onClick={prevQuestion}>
                                    Previous
                                </button>
                                <button className="p-2 rounded-lg font-semibold text-white bg-green-500 hover:bg-green-700 cursor-pointer" onClick={nextQuestion}>
                                    Next and Submit
                                </button>
                                <button className="p-2 rounded-lg font-semibold text-white bg-red-500 hover:bg-red-700 cursor-pointer" onClick={showTheResult} >
                                    Finish test                
                                </button>
                        </div>
                        <div className="flex-row text-center">
                                <div className="text-3xl font-bold my-5">
                                    <Timer isAnswered={selectAnswer !== null} onTimeUp={showTheResult}></Timer>
                                </div>
                                <h1 className="font-semibold text-xl mb-5">Your answers</h1>
                                    <div className="flex flex-row gap-3">{userAnswers.map((item, index) =>(
                                        <div key={index} className="p-2 rounded-lg bg-green-500 text-white font-semibold">{item}</div>
                                    ))}</div>         
                        </div>
                </div>


            </div>
        ) : (
                <Result
                    quizzes={quizzes}
                    showResult={showResult}
                    score={score}
                    correctAnswer={correctAnswer}
                    selectedAnswer={selectedAnswer}
                    userAnswers={userAnswers}
                />
            )}
    </div>
    );
}
