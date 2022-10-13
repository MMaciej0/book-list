export const showError = (errorField, message) => {
  errorField.innerText = message;
  setTimeout(() => {
    errorField.innerText = '';
  }, 3000);
};
