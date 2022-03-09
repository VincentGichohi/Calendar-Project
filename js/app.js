const birthdayEl = document.querySelector('#birthday');
const result = document.querySelector('.form-field')
// const submidocumentt = .getElementById('submit');
const male = document.getElementById('flexRadioDefault1');//For the male radio button
const female = document.getElementById('flexRadioDefault2');//For the female radio button
const submit = document.getElementById('submit')//For the submit button

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


form.addEventListener('submit', (e) => {
    let messages = []
    if (dateOfBirth === 0 || dateOfBirth === NaN) {
        messages.push('Date of birth cannot be empty')
    }

    e.preventDefault();
});

//a functions that links with the submit button
    
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

// form.addEventListener('input', debounce(function (e) {
//     switch (e.target.id) {
//         case 'username':
//             checkUsername();
//             break;
//         case 'email':
//             checkEmail();
//             break;
//         case 'password':
//             checkPassword();
//             break;
//         case 'confirm-password':
//             checkConfirmPassword();
//             break;
//     }
// }));
