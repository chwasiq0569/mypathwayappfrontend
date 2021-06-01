import React, { useState } from "react";
import "./signin.css";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import EmailIcon from "../../assets/icons/emailicon.png";
import PasswordIcon from "../../assets/icons/passwordicon.png";
import { grey } from "@material-ui/core/colors";
import Checkbox from "@material-ui/core/Checkbox";
import {
  Button,
  createMuiTheme,
  Grid,
  makeStyles,
  MuiThemeProvider,
  Typography,
} from "@material-ui/core";
import validator from "validator";

const MainTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#0071BC",
    },
  },
});

const SignIn = ({ setSignInPage }) => {
  const [hidePassword, setHidePassword] = useState(true);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleHidePassword = () => {
    setHidePassword(!hidePassword);
  };

  return (
    <MuiThemeProvider theme={MainTheme}>
      <div className="formContainer">
        <form>
          <label className="authFieldLabel" htmlFor="email">
            <span>Email Address</span>
            <span className="errorMsg"></span>
          </label>
          <div className="inputFieldContainer">
            <div className="iconContainer">
              <img src={EmailIcon} />
            </div>
            <input
              className="authInputField"
              type="email"
              id="email"
              name="email"
              value={email}
              placeholder="email@email.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <br />
          <label className="authFieldLabel" htmlFor="password">
            <span>Password</span>
            <span className="errorMsg"></span>
          </label>
          <div className="inputFieldContainer">
            <div className="iconContainer">
              <img src={PasswordIcon} />
            </div>
            <input
              className="authInputField"
              type={hidePassword ? "password" : "text"}
              id="password"
              name="password"
              value={password}
              placeholder="minimum 8 characters"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="hideShowIcon" onClick={handleHidePassword}>
              {hidePassword ? (
                <VisibilityIcon style={{ fontSize: 20, color: grey[500] }} />
              ) : (
                <VisibilityOffIcon style={{ fontSize: 20, color: grey[500] }} />
              )}
            </div>
          </div>
          <div className="forgetPassword">
            <p className="basicfontStylings">Forgot Password</p>
          </div>
          <div className="rememberAccountSection">
            <Checkbox
              style={{ margin: 0, padding: 0, color: "#0071BC" }}
              defaultChecked
              color="primary"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />{" "}
            <span className="basicfontStylings">Remember Account</span>
          </div>
          <div container className="submitAndSignUp">
            <div className="leftSide">
              <button className="submitBtnForm">Login</button>
            </div>
            <div className="rightSide">
              <p className="signUpText">
                New Member?
                <strong
                  className="clickable"
                  onClick={() => setSignInPage(false)}
                  style={{ color: "#0071BC", marginLeft: "5px" }}
                >
                  SignUp
                </strong>
              </p>
            </div>
          </div>
        </form>
      </div>
    </MuiThemeProvider>
  );
};

export default SignIn;
