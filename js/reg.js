//Переменная показывает, зашел ли пользователь
let userLoggedIn = false;

//Проверка, вошел ли пользователь через cookie
document.addEventListener('DOMContentLoaded', function() {
    userLoggedIn = document.cookie.slice(8) === 'true';

    if (userLoggedIn) {
        loginInInterface();
    }
})

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

const regForm = document.forms.reg;
const regEmail = regForm.regEmail;
const regPassword = regForm.regPassword;
const regPasswordRepeat = regForm.regPasswordRepeat;

//Проверка на ошибки заполнения поля "регистрация"
if (regForm) {
    regForm.addEventListener('submit', function(event) {
        let emailForm = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        let regDataIsCorrect = true;

        if (regPassword) {
            if (!emailForm.test(regEmail.value)) {
                regEmail.style.border = '1px solid red';
                regDataIsCorrect = false;
            }
            if (regPassword.value.length < 6) {
                regPassword.style.border = '1px solid red';
                regDataIsCorrect = false;
            }
            if (regPasswordRepeat.value.length < 6) {
                regPasswordRepeat.style.border = '1px solid red';
                regDataIsCorrect = false;
            }
            if (regPassword.value !== regPasswordRepeat.value) {
                regPassword.style.border = '1px solid red';
                regPasswordRepeat.style.border = '1px solid red';
                regDataIsCorrect = false;
            }

            if (!regDataIsCorrect) {
                event.preventDefault();
            } else {
                event.preventDefault();

                const apiKey = 'AIzaSyDTdcnXHRjILXIwDCfjjY1ebo6vsHDWkq0';
                fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`, {
                    method: 'POST',
                    body: JSON.stringify({
                        email: regEmail.value,
                        password: regPassword.value,
                        returnSecureToken: true
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                .then(responce => responce.json())
                .then(data => {
                    if (data.idToken) {
                        loginInInterface();

                        regEmail.value = '';
                        regPassword.value = '';
                        regPasswordRepeat.value = '';
                    } else {
                        regBringError();
                    }
                });


            }
        }
    });
}

//Заполнение полей регистрации
if (regPassword && regPasswordRepeat) {
    regEmail.addEventListener('focus', function() {
        regEmail.style.border = '1px solid #c0c0c0';
        if (regPopupBody.querySelector('.error')) {
            regCancelbringError();
        }
    });
    regPassword.addEventListener('focus', function() {
        regPassword.style.border = '1px solid #c0c0c0';
        regPasswordRepeat.style.border = '1px solid #c0c0c0';
        if (regPopupBody.querySelector('.error')) {
            regCancelbringError();
        }
    });
    regPasswordRepeat.addEventListener('focus', function() {
        regPassword.style.border = '1px solid #c0c0c0';
        regPasswordRepeat.style.border = '1px solid #c0c0c0';
        if (regPopupBody.querySelector('.error')) {
            regCancelbringError();
        }
    });
}

const signList = document.querySelector('.header__sign-list');
const regButton = signList.querySelector('.reg');
const signButton = signList.querySelector('.sign');
const loginOutButton = signList.querySelector('.login-out');

//Изменение интерфейса пользователя, который вошел
function loginInInterface() {
    document.cookie = 'isLogin=true;'

    regButton.classList.add('_display-none');
    signButton.classList.add('_display-none');
    loginOutButton.classList.remove('_display-none');

    if(regPopup.classList.contains('_active')) {
        regPopup.classList.remove('_active');
    }
    if(signPopup.classList.contains('_active')) {
        signPopup.classList.remove('_active');
    }
    body.classList.remove('_lock');
}

//Изменение интерфейса пользователя, который вышел
loginOutButton.addEventListener('click', function() {
    document.cookie = 'isLogin=false;'

    regButton.classList.remove('_display-none');
    signButton.classList.remove('_display-none');
    loginOutButton.classList.add('_display-none');
});

const regErrorTitle = '<p class="error">Аккаунт уже существует</p>';
let regDisplayError = false;

//Выведение ошибки
function regBringError() {
    if (!regDisplayError) {
        regPopupBody.insertAdjacentHTML (
            'beforeend',
            regErrorTitle
        );
    }
    regDisplayError = true;
}

//Отмена выведения ошибки
function regCancelbringError() {
    regPopupBody.querySelector('.error').remove();
    regDisplayError = false;
}