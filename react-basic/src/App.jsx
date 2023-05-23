import { useState } from "react";
import Header from "./components/Header";
import StudentList from "./components/StudentList";
import "./App.css"
import "./components/AddForm"
import AddForm from "./components/AddForm";

function App() {
  const [students, setStudent] = useState([
    { id: 1, name: "pita", gender: "male" },
    { id: 2, name: "thanon", gender: "male" },
    { id: 3, name: "ice", gender: "female" },
    { id: 4, name: "chor", gender: "female" },
  ]);

  function deleteStudent(id) {
    setStudent(students.filter((item) => item.id !== id));
  }

  return (
    <div className="App">
      <Header title="Home"/>
      <main>
        <AddForm students={students} setStudent={setStudent}/>
        <StudentList students={students} deleteStudent={deleteStudent}/>  
      </main>
    </div>
  );
}

export default App;
