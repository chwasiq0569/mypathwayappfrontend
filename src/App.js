import "./App.css";
import React from "react";
import AuthPage from "./pages/AuthPage/AuthPage";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import InitialStep from "./pages/Onboarding/InitialStep";
import CustomizedSteppers from "./pages/Onboarding/OnboardingSteps";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Switch>
        <Route exact path="/" component={AuthPage} />
        <Route path="/onboarding" component={CustomizedSteppers} />
      </Switch>
    </MuiPickersUtilsProvider>
  );
}

export default App;
