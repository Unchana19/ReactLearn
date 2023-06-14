import { useContext, useEffect, useState } from 'react'
import QuestionData from '../data/QuestionData'
import { DataContext } from '../App';

export default function Quiz(){
    const [current, setCurrent] = useState(0);
    const [selectChoice, setSelectChoice] = useState("");
    const {score, setScore, setAppState} = useContext(DataContext);
    var choices = ["A", "B", "C", "D"];

    useEffect(() => {
        checkAnswer();
        // eslint-disable-next-line
    }, [selectChoice])

    const checkAnswer = () =>{
        if(selectChoice !== ""){
            if(selectChoice === QuestionData[current].answer){
                setScore(score + 1);
            }
            setSelectChoice("");
            setCurrent(current + 1);
            if(current === QuestionData.length - 1){
                setAppState("score");
            }
        }
    }

    return(
        <div className='mb-10 w-9/12'>
            <h1 className='mt-10 mb-12 font-semibold text-2xl text-center'>{QuestionData[current].question}</h1>
            <div className='flex flex-col w-full'>
                {choices.map((item) => {
                    return (<button key={item} onClick={() => setSelectChoice(item)} className='mt-7 border-2 border-violet-800 py-6 rounded-xl hover:bg-violet-800'>{QuestionData[current][item]}</button>)
                })}
            </div>
            <p className='text-center my-10'>{`${current + 1 } / ${QuestionData.length}`}</p>
        </div>
    )
}