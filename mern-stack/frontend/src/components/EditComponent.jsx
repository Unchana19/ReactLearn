import React, { useState, useEffect } from "react";
import {Button, useDisclosure} from "@nextui-org/react";
import InputText from "./InputText";
import ModalPopup from "./ModalPopup";
import axios from "axios";
import { useParams } from "react-router-dom";
import { getUser, getToken } from "../services/authorize";

export default function EditComponent() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [textPopup, setTextPopup] = useState("");

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState(getUser());

  const {slug} = useParams();
  const [blog, setBlog] = useState([]);

  //ดึงข้อมูลที่ต้องการแก้ไข
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API}/blog/${slug}`)
    .then(response => {
      setBlog(response.data);
      setTitle(response.data.title);
      setContent(response.data.content);
      setAuthor(response.data.author);
    }).catch(err => {
      alert(err);
    })
  }, []);

  const submitForm = (e) => {
    e.preventDefault();
    axios.put(`${import.meta.env.VITE_API}/blog/${slug}`, {title, content, author},
  {
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  })
    .then(response => {
      setTextPopup("อัพเดตบทความสำเร็จ");
      onOpen()

      setTitle("");
      setContent("");
      setAuthor("");
    }).catch(err => {
      setTextPopup(err.response.data.error);
      onOpen()
    });
  }  

  return (
    <div className="w-9/12 px-5 flex justify-between items-center">
      <ModalPopup isOpen={isOpen} onOpenChange={onOpenChange} text={textPopup} buttonText={"Close"} />
      <h1 className="text-7xl text-white m-10">
        Update Blog
      </h1>
      <form onSubmit={submitForm} className="w-9/12 flex flex-col justify-center items-center">
        <InputText type="text" value={title} setValue={setTitle} label="ชื่อบทความ" invalidText="กรุณากรอกชื่อบทความ" />
        <InputText type="text" value={content} setValue={setContent} label="เนื้อหาบทความ" invalidText="กรุณากรอกเนื้อหาบทความ" />
        <InputText type="text" value={author} setValue={setAuthor} label="ชื่อผู้เขียนบทความ" invalidText="กรุณากรอกชื่อผู้เขียนบทความ" />
        <Button type="submit" className="mt-5" color="primary" variant="bordered" size="lg">
          Update
        </Button>
      </form>
    </div>
  )
}