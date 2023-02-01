'use strict';

const reset = document.querySelector('.cheque__reset');
const formInputs = document.querySelectorAll('input');

const amount = document.querySelector('#amount');
const total = document.querySelector('#total');

// GETTERS
const getBill = function () {
  return document.querySelector('.form__input[id="bill"]').value;
};

const getTip = function () {
  const tipSelect = document.querySelectorAll('.tip__checkbox');
  const tipCustom = document.querySelector('.tip__custom');

  if (tipCustom.value !== '') {
    return tipCustom.value / 100;
  }

  const box = Array.from(tipSelect).find((select) => select.checked);

  return (
    document
      .querySelector(`label[for="${box.getAttribute('id')}"]`)
      .textContent.slice(0, -1) / 100
  );
};

const getPeople = function () {
  return document.querySelector('.form__input[id="people"]').value;
};

// VALIDATORS
const handleError = function (errorField, message, error = true) {
  if (error) {
    errorField.classList.add('form__error--active');
  } else {
    ('removed');
    errorField.classList.remove('form__error--active');
  }
  errorField.textContent = message;
};

const validBill = function () {
  const errorMsg = document.querySelector('#bill-error');

  if (!document.querySelector('.form__input[id="bill"]').checkValidity()) {
    //display error
    handleError(errorMsg, 'Invalid number');
    return false;
  }

  if (getBill() <= 0) {
    //display error
    handleError(errorMsg, "Can't be 0");
    return false;
  }

  handleError(errorMsg, '', false);
  return true;
};

const validTip = function () {
  const tipCustom = document.querySelector('.tip__custom');

  let valid = tipCustom.checkValidity();

  if (tipCustom.value === '') {
    valid = false;
  }

  const tipSelect = document.querySelectorAll('.tip__checkbox');

  const checked = Array.from(tipSelect).some((select) => select.checked);

  return valid || checked;
};

const validPeople = function () {
  const errorMsg = document.querySelector('#people-error');

  if (getPeople() === '') return false;

  if (!document.querySelector('.form__input[id="people"]').checkValidity()) {
    //display error
    handleError(errorMsg, 'Invalid number');
    return false;
  }

  if (getPeople() <= 0) {
    //display error
    handleError(errorMsg, "Can't be 0");
    return false;
  }

  handleError(errorMsg, '', false);
  return true;
};

// FUNCTIONS
const calculateTip = function (bill, tipPercent, people) {
  amount.textContent = '$' + ((bill * tipPercent) / people).toFixed(2);
  total.textContent = '$' + ((bill * (tipPercent + 1)) / people).toFixed(2);
};

reset.addEventListener('click', function () {
  reset.classList.remove('cheque__reset--enabled');
  formInputs.forEach((input) => {
    input.value = '';
    input.checked = false;
    amount.textContent = '$0.00';
    total.textContent = '$0.00';
  });
});

// MAIN - ON CHANGE
formInputs.forEach(function (input) {
  input.addEventListener('change', function () {
    reset.classList.remove('cheque__reset--enabled');

    if (this.classList.contains('tip__checkbox')) {
      document.querySelector('.tip__custom').value = '';
    }

    if (this.classList.contains('tip__custom')) {
      const tipSelect = document.querySelectorAll('.tip__checkbox');
      tipSelect.forEach((select) => (select.checked = false));
    }

    if (!validBill()) return;
    if (!validTip()) return;
    if (!validPeople()) return;

    reset.classList.add('cheque__reset--enabled');
    calculateTip(getBill(), getTip(), getPeople());
  });
});
