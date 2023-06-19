"use client";
import React, { useEffect, useState } from "react";
import styles from "./addUserForm.module.css";
import { InputForm, InputValidation } from "@/app/users/UsersTypes";
import { inputPatternValidation, validateInputForm } from "./validationTools";

/**
 * Gender list
 */
const GENDER = [
  "Male",
  "Female",
  // "Agender",
  // "Polygender",
  // "Genderfluid",
  // "Bigender",
  // "Non-binary",
  // "Genderqueer",
];

  
interface AddUserFormProps {
    onClose: () => void;
    onSubmit: (input:InputForm) => void;
  }

const initialInput = {
  name: "",
  gender: "Male",
  phone: "",
  postalcode: "",
}
export default function AddUserForm({ onClose, onSubmit }: AddUserFormProps) {

  // Define state variables for form inputs and validation
  const [inputForm, setInputForm] = useState<InputForm>(initialInput);
  const [validate, setValidate] = useState<InputValidation>({
    name: false,
    gender: false,
    phone: false,
    postalcode: false,
  });

  // Define state for form validation
  const [isValidForm, setIsValidForm] = useState(false);
  
  // When the form changes, validate the form 
  useEffect(() => {
  setIsValidForm(validateInputForm(inputForm, setValidate));
  }, [inputForm]);

  // Handle changes in gender selection
  const handleGenderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setInputForm({ ...inputForm, gender: event.target.value });
  };

  // Handle input changes in form fields
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    inputPatternValidation(event)
    setInputForm({ ...inputForm, [event.target.name]: event.target.value });
  };

  // Cancel handler for form submission
  const handelCancel = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onClose();
  };

  // Handle form submission
  const handelSubmit = (event: any) => {
    event.preventDefault();

    // If form is not valid, return
    if(!isValidForm) return

    // Send the form data to parent
    onSubmit(inputForm)

    // Reset form validation and form data
    setIsValidForm(false)
    setInputForm(initialInput)
    
    // Close form modal
    onClose()
  };
  return (
    <form
      className={styles.inputForm}
      onReset={handelCancel}
      onSubmit={handelSubmit}
    >
      <div className={styles.row}>
        <label htmlFor="name" className={styles.required} data-text=" *">
          성명
        </label>
        <input 
            id="name" 
            name="name" 
            value={inputForm.name}  
            onChange={handleInputChange}
            pattern="[A-z ]{3,20}"
        />
      </div>
      <small style={{ opacity:  validate.name ? 1 : 0 }}>
        성명은 필수 입력입니다
      </small>

      <div className={styles.row}>
        <label htmlFor="gender" className={styles.required} data-text=" *">
          성별
        </label>
        <select
          id="gender"
          className={styles.select}
          onChange={handleGenderChange}
        >
          {GENDER.map((gender, index) => {
            return <option key={index}>{gender}</option>;
          })}
        </select>
      </div>
      <small style={{ opacity: validate.gender ? 1 : 0 }}>
        성별은 필수 입력입니다
      </small>

      <div className={styles.row}>
        <label htmlFor="phone" data-text=" *">
          전화번호
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={inputForm.phone}
          pattern="[0-9\-\+\(\)]{5,15}"
          onChange={handleInputChange}
        />
      </div>
      <small style={{ opacity: validate.phone ? 1 : 0 }}>
        전화번호은 필수 입력입니다
      </small>

      <div className={styles.row}>
        <label htmlFor="postalcode" data-text=" *">
          우편번호
        </label>
        <input
          type="text"
          id="postalcode"
          name="postalcode"
          value={inputForm.postalcode}
          pattern="[0-9\-]{5,10}"
          onChange={handleInputChange}
        />
      </div>
      <small style={{ opacity: validate.postalcode ? 1 : 0 }}>
        우편번호은 필수 입력입니다
      </small>

      <div className={styles.footer}>
        <button
          type="reset"
          className={`${styles.submitButton} ${styles.cancelButton}`}
        >
          취소
        </button>
        <button 
          type="submit" 
          className={styles.submitButton}
          disabled={!isValidForm}
          >
          추가
        </button>
      </div>
    </form>
  );
}

