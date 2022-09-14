import "./login.css";
import React from 'react';
import TopbarLogin from "../../components/topbar/Login";


export default function Login() {
    return (
        <>
        <TopbarLogin/>
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Nghiện Hood</h3>
                    <span className="loginDesc">
Mạng xã hội kết nối bạn nghiện          </span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder="Email" className="loginInput" />
                        <input placeholder="Password" className="loginInput" />
                        <button className="loginButton">Log In</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <button className="loginRegisterButton">
                            Create a New Account
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </>

    );
}
