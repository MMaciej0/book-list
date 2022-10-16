export const showError = (errorField, message) => {
  errorField.innerText = message;
  errorField.style.opacity = 1;
  setTimeout(() => {
    errorField.style.opacity = 0;
  }, 3000);
};
