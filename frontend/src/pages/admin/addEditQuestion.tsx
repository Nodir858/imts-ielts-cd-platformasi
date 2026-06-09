
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

// type Question = {
//   question: string;
//   options: string[];
//   correctAnswer: string;
// }
export default function AddEditQuestion() {

  const {examId} = useParams()
  const [question, setQuestion] = useState('');
  const [optionA, setOptionA] = useState("");
  const [optionB, setOptionB] = useState("");
  const [optionC, setOptionC] = useState("");
  const [optionD, setOptionD] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");

  
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
      try{
        const response = await fetch(
          `http://localhost:3000/exams/${examId}/questions`,
          {
            method: 'POST',
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              text: question,
              options: [
                {text: optionA, isCorrect: correctAnswer === optionA},
                {text: optionB, isCorrect: correctAnswer === optionB},
                {text: optionC, isCorrect: correctAnswer === optionC},
                {text: optionD, isCorrect: correctAnswer === optionD},
              ],
              correctAnswer,
            })
          }
        )
    
        const data = await response.json();
        console.log(data)
      }catch(error){
        console.log(error);
        
      }
  }
  return (
    <div>
      <h1>Add Questions</h1>
      <form onSubmit={handleSubmit} className="space-y-3">
      <input
        type="text"
        placeholder="Question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />

      <input
        type="text"
        placeholder="Option A"
        value={optionA}
        onChange={(e) => setOptionA(e.target.value)}
      />

      <input
        type="text"
        placeholder="Option B"
        value={optionB}
        onChange={(e) => setOptionB(e.target.value)}
      />

      <input
        type="text"
        placeholder="Option C"
        value={optionC}
        onChange={(e) => setOptionC(e.target.value)}
      />

      <input
        type="text"
        placeholder="Option D"
        value={optionD}
        onChange={(e) => setOptionD(e.target.value)}
      />

      <input
        type="text"
        placeholder="Correct Answer"
        value={correctAnswer}
        onChange={(e) => setCorrectAnswer(e.target.value)}
      />

      <button type="submit">
        Add Question
      </button>
    </form>
    </div>
  )
}
