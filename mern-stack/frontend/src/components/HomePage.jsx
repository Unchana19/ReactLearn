import axios from "axios"
import { useEffect, useState } from "react"
import {useDisclosure} from "@nextui-org/react";
import BlogComponent from "./BlogComponent";
import ModalPopup from "./ModalPopup";

export default function HomePage() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [blogs, setBlogs] = useState([]);

  const fetchData = () => {
    axios.get(`${import.meta.env.VITE_API}/blogs`)
      .then(response => {
        setBlogs(response.data);
      }).catch(err => {
        alert(err);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-full flex flex-col items-center my-20">
      <ModalPopup isOpen={isOpen} onOpenChange={onOpenChange} text={"ลบบทความสำเร็จ"} buttonText={"Close"} />
      <h1 className="text-5xl text-white text-center mt-10 mb-10">All Blogs</h1>
      <div className="max-w-screen-lg w-9/12 mx-auto flex flex-col items-center flex-wrap">
        {blogs.map((blog, index) => (
          <BlogComponent key={index} blog={blog} fetchData={fetchData} deleteSuccess={onOpen} />
        ))}
      </div>
    </div>
  )
}