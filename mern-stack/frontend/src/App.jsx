import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./components/HomePage";
import FormPage from "./components/FormPage";
import "./App.css";
import NavbarComponent from "./components/NavbarComponent";
import BlogDetail from "./components/BlogDetail";
import LoginComponent from "./components/LoginComponent";
import { getUser } from "./services/authorize";

export default function App() {
  return (
    <BrowserRouter>
      <div className="w-screen min-h-screen bg-slate-950 flex flex-col justify-center items-center">
        <NavbarComponent />
          <Routes>
            <Route path="/" element={<HomePage />} ></Route>
            <Route path="/create" element={getUser() ? <FormPage /> : <Navigate to="/login" replace />} ></Route>
            <Route path="/blog/:slug" element={<BlogDetail />}></Route>
            <Route path="/login" element={<LoginComponent />}></Route>
          </Routes>          
      </div>
    </BrowserRouter>
  )
}
