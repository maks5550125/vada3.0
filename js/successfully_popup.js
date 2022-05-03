const successfullyPopup = document.querySelector('.successfully-popup');
const successfullyPopupBody = successfullyPopup.querySelector('.successfully-popup__body');

//Функция, показывающая панель успешной отправки формы
function showSuccessfullyPopup() {
    body.classList.add('_lock');
    successfullyPopup.classList.add('_active');
}

//Убираем панель успешной отправки формы
window.addEventListener('click', function(event) {
    if(!event.target.closest('.successfully-popup__body') || event.target.closest('.cancel-button')) {
        body.classList.remove('_lock');
        successfullyPopup.classList.remove('_active');
    }
})