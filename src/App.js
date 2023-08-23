import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import HomeLayout from "./components/Layouts/HomeLayout";
import About from "./pages/about/About";
import Login from "./pages/authentication/Login";
import SignUp from "./pages/authentication/SignUp";
import Home from "./pages/home/Home";
import PrivacyPolicy from "./pages/privacy/PrivacyPolicy";
import ContactUs from "./pages/contact/ContactUs"; 
 import Terms from "./pages/terms/Terms";
import GetCode from "./pages/getcode/GetCode";
import ForgotPassword from "./pages/authentication/ForgotPassword";
import ResetPassword from "./pages/authentication/ResetPassword";



function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />

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
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
