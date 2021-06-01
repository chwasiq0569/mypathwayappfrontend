import { makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import LogoImg from "../../assets/images/Logo.png";
import SignupCover from "../../assets/images/signupcover.png";
import SignIn from "../../components/SignIn/SignIn";
import BottomVector from "../../../src/assets/images/bottomvector.png";
import "./authpage.css";
import SignUp from "../../components/SignUp/SignUp";

const AuthPage = () => {
  const [signInPage, setSignInPage] = useState(true);

  return (
    <div className="authPageContainer">
      <div className="leftSide">
        <div className="contentContainer">
          <div className="logoContainer">
            <img className="logo" alt="mypathways_logo" src={LogoImg} />
          </div>
          {signInPage ? (
            <p className="primaryHeading">Welcome Back!</p>
          ) : (
            <p className="primaryHeading">Welcome To Pathway!</p>
          )}
          {signInPage ? (
            <p className="secondaryText">
              Welcome back to <strong>Pathway</strong>, Good to see you again :)
            </p>
          ) : (
            <p className="secondaryText">
              Welcome to <strong>Pathway</strong>, Hope you will find your all
              solution through this.
            </p>
          )}
          <div className="signInContainer">
            {signInPage ? (
              <SignIn setSignInPage={setSignInPage} />
            ) : (
              <SignUp setSignInPage={setSignInPage} />
            )}
          </div>
        </div>
        <div className="bottomVector">
          <img src={BottomVector} />
        </div>
      </div>
      <div className="rightSide">
        <div className="navbarContainer">
          <ul>
            <li>Home</li>
            <li>Blog</li>
          </ul>
        </div>
        <img className="signUpCoverImage" src={SignupCover} />
      </div>
    </div>
  );
};

export default AuthPage;
