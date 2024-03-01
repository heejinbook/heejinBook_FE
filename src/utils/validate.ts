const Email_Regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const Password_Regex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,20}$/;

export const validateEmail = (value: string) => {
  return Email_Regex.test(value);
};

export const validatePassword = (value: string) => {
  return Password_Regex.test(value);
};

export const validateEqualPassword = (password1: string, password2: string) => {
  return password1 === password2;
};

export const validateEmpty = (value: string) => {
  return value.trim() !== '';
};

export const validateRating = (value: number) => {
  return value >= 1;
};

export const validateLimitLength = (value: string) => {
  return value.length <= 10;
};
