import React, { useState } from "react";
import {Button, useDisclosure} from "@nextui-org/react";
import InputText from "./InputText";
import ModalPopup from "./ModalPopup";
import axios from "axios";

export default function FormPage() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [textPopup, setTextPopup] = useState("");

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    axios.post(`${import.meta.env.VITE_API}/create`, {title, content, author})
    .then(response => {
      setTextPopup("สร้างบทความสำเร็จ");
      onOpen()

      setTitle("");
      setContent("");
      setAuthor("");
    }).catch(err => {
      setTextPopup(err.response.data.error);
      onOpen()
    });
    console.log("API URL ", import.meta.env.VITE_API);
  }  

  return (
    <div className="w-9/12 px-5 flex justify-between items-center">
      <ModalPopup isOpen={isOpen} onOpenChange={onOpenChange} text={textPopup} buttonText={"Close"} />
      <h1 className="text-7xl text-white m-10">
        Create Blog
      </h1>
      <form onSubmit={submitForm} className="w-9/12 flex flex-col justify-center items-center">
        <InputText type="text" value={title} setValue={setTitle} label="ชื่อบทความ" invalidText="กรุณากรอกชื่อบทความ" />
        <InputText type="text" value={content} setValue={setContent} label="เนื้อหาบทความ" invalidText="กรุณากรอกเนื้อหาบทความ" />
        <InputText type="text" value={author} setValue={setAuthor} label="ชื่อผู้เขียนบทความ" invalidText="กรุณากรอกชื่อผู้เขียนบทความ" />
        <Button type="submit" className="mt-5" color="primary" variant="bordered" size="lg">
          Create
        </Button>
      </form>
    </div>
  )
}