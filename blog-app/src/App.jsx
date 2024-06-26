import "./App.css";
import About from "./components/About";
import Blogs from "./components/Blogs";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Navbar from "./components/Navbar";
import Detail from "./components/Detail";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="*" element={<NotFound />}></Route>
        <Route path="/home" element={<Navigate to="/" />}></Route>
        <Route path="/info" element={<Navigate to="/about" />}></Route>
        <Route path="/blog/:id" element={<Detail />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
