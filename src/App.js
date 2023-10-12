import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import DashboardLayout from "./components/Layouts/DashboardLayout";
import HomeLayout from "./components/Layouts/HomeLayout";
import About from "./pages/about/About";
import ForgotPassword from "./pages/authentication/ForgotPassword";
import Login from "./pages/authentication/Login";
import ResetPassword from "./pages/authentication/ResetPassword";
import SignUp from "./pages/authentication/SignUp";
import ContactUs from "./pages/contact/ContactUs";
import Dashboard from "./pages/dashboard/Dashboard";
import GetCode from "./pages/getcode/GetCode";
import Home from "./pages/home/Home";
import PrivacyPolicy from "./pages/privacy/PrivacyPolicy";
import Terms from "./pages/terms/Terms";
import Settings from "./pages/dashboard/settings/settings.js";
import Withdrawal from "./pages/dashboard/withdrawal/withdrawal.js";
function App() {
  return (
    <HelmetProvider>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="contact-us" element={<ContactUs />} />
            <Route path="terms" element={<Terms />} />
            <Route path="get-code" element={<GetCode />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="reset-password/:email" element={<ResetPassword />} />

          {/* Dashboard */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="settings" element={<Settings />} />
          <Route path="withdrawal" element={<Withdrawal />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
