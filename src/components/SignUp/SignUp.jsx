import React, { useState } from "react";
import "../SignIn/signin.css";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import EmailIcon from "../../assets/icons/emailicon.png";
import PasswordIcon from "../../assets/icons/passwordicon.png";
import NameIcon from "../../assets/icons/usericon.png";
import NetworkIcon from "../../assets/icons/networkicon.png";
import { grey } from "@material-ui/core/colors";
import Checkbox from "@material-ui/core/Checkbox";
import DateRangeIcon from "@material-ui/icons/DateRange";
import InlineDatePicker from "../utils/InlineDatePicker";
import {
  Button,
  createMuiTheme,
  Grid,
  makeStyles,
  MuiThemeProvider,
  Typography,
} from "@material-ui/core";
import {
  nameValidate,
  emailValidate,
  passwordValidate,
  logger,
  isValidField,
} from "../utils/Validators";
import validator from "validator";

const MainTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#0071BC",
    },
  },
});

const SignUp = ({ setSignInPage }) => {
  const [hidePassword, setHidePassword] = useState(true);
  const [selectedDOB, setSelectedDOB] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [networkCode, setNetworkCode] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = React.useState(false);
  const [emailError, setEmailError] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState(false);
  const [formValidated, setFormValidated] = useState(false);
  const [policyChecked, setPolicyChecked] = useState(false);

  React.useEffect(() => {
    formValidate();
  }, [nameError, emailError, passwordError, policyChecked, selectedDOB]);

  const handleHidePassword = () => {
    setHidePassword(!hidePassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    formValidate();
  };

  const formValidate = () => {
    if (
      isValidField(name, nameError) &&
      isValidField(email, emailError) &&
      isValidField(password, passwordError) &&
      policyChecked &&
      selectedDOB
    ) {
      setFormValidated(true);
    } else {
      setFormValidated(false);
    }
  };

  let timeoutEmail;
  const emailHandler = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value);
    if (e.target.value.length === 0) {
      setEmailError(false);
    }
    clearTimeout(timeoutEmail);
    timeoutEmail = setTimeout(function () {
      console.log(
        "emailValidate(e.target.value)",
        emailValidate(e.target.value)
      );
      setEmailError(emailValidate(e.target.value));
    }, 1000);
  };

  let timeoutPassword;
  const passwordHandler = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length === 0) {
      setPasswordError(false);
    }
    clearTimeout(timeoutPassword);
    timeoutPassword = setTimeout(function () {
      console.log(
        "passwordValidate(e.target.value)",
        passwordValidate(e.target.value)
      );
      setPasswordError(passwordValidate(e.target.value));
    }, 1000);
  };

  let timeoutName;
  const nameHandler = (e) => {
    setName(e.target.value);
    clearTimeout(timeoutName);
    timeoutName = setTimeout(function () {
      setNameError(nameValidate(e.target.value));
      console.log("nameValidate(e.target.value)", nameValidate(e.target.value));
    }, 1000);
  };

  const handleCheckbox = () => {
    setPolicyChecked(!policyChecked);
  };

  const handleInputChange = (e, updateState) => {
    updateState(e.target.value);
  };

  return (
    <MuiThemeProvider theme={MainTheme}>
      <div className="formContainer">
        <form>
          <label htmlFor="name" className="authFieldLabel" htmlFor="name">
            <span>Name</span>
            {nameError ? (
              <span className="errorMsg">Name must be of min 3 characters</span>
            ) : null}
          </label>
          <div className="inputFieldContainer">
            <div className="iconContainer">
              <img src={NameIcon} />
            </div>
            <input
              onChange={nameHandler}
              className="authInputField"
              value={name}
              type="name"
              id="name"
              name="name"
              placeholder="e.g. Joseph"
            />
          </div>
          <br />
          <label className="authFieldLabel" htmlFor="dob">
            <span>Date of Birth</span>
            <span className="errorMsg"></span>
          </label>
          <div className="inputFieldContainer">
            <div className="iconContainer" style={{ position: "relative" }}>
              <DateRangeIcon style={{ fontSize: 20, color: grey[500] }} />
              <InlineDatePicker setSelectedDOB={setSelectedDOB} />
            </div>
            <input
              className="authInputField"
              style={{ marginTop: "5px" }}
              type="dob"
              id="dob"
              name="dob"
              placeholder="DD/MM/YYYY"
              value={selectedDOB}
            />
          </div>
          <br />
          <label className="authFieldLabel" htmlFor="email">
            <span>Email Address</span>
            {emailError ? (
              <span className="errorMsg">Enter Valid Email</span>
            ) : null}
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
              placeholder="email@email.com"
              value={email}
              onChange={emailHandler}
            />
          </div>
          <br />
          <label htmlFor="networkcode" className="authFieldLabel">
            <span>Network Code</span>
            <span className="errorMsg"></span>
          </label>
          <div className="inputFieldContainer">
            <div className="iconContainer">
              <img src={NetworkIcon} />
            </div>
            <input
              className="authInputField authInputNumber"
              type="number"
              id="networkcode"
              name="networkcode"
              value={networkCode}
              placeholder="2326565"
              onChange={(e) => handleInputChange(e, setNetworkCode)}
            />
          </div>
          <br />
          <label className="authFieldLabel" htmlFor="password">
            <span>Password</span>
            {passwordError ? (
              <span className="errorMsg">
                Password must be of min 8 characters
              </span>
            ) : null}
          </label>
          <div className="inputFieldContainer">
            <div className="iconContainer">
              <img src={PasswordIcon} />
            </div>
            <input
              className="authInputField"
              value={password}
              type={hidePassword ? "password" : "text"}
              id="password"
              name="password"
              placeholder="minimum 8 characters"
              onChange={passwordHandler}
            />
            <div className="hideShowIcon" onClick={handleHidePassword}>
              {hidePassword ? (
                <VisibilityIcon style={{ fontSize: 20, color: grey[500] }} />
              ) : (
                <VisibilityOffIcon style={{ fontSize: 20, color: grey[500] }} />
              )}
            </div>
          </div>
          <div className="forgetPassword"></div>
          <div className="rememberAccountSection">
            <Checkbox
              style={{ margin: 0, padding: 0, color: "#0071BC" }}
              defaultChecked
              color="primary"
              checked={policyChecked}
              onChange={handleCheckbox}
              inputProps={{ "aria-label": "secondary checkbox" }}
            />{" "}
            <span className="basicfontStylings">
              I accept the <span className="importantInfo">Privacy Policy</span>{" "}
              & <span className="importantInfo">Terms & Conditions</span>
            </span>
          </div>
          <div container className="submitAndSignUp">
            <div className="leftSide">
              <button
                disabled={formValidated ? false : true}
                className="submitBtnForm"
                onClick={handleSubmit}
              >
                Sign Up
              </button>
            </div>
            <div className="rightSide">
              <p className="signUpText">
                Are you a member?
                <strong
                  className="clickable"
                  onClick={() => setSignInPage(true)}
                  style={{ color: "#0071BC", marginLeft: "5px" }}
                >
                  Sign In
                </strong>
              </p>
            </div>
          </div>
        </form>
      </div>
    </MuiThemeProvider>
  );
};

export default SignUp;
