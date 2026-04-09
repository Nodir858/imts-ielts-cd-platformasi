import { useState, useEffect } from 'react';
//we need to define type for the components props
interface TimerProps {
    isAnswered: boolean;
    onTimeUp: () => void;
}

export default function Timer ({isAnswered, onTimeUp} :TimerProps)  {
    const [timeLeft, setTimeLeft] = useState<number>(30 * 60);

    const getTimeRemaining = () : any => {
        const seconds = timeLeft % 60;
        const minutes = Math.floor(timeLeft/ 60);

        return {minutes, seconds}
    }

    const {minutes, seconds} = getTimeRemaining();
    useEffect(() => {
        if(timeLeft === 0){
            onTimeUp();
            return
        }
        const timer = setInterval(() => {
            setTimeLeft(prevTime => prevTime -1);
        }, 1000)
        return () => clearInterval(timer)
    }, [timeLeft])

    return (
    <div>
        <p>
            Time Left: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </p>
    </div>
  )
}
