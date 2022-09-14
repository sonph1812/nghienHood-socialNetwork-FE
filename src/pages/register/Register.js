import "./register.css";
import React from 'react';
import TopbarLogin from "../../components/topbar/Login";

export default function Register() {
    return (
        <>
        <TopbarLogin/>
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h2 className="loginLogo">Nghiện Hood</h2>
                    <span className="loginDesc">
            Mạng xã hội kết nối người nghiện.
          </span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder="Username" className="loginInput" />
                        <input placeholder="Email" className="loginInput" />
                        <input placeholder="Password" className="loginInput" />
                        <input placeholder="Password Again" className="loginInput" />
                        <button className="loginButton">Sign Up</button>
                        <button className="loginRegisterButton">
                            Log into Account
                        </button>
                    </div>
                </div>
            </div>
        </div>
</>
    );
}
