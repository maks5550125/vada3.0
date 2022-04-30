const reg = document.querySelector('.reg');
const regPopup = document.querySelector('.reg-popup');
const regPopupBody = document.querySelector('.reg-popup__body');

//Проверка на выбор поля "регистрация"
window.addEventListener('click', function(event) {
    if (regPopup && regPopupBody && body) {
        if (!regPopup.classList.contains('_active')) {
            if (event.target.classList.contains('reg')) {
                regPopup.classList.add('_active');
                body.classList.add('_lock');
                if (sign) {
                    if (sign.classList.contains('_active')) {
                        sign.classList.remove('_active');
                    }
                }
            }
        } else {
            if (!event.target.closest('.reg-popup__body') || event.target.closest('.cancel-button')) {
                regPopup.classList.remove('_active');
                body.classList.remove('_lock');
            }
        }
    }
});

//Проверка поля "Имя"
function nameInputCheck(value) {
    let result = true;

    if (value === '') {
        result = false;
    } else {
        for (let i = 0; i < value.length; i++) {
            for (let j = 0; j < 10; j++) {
                if (value[i] == j) {
                    result = false;
                }
            }
        }
    }

    return result;
}

//Проверка количества цифр
function countingNumberOfDigits(value) {
    let count = 0;

    while (value) {
        count++;
        value = Math.floor(value / 10);
    }
    
    return count;
}

//Проверка поля "Телефон"
function numberInputCheck(value, numberOfDigits) {
    let result = true;

    if (value === '') {
        result = false;
    } else {
        if (countingNumberOfDigits(value) !== numberOfDigits) {
            result = false;
        }
    }

    return result;
}

//Телефон
function allNumbersInputCheck(value) {
    let result = true;

    if (value === '') {
        result = false;
    } else {
        for (let i = 0; i < value.length; i++) {
            let isNumber = false;
    
            for (let j = 0; j < 10; j++) {
                if (value[i] == j) {
                    isNumber = true;
                }
            }
    
            if (!isNumber) {
                result = false;
            }
        }
    }

    return result;
}

//Дата рождения
function dateOfBirthInputCheck(dateOfBirth) {
    let inputIsCorrect = true;

    if (dateOfBirth.length !== 10) {
        inputIsCorrect = false;
    } else {
        for (let i = 0; i < 10; i++) {
            if (i === 2 || i === 5) {continue}

            let isNumber = false;
            
            for (let j = 0; j < 10; j++) { 
                if (dateOfBirth[i] == j) {
                    isNumber = true;
                }
            }

            if (!isNumber) {
                inputIsCorrect = false;
            }
        }

        if (!(dateOfBirth[2] === '.' && dateOfBirth[5] === '.')) {
            inputIsCorrect = false;
        }
    }
    
    return inputIsCorrect;
} 

const regForm = document.forms.reg;
const regName = regForm.regName;
const regSurname = regForm.regSurname;
const regPatronymic = regForm.regPatronymic;
const regPassportSeries = regForm.regPassportSeries;
const regPassportNumber = regForm.regPassportNumber;
const regTel = regForm.regTel;
const regPassword = regForm.regPassword;

//Проверка на ошибки заполнения поля "регистрация"
if  (regForm) {
    regForm.addEventListener('submit', function(event) {
        let regDataIsCorrect = true;

        if (regName && regSurname && regPatronymic && regPassportSeries && regPassportNumber && regTel && regPassword) {
            if (!nameInputCheck(regName.value)) {
                regName.style.border = '1px solid red';
                regDataIsCorrect = false;
            }
            if (!nameInputCheck(regSurname.value)) {
                regSurname.style.border = '1px solid red';
                regDataIsCorrect = false;
            }
            if (!nameInputCheck(regPatronymic.value)) {
                regPatronymic.style.border = '1px solid red';
                regDataIsCorrect = false;
            }
            if (!numberInputCheck(regPassportSeries.value, 4)) {
                regPassportSeries.style.border = '1px solid red';
                regDataIsCorrect = false;
            }
            if (!numberInputCheck(regPassportNumber.value, 6)) {
                regPassportNumber.style.border = '1px solid red';
                regDataIsCorrect = false;
            }
            if (!numberInputCheck(regTel.value, 11)) {
                regTel.style.border = '1px solid red';
                regDataIsCorrect = false;
            }
            if (regPassword.value.length < 5) {
                regPassword.style.border = '1px solid red';
                regDataIsCorrect = false;
            }

            if (!regDataIsCorrect) {
                event.preventDefault(); //Временно, пока нет сервера.
            } else {
                event.preventDefault();
                alert('Функция временно не доступна, приносим извинения.')
            }
        }
    });
}

//Заполнение полей регистрации
if (regName && regSurname && regPatronymic && regPassportSeries && regPassportNumber && regTel && regPassword) {
    regName.addEventListener('focus', function() {
        regName.style.border = '1px solid #c0c0c0';
    });
    regSurname.addEventListener('focus', function() {
        regSurname.style.border = '1px solid #c0c0c0';
    });
    regPatronymic.addEventListener('focus', function() {
        regPatronymic.style.border = '1px solid #c0c0c0';
    });
    regPassportSeries.addEventListener('focus', function() {
        regPassportSeries.style.border = '1px solid #c0c0c0';
    });
    regPassportNumber.addEventListener('focus', function() {
        regPassportNumber.style.border = '1px solid #c0c0c0';
    });
    regTel.addEventListener('focus', function() {
        regTel.style.border = '1px solid #c0c0c0';
    });
    regPassword.addEventListener('focus', function() {
        regPassword.style.border = '1px solid #c0c0c0';
    });
}
