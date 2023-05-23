import "./StudentList.css";
import Item from "./Item"
import { useState } from "react";

export default function StudentList(props) {
  const {students, deleteStudent} = props;
  const [show, setShow] = useState(true);

  return (
    <>
      <ul>
        <div className="header">
          <h1>จำนวนนักเรียน ({students.length})</h1>
          <button onClick={() => setShow(!show)}>{show ? "hide" : "show"}</button>        
        </div>
        {show && students.map((data) => (
            <Item key={data.id} data={data} deleteStudent={deleteStudent}/>
          ))}
      </ul>
    </>
  );
}
