import validator from "validator";

export const nameValidate = (value) => {
  if (value.toString().trim().length < 3) {
    return true;
  } else {
    return false;
  }
};

export const emailValidate = (value) => {
  if (!validator.isEmail(value.toString().trim())) {
    return true;
  } else {
    return false;
  }
};

export const passwordValidate = (value) => {
  if (value.trim().toString().length < 8) {
    return true;
  } else {
    return false;
  }
};

export const logger = (arr) => {
  console.log("=====================");
  arr.forEach((elem) => {
    console.log(elem);
  });
};

export const isValidField = (val, error) => {
  return val.length !== 0 && !error;
};
