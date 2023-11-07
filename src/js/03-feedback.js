import { forEach, throttle } from 'lodash';

const refs = {
  feedbackFormEl: document.querySelector('.feedback-form'),
};

refs.feedbackFormEl.addEventListener(
  'input',
  throttle(onfeedbackFormInput, 500)
);
refs.feedbackFormEl.addEventListener('submit', onfeedbackFormSubmit);

function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function onfeedbackFormInput(e) {
  const userInputData = {};

  const formData = new FormData(refs.feedbackFormEl);
  formData.forEach((value, key) => {
    userInputData[key] = value;
  });

  save('feedback-form-state', userInputData);
}

function load(key) {
  const data = localStorage.getItem(key);
  try {
    return JSON.parse(data);
  } catch (error) {
    console.log(error);
    return data;
  }
}

function onLoad() {
  const data = load('feedback-form-state') || {};

  for (const key of Object.keys(data)) {
    refs.feedbackFormEl.elements[key].value = data[key];
  }
}

function onfeedbackFormSubmit(e) {
  e.preventDefault();
  const dataMsg = load('feedback-form-state');
  localStorage.removeItem('feedback-form-state');
  e.target.reset();
  console.log(dataMsg);
}

onLoad();
