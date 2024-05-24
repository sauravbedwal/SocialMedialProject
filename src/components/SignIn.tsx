import React from "react";
import "./style.css";
import Button from "./Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="container">
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          width: "100%",
          height: "auto",
          margin: "0",
        }}
      >
        <Link to="/">
          <div className="Button-back">
            <div className="arrow-icon">
              <ArrowBackIcon />
            </div>
          </div>
        </Link>
      </div>

      <div className="signInHeading">
        <h1>Hello Again!</h1>
        <p className="signInline">Sign in to your account</p>
      </div>
      <form className="signInForm">
        <input
          className="signInInput1"
          type="email"
          name="email"
          placeholder="Email address"
        />

        <input
          className="signInInput2"
          type="password"
          name="password"
          placeholder="Enter your password"
        />
        <h5>Forgot your password?</h5>
      </form>
      <div>
        <Link to="/menu">
          <Button title={"Sign in"} />
        </Link>
      </div>
      <div className="p-signIn">
        ---------------------- <div className="para-signIn"> Or with </div>
        ----------------------
      </div>

      {/* <div className="secondary-btn"> */}
      <button className="white-btn">
        <GoogleIcon style={{ marginRight: "4px" }} />
        Sign in with Google
      </button>
      {/* </div> */}
      {/* <div className="secondary-btn"> */}
      <button className="white-btn">
        <TwitterIcon style={{ marginRight: "4px" }} />
        Sign in with Twitter
      </button>
      {/* </div> */}
      <p className="p-signUp">
        Don't have account? Let's <a>Sign up</a>
      </p>
    </div>
  );
};

export default SignIn;

//file:///C:/Users/saurav%20sharma/Downloads/Task%20frontend%20developer.pdf
// https://www.figma.com/design/wHXneI09mGwFGwAfC3NAeC/Social-Media-App?node-id=1-22&t=UhsgamRWsEkYeND2-0
