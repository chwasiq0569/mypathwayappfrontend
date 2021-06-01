import "./App.css";
import React from "react";
import AuthPage from "./pages/AuthPage/AuthPage";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import InitialStep from "./pages/Onboarding/InitialStep";
import CustomizedSteppers from "./pages/Onboarding/OnboardingSteps";

function App() {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <AuthPage />
      {/* <InitialStep /> */}
      {/* <CustomizedSteppers /> */}
    </MuiPickersUtilsProvider>
  );
}

export default App;
