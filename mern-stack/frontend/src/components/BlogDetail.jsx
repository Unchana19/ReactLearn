import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function BlogDetail() {
  const {slug} = useParams();
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API}/blog/${slug}`)
    .then(response => {
      setBlog(response.data);
    }).catch(err => {
      alert(err);
    })
  }, []);

  return (
    <div className="min-h-screen w-full py-40 flex flex-col justify-start items-center">
      <h1 className="text-white text-3xl font-bold mb-10">{blog.title}</h1>
      <p className="w-9/12 text-slate-100 opacity-70 my-5">{blog.content}</p>
      <p className="w-9/12 text-blue-500 mt-5">{`${blog.author}`}</p>
      <p className="w-9/12 text-small text-default-500 mt-1">{`${new Date(blog.createdAt).toLocaleString()}`}</p>
    </div>
  )
}