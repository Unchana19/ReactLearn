import React, { useEffect, useState } from "react";
import { Button, useDisclosure } from "@nextui-org/react";
import InputText from "./InputText";
import ModalPopup from "./ModalPopup";
import axios from "axios";
import {authenticate, getUser} from "../services/authorize";
import { useNavigate } from "react-router-dom";

export default function LoginComponent() {
    const navigate = useNavigate();

    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [textPopup, setTextPopup] = useState("");

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        getUser() && navigate("/");
    }, []);

    const submitForm = (e) => {
        e.preventDefault();
        axios.post(`${import.meta.env.VITE_API}/login`, { username, password })
            .then((response) => {
                authenticate(response, () => navigate("/create"));
            }).catch((err) => {
                setTextPopup(err.response.data.error);
                onOpen()
            })
    }

    return (
        <div className="w-9/12 px-5 flex justify-between items-center">
            <ModalPopup isOpen={isOpen} onOpenChange={onOpenChange} text={textPopup} buttonText={"Close"} />
            <h1 className="text-7xl text-white m-10">
                Login
            </h1>
            <form onSubmit={submitForm} className="w-9/12 flex flex-col justify-center items-center">
                <InputText type="text" value={username} setValue={setUsername} label="ชื่อผู้ใช้งาน" invalidText="กรุณากรอกชื่อผู้ใช้งาน" />
                <InputText type="password" value={password} setValue={setPassword} label="รหัสผ่าน" invalidText="กรุณากรอกรหัสผ่าน" />
                <Button type="submit" className="mt-5" color="primary" variant="bordered" size="lg">
                    Login
                </Button>
            </form>
        </div>
    )
}