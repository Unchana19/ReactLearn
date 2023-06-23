import Navigation from "./components/Navigation";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/page/Home";
import Member from "./components/page/Member";
import Product from "./components/page/Product";
import { useState } from "react";

function App() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <BrowserRouter>
      <Navigation showMenu={showMenu} setShowMenu={setShowMenu} />     
    <Routes>
      <Route path="/" element={<Home setShowMenu={setShowMenu} />}></Route>
      <Route path="/member" element={<Member setShowMenu={setShowMenu} />}></Route>
      <Route path="/product" element={<Product setShowMenu={setShowMenu} />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
