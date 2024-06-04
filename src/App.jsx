import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from "./pages/home/Home"
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      {/* <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/account" element={<Account />} /> */}
    </Routes>
  </BrowserRouter>
  )
}

export default App
