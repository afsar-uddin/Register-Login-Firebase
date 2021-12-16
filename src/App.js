import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./Home/Home";
import NoFound from "./NoFound/NoFound";
import Login from "./RegisterLogin/Login";
import Register from "./RegisterLogin/Register";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NoFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
