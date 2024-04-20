import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card, CardHeader, CardBody, CardFooter, Divider, Button, useDisclosure } from "@nextui-org/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import ConfirmDelete from "./ConfirmDelete";
import axios from "axios";
import { getUser, getToken } from "../services/authorize";

export default function BlogComponent({ blog, fetchData, deleteSuccess }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const navigate = useNavigate();

  const deleteBlog = (onClose) => {
    axios.delete(`${import.meta.env.VITE_API}/blog/${blog.slug}`,
  {
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  })
      .then(response => {
        deleteSuccess();
        fetchData();
      }).catch(err => {
        alert(err);
      });
    onClose();
  }

  return (
    <Card className="w-9/12 my-3 bg-slate-900 text-white p-3">
      <ConfirmDelete isOpen={isOpen} onOpenChange={onOpenChange} action={deleteBlog} />
      <CardHeader className="flex justify-between">
        <Link to={`/blog/${blog.slug}`} >
          <div className="flex flex-col">
            <p className="text-xl font-extrabold">{blog.title}</p>
            <p className="text-small text-default-500">{new Date(blog.createdAt).toLocaleString()}</p>
          </div>
        </Link>
        {getUser() && <div className="flex gap-3">
          <Button onPress={() => navigate(`/blog/edit/${blog.slug}`)} isIconOnly size="sm" color="" variant="faded">
            <FontAwesomeIcon className="text-white" icon={faEdit} />
          </Button>
          <Button onPress={onOpen} isIconOnly size="sm" color="" variant="faded">
            <FontAwesomeIcon className="text-rose-900" icon={faTrash} />
          </Button>
        </div>}
      </CardHeader>
      <Link to={`/blog/${blog.slug}`} >
        <Divider />
        <CardBody>
          <p>{blog.content.substring(0, 160)}</p>
        </CardBody>
        <Divider />
        <CardFooter>
          <p className="text-small text-blue-700">{blog.author}</p>
        </CardFooter>
      </Link>
    </Card>
  );
}
