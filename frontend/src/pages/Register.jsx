import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RegisterForm from "../components/ResgisterForm";
export default function Register() {
  return (
    <div className="Register">
        <Navbar/>
        <RegisterForm/>
        <Footer/>
    </div>

  );
}
