import { useContext } from "react"
import { DataContext } from "../App"
import QuestionData from '../data/QuestionData'

export default function Score(){
    const {score, setScore, setAppState} = useContext(DataContext);

    const retry = () =>{
        setScore(0);
        setAppState("menu");
    }

    return(
        <div className="my-20 text-center">
            <h1 className="text-4xl font-bold my-10 tracking-wider">Result</h1>
            <h1 className="text-2xl font-semibold mt-5">{`${score} / ${QuestionData.length}`}</h1>
            <button className="text-2xl font-bold bg-indigo-900 py-5 px-10 my-20 rounded-xl hover:bg-indigo-950" onClick={retry}>Retry</button>
        </div>
    )
}