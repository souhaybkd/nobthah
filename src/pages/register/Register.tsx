import React from "react"
import "./register.scss"

export default function Register() {
  return (
    <main className="register-page">
      <div className="form">
        <div className="left">
          x
        </div>
        <div className="right">
          <h2>Welcome To Nobthah</h2>
          <p>Create beautiful resumes at speed</p>
          <input className="name-input" type="text" placeholder="Enter Your Name" />
          <input type="text" placeholder="Enter Your email" />
          <input type="text" placeholder="Create A New Password" />
          <button>Create A New Account</button>
          <div className="or">
            <div className="line"></div>
            <span>OR</span>
            <div className="line"></div>
          </div>
          <button>Visit Login Page</button>
          <button>Forgot Your Password</button>
        </div>
      </div>
      <div className="overlay"></div>
    </main>
  )
}
