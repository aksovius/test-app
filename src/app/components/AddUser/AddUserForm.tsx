"use client";
import React, { useState } from "react";
import styles from "./addUserForm.module.css";
import { InputForm, InputValidation } from "@/app/types/UsersTypes";
import { inputPatternValidation, validateInputForm } from "./inputValidationTools";

/**
 * Gender list
 */
const GENDER = [
  "Male",
  "Female",
  "Agender",
  "Polygender",
  "Genderfluid",
  "Bigender",
  "Non-binary",
  "Genderqueer",
];

  
interface AddUserFormProps {
    onClose: () => void;
  }


export default function AddUserForm({ onClose }: AddUserFormProps) {
  const [inputForm, setInputForm] = useState<InputForm>({
    name: "",
    gender: "Male",
    phone: "",
    postalcode: "",
  });
  const [validate, setValidate] = useState<InputValidation>({
    name: false,
    gender: false,
    phone: false,
    postalcode: false,
  });

  const handleGenderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setInputForm({ ...inputForm, gender: event.target.value });
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    inputPatternValidation(event)
    setInputForm({ ...inputForm, [event.target.name]: event.target.value });
  };
  const handelCancel = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onClose();
  };

  const handelSubmit = (event: any) => {
    event.preventDefault();
    // validate the form
    if(!validateInputForm(inputForm, setValidate)) return
    // send the form
    
    console.log(validate)
    console.log(inputForm);
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
            pattern="[A-z]{3,12}"
        />
      </div>
      <small style={{ opacity: validate.name ? 1 : 0 }}>
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
        <button type="submit" className={styles.submitButton}>
          추가
        </button>
      </div>
    </form>
  );
}

