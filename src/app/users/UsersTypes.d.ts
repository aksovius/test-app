export interface InputForm {
    name: string;
    gender: string;
    phone: string;
    postalcode: string;
}

export interface InputValidation {
    name: boolean;
    gender: boolean;
    phone: boolean;
    postalcode: boolean;
}

export interface User {
    first_name: string;
    gender: string;
    phone_number: string;
    address: {
      zip_code: string;
    };
  }