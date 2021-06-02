import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Check from "@material-ui/icons/Check";
import StepConnector from "@material-ui/core/StepConnector";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import OnboardingNavbar from "../../components/OnboardingNavbar/OnboardingNavbar";
import StepOne from "./Steps/StepOne/StepOne";
import "./onboardingsteps.css";
import StepOneUpper from "./Steps/StepOne/StepOneUpper";
import StepThreeUpper from "./Steps/StepThree/StepThreeUpper";
import StepThree from "./Steps/StepThree/StepThree";
import StepFourUpper from "./Steps/StepFour/StepFourUpper";
import StepFour from "./Steps/StepFour/StepFour";
import FinishStep from "./Steps/FinishStep/FinishStep";
import FinishStepUpper from "./Steps/FinishStep/FinishStepUpper";
import { useMediaQuery } from "react-responsive";
import StepTwoUpper from "./Steps/StepTwo/StepTwoUpper";
import StepTwo from "./Steps/StepTwo/StepTwo";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import InitialStepUpper from "./Steps/InitialStep/InitialStepUpper";
import InitialStepLower from "./Steps/InitialStep/InitialStepLower";
import { connectorStyles, stepIconStyle } from "./utils/stepperStyles";

const list = [
  "Alcohol",
  "Cocaine",
  "Heroin",
  "Prescription Opioids",
  "Prescription Stimulants",
  "MDMA",
  "Methamphetamine",
  "Hallucinogens",
  "Other",
];

const createList = (list) => {
  return list.map((l) => {
    return { status: false, content: l };
  });
};

const ColorlibConnector = withStyles(connectorStyles)(StepConnector);
const useColorlibStepIconStyles = makeStyles(stepIconStyle);

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;
  const icons = {
    1: "",
    2: "",
    3: "",
  };
  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

ColorlibStepIcon.propTypes = {
  active: PropTypes.bool,
  completed: PropTypes.bool,
  icon: PropTypes.node,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return [
    "Select campaign settings",
    "Create an ad group",
    "Create an ad",
    "Create an ad on Step4",
    "Create an ad on Step5",
  ];
}

const handleBack = (setActiveStep) => {
  setActiveStep((prevActiveStep) => prevActiveStep - 1);
};

export default function CustomizedSteppers() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [itemsList, setItemsList] = React.useState(createList(list));

  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  React.useEffect(() => {
    console.log(activeStep);
  }, [activeStep]);

  function getStepContent(step) {
    switch (step) {
      case 0:
        return {
          id: 0,
          upper: <InitialStepUpper />,
          lower: <InitialStepLower />,
        };
      case 1:
        return { id: 1, upper: <StepOneUpper />, lower: <StepOne /> };
      case 2:
        return { id: 2, upper: <StepTwoUpper />, lower: <StepTwo /> };
      case 3:
        return {
          id: 3,
          upper: <StepThreeUpper />,
          lower: (
            <StepThree itemsList={itemsList} setItemsList={setItemsList} />
          ),
        };
      case 4:
        return {
          id: 4,
          upper: <StepFourUpper />,
          lower: <StepFour itemsList={itemsList} />,
        };
      default:
        return "Unknown step";
    }
  }

  return (
    <div className={classes.root}>
      <div className={"stepContainer"}>
        <OnboardingNavbar />
        <div className="pageContent">
          {activeStep === steps.length ? (
            <div>
              <FinishStepUpper />
            </div>
          ) : (
            getStepContent(activeStep).upper
          )}
          <Stepper
            style={{ background: "none" }}
            alternativeLabel
            activeStep={activeStep}
            connector={<ColorlibConnector />}
          >
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel StepIconComponent={ColorlibStepIcon}></StepLabel>
              </Step>
            ))}
          </Stepper>
          {/* when all steps are finished */}
          {activeStep === steps.length ? (
            <div>
              <FinishStep />
            </div>
          ) : (
            <>
              {getStepContent(activeStep).lower}
              <div className="btnsContainerWrapper">
                <div className="actionBtns">
                  <button
                    className="prevBtn"
                    disabled={activeStep === 0}
                    onClick={() => handleBack(setActiveStep)}
                  >
                    <svg
                      width="14"
                      height="10"
                      viewBox="0 0 14 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M4.92192 0.947368C4.64757 0.684211 4.20447 0.684211 3.93012 0.947368L0.207585 4.51803C-0.0693741 4.78369 -0.0693741 5.2163 0.207585 5.48196L3.93002 9.05262C4.06766 9.18453 4.24742 9.25 4.42593 9.25C4.60441 9.25 4.78421 9.18457 4.92181 9.05264C5.19877 8.78698 5.19879 8.35435 4.92183 8.08869L2.41008 5.67934H12.9326C13.3169 5.67934 13.6362 5.37935 13.6362 4.99999C13.6362 4.62059 13.3169 4.32065 12.9326 4.32065H2.41009L4.92192 1.9113C5.19888 1.64564 5.19888 1.21303 4.92192 0.947368Z"
                        fill="#505050"
                      />
                    </svg>
                    <span>Previous</span>
                  </button>
                  <div className="nextBtn" onClick={handleNext}>
                    <span>
                      {activeStep === steps.length - 1 ? "Finish" : "Next"}
                    </span>
                    <svg
                      width="14"
                      height="10"
                      viewBox="0 0 14 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M4.92192 0.947368C4.64757 0.684211 4.20447 0.684211 3.93012 0.947368L0.207585 4.51803C-0.0693741 4.78369 -0.0693741 5.2163 0.207585 5.48196L3.93002 9.05262C4.06766 9.18453 4.24742 9.25 4.42593 9.25C4.60441 9.25 4.78421 9.18457 4.92181 9.05264C5.19877 8.78698 5.19879 8.35435 4.92183 8.08869L2.41008 5.67934H12.9326C13.3169 5.67934 13.6362 5.37935 13.6362 4.99999C13.6362 4.62059 13.3169 4.32065 12.9326 4.32065H2.41009L4.92192 1.9113C5.19888 1.64564 5.19888 1.21303 4.92192 0.947368Z"
                        fill="#ffffff"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
