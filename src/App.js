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
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
