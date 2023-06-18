import { InputForm, InputValidation } from "@/app/users/UsersTypes";
import React from "react";

/**
 * This function validates the value of an input field based on the provided pattern.
 * It checks whether the value matches the pattern, and sets a custom validity message 
 * if the value does not match the pattern. The error message is based on the name
 * of the input field ('name', 'phone', 'postalcode').
 *
 * @param event - The event object from the input field. This function expects 
 *                the event target to have 'value', 'name', and 'pattern' properties.
 */
export const inputPatternValidation = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name, pattern } = event.target;
    const regExp = new RegExp(pattern);
    if (!regExp.test(value)) {
        switch (name) {
            case 'name':
                event.target.setCustomValidity('성명은 3-12자의 영문 사용 가능합니다')
                break;
            case 'phone':
                event.target.setCustomValidity('전화번호은 3-15자의 숫자,-,+,(), 사용 가능합니다')
                break;
            case 'postalcode':
                event.target.setCustomValidity('우편번호은 3-10자의 숫자,- 사용 가능합니다')
                break;
        }
       
    } else {
        event.target.setCustomValidity('');
    }
  }

/**
 * This function validates the form inputs based on their current values and updates
 * the validate state. It checks if the value of each input field in the form matches
 * the specified pattern and sets the corresponding validate state to true if it doesn't,
 * or false if it does.
 *
 * @param inputForm - The current state of the input form fields.
 * @param setValidate - The state setter function for the validate state.
 */
export const validateInputForm = (inputForm: InputForm, setValidate: React.Dispatch<React.SetStateAction<InputValidation>>) => {
  const validationResult: InputValidation = {
    name: false,
    gender: false,
    phone: false,
    postalcode: false,
  };
  let result = true; // true if all fields are valid
  Object.keys(inputForm).forEach((key) => {
    const formKey = key as keyof InputForm;

    let pattern: string;

    switch(formKey) {
      case 'name':
        pattern = "[A-z]{3,12}";
        break;
      case 'phone':
        pattern = "[0-9\\-\\+\\(\\)]{5,15}";
        break;
      case 'postalcode':
        pattern = "[0-9\\-]{5,10}";
        break;
      case 'gender':
        pattern = "[A-z]*";
        break;
      default:
        pattern = "";
    }

    const regex = new RegExp(`^${pattern}$`);
    const isValid = regex.test(inputForm[formKey]);
    validationResult[formKey] = !isValid;
    if (!isValid) {
      result = false;
    }
  });

  setValidate(validationResult);
  return result;
};


