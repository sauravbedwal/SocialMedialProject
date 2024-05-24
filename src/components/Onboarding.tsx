import React from "react";
import "./style.css"
import Button from "./Button";
import {Link} from "react-router-dom";

const Onboarding = () => {
    
    return (
        <div className="container">
        <div className="image-border">
            <div className="background"></div>
            </div>
            <div className="onboarding-heading">
                <h1>Let's connect with each other</h1>
            </div>
            <div className="onboarding-paragraph">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
            </div>
            <div className="slider">
                _____
            </div>
            <Link to="/signIn"><Button title={"Get started"} /></Link>
        </div>
    )
}

export default Onboarding;