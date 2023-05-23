import { useState } from "react";
import "./AddForm.css";

export default function AddForm(props){
    const {students, setStudent} = props;
    const [name, setName] = useState("");
    const [gender, setGender] = useState("male");

    function saveStudent(e){
        e.preventDefault();
        if(!name){
            alert("name is invalid");
        } else {
            const newStudent = {
                id: Math.floor(Math.random()*10000),
                name: name,
                gender: gender,
            }
            setStudent([...students, newStudent]);
            setName("");
            setGender('male')         
        }
    }

    return(
        <section className="container">
            <form onSubmit={saveStudent}>
                <label>ชื่อนักเรียน</label>
                <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)}/>
                <select value={gender} onChange={(e)=>setGender(e.target.value)}>
                    <option value="male">ชาย</option>
                    <option value="female">หญิง</option>
                </select>
                <button type="submit" className="btn-add">บันทึก</button>                
            </form>
        </section>
    );
}