import "../public/index.html";
import { validations } from "./validations/validations";
import {
  createDynamicInput,
  addChildToElement,
  getLoader,
  removeLoader,
  setErrorText,
  setActiveTab,
} from "./util/util";

//Initial state
const state = {
  signUpMethod: "phone",
};

//UI ELEMENTS
const modalEl = document.querySelector("#modal");
const modalCloseBtn = document.querySelector("#modal__close-button");
modalCloseBtn.onclick = () => {
  modalEl.className = "modal-close";
};
//NAVIGATION ELEMENTS
const phoneTabElement = document.querySelector("#phone-tab");
const emailTabElement = document.querySelector("#email-tab");
phoneTabElement.onclick = () => {
  generateUI("phone");
};
emailTabElement.onclick = () => {
  generateUI("email");
};
//FORM ELEMENTS
const form = document.forms["registration-form"];
const submitBtn = document.querySelector(".submit-button");

form.onsubmit = (e) => {
  e.preventDefault();

  setErrorText("");
  addChildToElement(form, getLoader());
  const formValues = {};
  formValues[state.signUpMethod] = form[state.signUpMethod].value;
  formValues.currency = form.currency.value;
  formValues.termsConditions = form["terms-conditions"].checked
    ? form["terms-conditions"].value
    : "";
  formValues.promoNotifications = form["promo-notifications"].checked
    ? form["promo-notifications"].value
    : "";
  if (formValues[state.signUpMethod].length <= 5) {
    setErrorText(`The value is too short.`);
    removeLoader();
    return;
  }
  if (
    !formValues[state.signUpMethod].match(validations[state.signUpMethod].test)
  ) {
    setErrorText(`The value is not valid.`);
    removeLoader();
    return;
  } else {
    //api call simulation
    submitBtn.setAttribute("disabled", "true");
    setTimeout(() => {
      console.log(formValues);
      removeLoader();
      form.reset();
      modalEl.className = "modal-open";
      submitBtn.removeAttribute("disabled");
    }, 2000);
  }
};

const generateUI = (c) => {
  const el = document.querySelector(`[name=${state.signUpMethod}]`);
  const signUpFieldEl = document.querySelector("#sign-up-field");
  const signUpLabelEl = document.querySelector(".form-field__title");
  switch (c) {
    case "phone":
      {
        if (el !== null) {
          signUpFieldEl.removeChild(el);
        }

        state.signUpMethod = "phone";
        signUpLabelEl.textContent = "Phone number";
        addChildToElement(
          signUpFieldEl,
          createDynamicInput("tel", state.signUpMethod)
        );
        setActiveTab(phoneTabElement);
        setErrorText("");
      }
      break;
    case "email":
      {
        if (el !== null) {
          signUpFieldEl.removeChild(el);
        }
        state.signUpMethod = "email";
        signUpLabelEl.textContent = signUpLabelEl.textContent = "Email address";
        addChildToElement(
          signUpFieldEl,
          createDynamicInput("email", state.signUpMethod)
        );
        setActiveTab(emailTabElement);
        setErrorText("");
      }
      break;
    default:
      return false;
  }
};
document.body.onload = () => generateUI(state.signUpMethod);
