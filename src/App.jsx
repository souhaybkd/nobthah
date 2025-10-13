import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { LanguageProvider } from "./contexts/LanguageContext";

import Home from "./pages/home/Home"
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import ForgotPassword from "./pages/forgot-password/ForgotPassword";
import ResetPassword from "./pages/reset-password/ResetPassword";
import PaymentSuccess from "./pages/payment-success/PaymentSuccess";
import PaymentFailed from "./pages/payment-failed/PaymentFailed";
import Dashboard from "./pages/dashboard/Dashboard";
import Scratch from "./pages/dashboard/scratch/Scratch";
import Resume from "./pages/dashboard/resume template/Resume";
import Account from "./pages/account/Account";
import Navigate from "./pages/navigate/Navigate";
import NotFound from "./pages/notfound/NotFound";
import Privacy from "./pages/privacy/Privacy";
import Terms from "./pages/terms/Terms";

// English version imports
import HomeEn from "./pages/en/home/Home"
import RegisterEn from "./pages/en/register/Register";
import LoginEn from "./pages/en/login/Login";
import ForgotPasswordEn from "./pages/en/forgot-password/ForgotPassword";
import ResetPasswordEn from "./pages/en/reset-password/ResetPassword";
import PaymentSuccessEn from "./pages/en/payment-success/PaymentSuccess";
import PaymentFailedEn from "./pages/en/payment-failed/PaymentFailed";
import DashboardEn from "./pages/en/dashboard/Dashboard";
import ScratchEn from "./pages/en/dashboard/scratch/Scratch";
import ResumeEn from "./pages/en/dashboard/resume template/Resume";
import AccountEn from "./pages/en/account/Account";
import NavigateEn from "./pages/en/navigate/Navigate";
import NotFoundEn from "./pages/en/notfound/NotFound";
import PrivacyEn from "./pages/en/privacy/Privacy";
import TermsEn from "./pages/en/terms/Terms";

// Loading components
import SplashScreen from "./components/SplashScreen/SplashScreen";
import PageTransition from "./components/PageTransition/PageTransition";

function AppContent() {
  const location = useLocation();
  // const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
    
    // Page transition feature disabled
    // const timer = setTimeout(() => {
    //   setIsTransitioning(false);
    // }, 500);
    // return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {/* Page transition disabled */}
      {/* {isTransitioning && <PageTransition />} */}
      <Routes>
      {/* Original routes (default language) */}
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/payment-success" element={<PaymentSuccess />} />
      <Route path="/payment-failed" element={<PaymentFailed />} />
      <Route path="/account" element={<Account />} />
      <Route path="navigate/dashboard" element={<Dashboard />} />
      <Route path="navigate/dashboard/create-resume-from-scratch" element={<Scratch />} />
      <Route path="navigate/dashboard/create-resume-from-scratch/resume/:id" element={<Resume />} />
      <Route path="/navigate" element={<Navigate />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/terms" element={<Terms />} />
      
      {/* English version routes */}
      <Route path="/en" element={<HomeEn />} />
      <Route path="/en/register" element={<RegisterEn />} />
      <Route path="/en/login" element={<LoginEn />} />
      <Route path="/en/forgot-password" element={<ForgotPasswordEn />} />
      <Route path="/en/reset-password" element={<ResetPasswordEn />} />
      <Route path="/en/payment-success" element={<PaymentSuccessEn />} />
      <Route path="/en/payment-failed" element={<PaymentFailedEn />} />
      <Route path="/en/account" element={<AccountEn />} />
      <Route path="/en/navigate/dashboard" element={<DashboardEn />} />
      <Route path="/en/navigate/dashboard/create-resume-from-scratch" element={<ScratchEn />} />
      <Route path="/en/navigate/dashboard/create-resume-from-scratch/resume/:id" element={<ResumeEn />} />
      <Route path="/en/navigate" element={<NavigateEn />} />
      <Route path="/en/privacy" element={<PrivacyEn />} />
      <Route path="/en/terms" element={<TermsEn />} />
      
      {/* 404 Not Found routes */}
      <Route path="/en/*" element={<NotFoundEn />} />
      <Route path="*" element={<NotFound />} />
      
      {/* <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/account" element={<Account />} /> */}
      </Routes>
    </>
  );
}

function App() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  return (
    <>
      {showSplash ? (
        <SplashScreen onComplete={handleSplashComplete} />
      ) : (
        <BrowserRouter>
          <LanguageProvider>
            <AppContent />
          </LanguageProvider>
        </BrowserRouter>
      )}
    </>
  );
}

export default App
