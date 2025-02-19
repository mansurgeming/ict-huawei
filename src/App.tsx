import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyGarden from "./pages/MyGarden/main";
import DetailGarden from "./pages/MyGarden/detail";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/my-garden" element={<MyGarden />} />
        <Route path="/detail-garden" element={<DetailGarden />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
