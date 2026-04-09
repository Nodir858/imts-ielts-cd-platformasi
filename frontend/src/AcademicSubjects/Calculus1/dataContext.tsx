import { createContext, useContext, useState } from 'react'

// type Quiz = {
//     exampleTsx: string;
//     setExampleTsx: string;
// }

type QuizContextType = {
    click: number;
    handleClick: () => void;
}

const quizDataContext = createContext<QuizContextType | undefined>(undefined);

export const quizProvider = ({children} : { children: React.ReactNode }) => {

    const user = useContext(quizDataContext);

    const [click, setClick] = useState<number>(0);

    if(user === undefined){
        throw new Error("useContext must be used with a quizDataContext")
    }

    const handleClick = () => {
        setClick(prev => prev + 1)
    } 
    
    return(
        <quizDataContext.Provider value={{click, handleClick}}>
            {children}
        </quizDataContext.Provider>
    )
}
