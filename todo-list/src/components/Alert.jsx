import { useEffect } from "react"

export default function Alert({msg, color, setAlert, list}){
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setAlert({show: false, msg: "", color: ""})
    }, 2000)
    return () => clearTimeout(timeOut);
  }, [list]);

  return(
    <div className="mt-10">
      <h1 className={`text-${color} text-lg`}>{msg}</h1>
    </div>
  )
}