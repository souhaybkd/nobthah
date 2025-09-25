import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";

import Home from "./pages/home/Home"
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import Scratch from "./pages/dashboard/scratch/Scratch";
import Resume from "./pages/dashboard/resume template/Resume";
import Account from "./pages/account/Account";
import Navigate from "./pages/navigate/Navigate";

// English version imports
import HomeEn from "./pages/en/home/Home"
import RegisterEn from "./pages/en/register/Register";
import LoginEn from "./pages/en/login/Login";
import DashboardEn from "./pages/en/dashboard/Dashboard";
import ScratchEn from "./pages/en/dashboard/scratch/Scratch";
import ResumeEn from "./pages/en/dashboard/resume template/Resume";
import AccountEn from "./pages/en/account/Account";
import NavigateEn from "./pages/en/navigate/Navigate";

function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <Routes>
      {/* Original routes (default language) */}
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/account" element={<Account />} />
      <Route path="navigate/dashboard" element={<Dashboard />} />
      <Route path="navigate/dashboard/create-resume-from-scratch" element={<Scratch />} />
      <Route path="navigate/dashboard/create-resume-from-scratch/resume/:id" element={<Resume />} />
      <Route path="/navigate" element={<Navigate />} />
      
      {/* English version routes */}
      <Route path="/en" element={<HomeEn />} />
      <Route path="/en/register" element={<RegisterEn />} />
      <Route path="/en/login" element={<LoginEn />} />
      <Route path="/en/account" element={<AccountEn />} />
      <Route path="/en/navigate/dashboard" element={<DashboardEn />} />
      <Route path="/en/navigate/dashboard/create-resume-from-scratch" element={<ScratchEn />} />
      <Route path="/en/navigate/dashboard/create-resume-from-scratch/resume/:id" element={<ResumeEn />} />
      <Route path="/en/navigate" element={<NavigateEn />} />
      
      {/* <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/account" element={<Account />} /> */}
        </Routes>
      </LanguageProvider>
    </BrowserRouter>
  )
}

export default App
