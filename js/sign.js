const signPopup = document.querySelector('.sign-popup');
const signPopupBody = document.querySelector('.sign-popup__body');

//Проверка на выбор поля "авторизация"
window.addEventListener('click', function(event) {
    if (signPopup && signPopupBody && body) {
        if (!signPopup.classList.contains('_active')) {
            if (event.target.classList.contains('sign')) {
                signPopup.classList.add('_active');
                body.classList.add('_lock');
                if (sign) {
                    if (sign.classList.contains('_active')) {
                        sign.classList.remove('_active');
                    }
                }
            }
        } else {
            if (!event.target.closest('.sign-popup__body') || event.target.closest('.cancel-button')) {
                signPopup.classList.remove('_active');
                body.classList.remove('_lock');
            }
        }
    }
})

const signForm = document.forms.sign;
const signEmail = signForm.signEmail;
const signPassword = signForm.signPassword;

//Проверка полей формы авторизации
if  (signForm) {
    signForm.addEventListener('submit', function(event) {
        let emailForm = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        let signDataIsCorrect = true;

        if (signEmail && signPassword) {
            if (!emailForm.test(signEmail.value)) {
                signEmail.style.border = '1px solid red';
                signDataIsCorrect = false;
            }
            if (signPassword.value.length < 6) {
                signPassword.style.border = '1px solid red';
                signDataIsCorrect = false;
            }
            
            if (!signDataIsCorrect) {
                event.preventDefault(); 
            } else {
                event.preventDefault();

                const apiKey = 'AIzaSyDTdcnXHRjILXIwDCfjjY1ebo6vsHDWkq0';
                fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`, {
                    method: 'POST',
                    body: JSON.stringify({
                        email: signEmail.value,
                        password: signPassword.value,
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
                    } else {
                        signBringError();
                    }
                });
            }
        }
    });
}

//Заполнение полей email и пароль (авторизация)
if (signEmail && signPassword) {
    signEmail.addEventListener('focus', function() {
        signEmail.style.border = '1px solid #c0c0c0';
        if (signPopupBody.querySelector('.error')) {
            signCancelbringError();
        }
    });
    signPassword.addEventListener('focus', function() {
        signPassword.style.border = '1px solid #c0c0c0';
        if (signPopupBody.querySelector('.error')) {
            signCancelbringError();
        }
    });
}

const signErrorTitle = '<p class="error" style="padding-left: 22px;">Аккаунт не найден</p>';
let signDisplayError = false;

//Выведение ошибки
function signBringError() {
    if (!signDisplayError) {
        signPopupBody.insertAdjacentHTML (
            'beforeend',
            signErrorTitle
        );
    }
    signDisplayError = true;
}

//Отмена выведения ошибки
function signCancelbringError() {
    signPopupBody.querySelector('.error').remove();
    signDisplayError = false;
}