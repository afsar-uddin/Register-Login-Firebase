import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./Home/Home";
import NoFound from "./NoFound/NoFound";
import Login from "./RegisterLogin/Login";
import Register from "./RegisterLogin/Register";
import AuthProvider from './context/AuthProvider';
import LoginSuccess from './Success/LoginSuccess';
import RegisterSuccess from './Success/RegisterSuccess';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/login-success" element={<LoginSuccess />} />
            <Route path="/registration-success" element={<RegisterSuccess />} />
            <Route path="*" element={<NoFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
