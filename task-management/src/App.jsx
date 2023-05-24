import "./App.css";
import Header from "./components/Header";
import AddForm from "./components/AddForm";
import Item from "./components/Item";
import { useState, useEffect } from "react";

function App() {
  const [tasks, setTask] = useState(
    JSON.parse(localStorage.getItem("task")) || []
  );
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem("theme")) || "light"
  );
  const [title, setTitle] = useState("");
  const [editId, setEditId] = useState(null);
  
  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  function addTask(e) {
    e.preventDefault();
    if (!title) {
      alert("invalid value");
    } else if (editId) {
      const updateTask = tasks.map((item) => {
        if (item.id == editId) {
          return { ...item, title: title };
        }
        return item;
      });
      setTask(updateTask);
      setTitle("");
      setEditId(null);
    } else {
      const newTask = {
        id: Math.floor(Math.random() * 10000),
        title: title,
      };
      setTask([...tasks, newTask]);
      setTitle("");
    }
  }
  function editTask(id) {
    setEditId(id);
    const editTask = tasks.find((item) => item.id == id);
    setTitle(editTask.title);
  }
  function deleteTask(id) {
    setTask(tasks.filter((item) => item.id != id));
  }
  return (
    <div className={"App " + theme}>
      <Header 
        theme={theme}
        setTheme={setTheme}
      />
      <div className="container">
        <AddForm
          title={title}
          setTitle={setTitle}
          addTask={addTask}
          editId={editId}
        />
        <section>
          {tasks.map((data) => (
            <Item
              key={data.id}
              data={data}
              deleteTask={deleteTask}
              editTask={editTask}
            />
          ))}
        </section>
      </div>
    </div>
  );
}

export default App;
