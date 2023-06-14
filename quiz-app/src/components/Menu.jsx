import { useContext } from "react"
import { DataContext } from "../App"

export default function Menu(){
    const {setAppState} = useContext(DataContext);

    return(
        <div className="my-10">
            <button className="text-2xl font-bold bg-indigo-900 py-5 px-10 rounded-xl tracking-wider hover:bg-indigo-950" onClick={() => setAppState("quiz")}>Start</button>
        </div>
    )
}