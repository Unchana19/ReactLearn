import { useState } from "react"

export default function Content({title, description}){
    const [showContent, setShowContent] = useState(false);

    return(
        <article className="my-12 p-5 bg-zinc-200 text-slate-900 rounded-xl drop-shadow-[0_0_3rem_rgba(10,10,255,0.3)]">
            <header className="flex justify-between items-center">
                <h4 className="font-bold text-xl">{title}</h4>
                <button className="py-1 px-2.5 bg-indigo-950 text-zinc-200 rounded-full font-semibold" onClick={()=>setShowContent(!showContent)}>+</button>
            </header>
            {showContent && <p className="mt-5 text-indigo-950">{description}</p>}
        </article>
    )
}