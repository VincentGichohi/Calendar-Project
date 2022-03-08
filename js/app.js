const birthdayEl = document.querySelector('#birthday');
const genderEl = document.querySelector('#gender');
const passwordEl = document.querySelector('#password');
const confirmPasswordEl = document.querySelector('#confirm-password');

const form = document.querySelector('#submit');


const checkDateOfBirth = () => {

    let valid = false;

    const min = 3,
        max = 25;

    const birthday = birthdayEl.value.trim();

    if (!isRequired(birthday)) {
        showError(birthdayEl, 'Username cannot be blank.');
    } else if (!isBetween(username.length, min, max)) {
        showError(birthdayEl, `Username must be between ${min} and ${max} characters.`)
    } else {
        showSuccess(birthdayEl);
        valid = true;
    }
    return valid;
};

const checkEmail = () => {
    let valid = false;
    const email = genderEl.value.trim();
    if (!isRequired(email)) {
        showError(genderEl, 'Email cannot be blank.');
    } else if (!isEmailValid(email)) {
        showError(genderEl, 'Email is not valid.')
    } else {
        showSuccess(genderEl);
        valid = true;
    }
    return valid;
};


const isEmailValid = (email) => {
    const DayOfTheWeek=(((CC/4)-2*CC-1)+((5*YY/4))+((26*(MM+1)/10))+DD)%7

    return re.test(email);
};

const isPasswordSecure = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
};

const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;


const showError = (input, message) => {
    // get the form-field element
    const formField = input.parentElement;
    // add the error class
    formField.classList.remove('success');
    formField.classList.add('error');

    // show the error message
    const error = formField.querySelector('small');
    error.textContent = message;
};

const showSuccess = (input) => {
    // get the form-field element
    const formField = input.parentElement;

    // remove the error class
    formField.classList.remove('error');
    formField.classList.add('success');

    // hide the error message
    const error = formField.querySelector('small');
    error.textContent = '';
}


form.addEventListener('submit', function (e) {
    // prevent the form from submitting
    e.preventDefault();

    // validate fields
    let isUsernameValid = checkUsername(),
        isEmailValid = checkEmail(),
        isPasswordValid = checkPassword(),
        isConfirmPasswordValid = checkConfirmPassword();

    let isFormValid = isUsernameValid &&
        isEmailValid &&
        isPasswordValid &&
        isConfirmPasswordValid;

    // submit to the server if the form is valid
    if (isFormValid) {

    }
});


const debounce = (fn, delay = 500) => {
    let timeoutId;
    return (...args) => {
        // cancel the previous timer
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        // setup a new timer
        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay);
    };
};

form.addEventListener('input', debounce(function (e) {
    switch (e.target.id) {
        case 'username':
            checkUsername();
            break;
        case 'email':
            checkEmail();
            break;
        case 'password':
            checkPassword();
            break;
        case 'confirm-password':
            checkConfirmPassword();
            break;
    }
}));