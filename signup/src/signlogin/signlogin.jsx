import React, { useState } from "react";
import "./signlogin.css";
import user_icon from "../assets/Assets/person.png";
import email_icon from "../assets/Assets/email.png";
import password_icon from "../assets/Assets/password.png";

export const SignLogin = () => {
  const [action, setAction] = useState("sign up");

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "login" ? (
          <div></div>
        ) : (
          <div className="input">
            <img src={user_icon} alt="user icon" />
            <input type="text" placeholder="Username" />
          </div>
        )}
        <div className="input">
          <img src={user_icon} alt="user icon" />
          <input type="text" placeholder="Username" />
        </div>
        <div className="input">
          <img src={email_icon} alt="email icon" />
          <input type="email" placeholder="Email" />
        </div>
        <div className="input">
          <img src={password_icon} alt="password icon" />
          <input type="password" placeholder="Password" />
        </div>
      </div>
      {action == "signup" ? (
        <div></div>
      ) : (
        <div className="forgot-password">
          lost password <span>click here</span>
        </div>
      )}
      <div className="submit-container">
        <div
          className={action === "login" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("signup");
          }}
        >
          signup
        </div>
        <div
          className={action === "signup" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("login");
          }}
        >
          login
        </div>
      </div>
    </div>
  );
};
