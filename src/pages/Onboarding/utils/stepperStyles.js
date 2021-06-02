import CheckImg from "../../../assets/icons/check.svg";

export const connectorStyles = {
  alternativeLabel: {},
  active: {
    "& $line": {
      backgroundColor: "#0071BC",
    },
  },
  completed: {
    "& $line": {
      backgroundColor: "#0071BC",
    },
  },
  line: {
    width: "cover",
    height: 2,
    border: 0,
    backgroundColor: "#8798B4",
    borderRadius: 1,
    marginLeft: "-10px",
    marginRight: "-10px",
  },
};

export const stepIconStyle = {
  root: {
    backgroundColor: "#fffff",
    zIndex: 1,
    width: "24px",
    height: "24px",
    borderRadius: "50%",
    border: "2px solid #8798B4",
  },
  active: {
    backgroundColor: "white",
    border: "8px solid #0071BC",
    width: "24px",
    height: "24px",
    boxShadow: "0px 4px 8px rgba(0, 84, 139, 0.2)",
  },
  completed: {
    backgroundColor: "white",
    border: "2px solid #0071BC",
    width: "24px",
    height: "24px",
    backgroundImage: `url(${CheckImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
};
