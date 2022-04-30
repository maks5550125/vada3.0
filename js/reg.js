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
if  (regForm) {
    regForm.addEventListener('submit', function(event) {
        let emailForm = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        let regDataIsCorrect = true;

        if (regPassword) {
            if (!emailForm.test(regEmail.value)) {
                regEmail.style.border = '1px solid red';
                regDataIsCorrect = false;
            }
            if (regPassword.value.length < 4) {
                regPassword.style.border = '1px solid red';
                regDataIsCorrect = false;
            }
            if (regPasswordRepeat.value.length < 4) {
                regPasswordRepeat.style.border = '1px solid red';
                regDataIsCorrect = false;
            }
            if (regPassword.value !== regPasswordRepeat.value) {
                regPassword.style.border = '1px solid red';
                regPasswordRepeat.style.border = '1px solid red';
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
if (regPassword && regPasswordRepeat) {
    regPassword.addEventListener('focus', function() {
        regPassword.style.border = '1px solid #c0c0c0';
    });
    regEmail.addEventListener('focus', function() {
        regEmail.style.border = '1px solid #c0c0c0';
    });
    regPasswordRepeat.addEventListener('focus', function() {
        regPasswordRepeat.style.border = '1px solid #c0c0c0';
    });
}


