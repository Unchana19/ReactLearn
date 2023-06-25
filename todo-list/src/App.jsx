import { useState } from "react";
import {v4 as uuidv4} from "uuid";
import ListComponent from "./components/ListComponent";
import Alert from "./components/Alert";

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [checkEditItem, setCheckEditItem] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    color: ""
  });

  const submitData = (e) =>{
    e.preventDefault();
    if(!name){
     setAlert({show: true, msg: "Input is invalid", color: "red-500"});
    } else if (checkEditItem && name) {
      const result = list.map(item => {
        if(item.id === editId){
          return {...item, title: name}
        }
        return item;
      })
      setList(result);
      setName("");
      setCheckEditItem(false);
      setEditId(null);
      setAlert({show:true, msg: "Edit success", color: "teal-500"});
    } else {
      const newItem = {
        id: uuidv4(),
        title: name 
      }
      setList([...list, newItem]);
      setAlert({show:true, msg: "Add success", color: "teal-500"});
      setName(""); 
    }
  }

  const removeItem = (id) =>{
    setList(list.filter(item => item.id !== id));
    setAlert({show: true, msg:"Delete success", color: "teal-500"});
  }

  const editItem = (id) =>{
    setCheckEditItem(true);
    setEditId(id);
    const serchItem = list.find(item => item.id === id);
    setName(serchItem.title);
  }

  return (
    <main className="bg-slate-950 h-screen flex flex-col items-center">
      <h1 className="mt-20 text-5xl font-bold text-white">TodoList App</h1>
      {alert.show && <Alert {...alert} setAlert={setAlert} list={list} />}
      <form onSubmit={submitData} className={`${alert.show ? "mt-5" : "mt-20"} w-10/12 flex items-center justify-center`}>
        <input onChange={(e) => setName(e.target.value)} value={name} className="w-1/2 rounded-xl py-2 px-3 text-xl font-semibold outline-none" type="text"></input>
        <button className="ml-3 py-2 px-3 bg-amber-600 rounded-xl font-semibold" type="submit">
          {checkEditItem ? "Edit" : "Add"}
        </button>
      </form>
      <section className="text-white mt-10 w-full flex flex-col justify-center items-center">
        {list.map((data, index) => {
          return <ListComponent key={index} {...data} removeItem={removeItem} editItem={editItem} />
        })}
      </section>        
    </main>
  )
}

export default App
