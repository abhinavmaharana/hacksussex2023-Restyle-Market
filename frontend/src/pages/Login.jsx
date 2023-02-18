import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LoginForm from "../components/LoginForm";

export default function Register() {
  return (
    <div className="Login">
        <Navbar/>
        <LoginForm/>
        <Footer/>
    </div>
  );
}
