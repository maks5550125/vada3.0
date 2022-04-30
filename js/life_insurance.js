//Проверка на выбор городов
function cityInputCheck(value) {
    let result = false;

    if (value === 'Москва' || value === 'москва') {
        result = true;
        lifeAddress.value = addresses.moscow;
    }
    if (value === 'Калуга' || value === 'калуга') {
        result = true;
        lifeAddress.value = addresses.kaluga;
    }
    if (value === 'Санкт-Петербург' || value === 'Санкт Петербург' ||
        value === 'Петербург' || value === 'Санкт петербург' || value === 'санкт петербург') {
        result = true;
        lifeAddress.value = addresses.stPetersburg;
    }
    if (value === 'Сочи' || value === 'сочи') {
        result = true;
        lifeAddress.value = addresses.sochi;
    }
    if (value === 'Людиново' || value === 'людиново') {
        result = true;
        lifeAddress.value = addresses.lyudinovo;
    }

    return result;
}

let userLoggedIn = false; // Будет проверка защел ли пользователь.

const lifeForm = document.forms.lifeInsurance;
const lifeCity = lifeForm.lifeInsuranceCity;
const lifeStreet = lifeForm.lifeInsuranceStreet;
const lifeHouse = lifeForm.lifeInsuranceHouse;
const lifeFlat = lifeForm.lifeInsuranceFlat;
const lifeInn = lifeForm.lifeInsuranceInn;
const lifeDateOfBirth = lifeForm.lifeInsuranceDateOfBirth;
const lifeSumInsured = lifeForm.lifeInsuranceSumInsured;
const lifeAddress = lifeForm.lifeInsuranceAddress;

//Проверка ошибок заполнения анкеты на страхование жизни
if (lifeForm) {
    lifeForm.addEventListener('submit', function(event) {
        let lifeDataIsCorrect = true;

        if (!userLoggedIn) {
            alert('Вы не вошли!');
            lifeDataIsCorrect = false;
        }
        if (!cityInputCheck(lifeCity.value)) {
            lifeCity.style.border = '1px solid red';
            lifeDataIsCorrect = false;
        }
        if (lifeStreet.value === '') {
            lifeStreet.style.border = '1px solid red';
            lifeDataIsCorrect = false;
        }
        if (lifeHouse.value === '') {
            lifeHouse.style.border = '1px solid red';
            lifeDataIsCorrect = false;
        }
        if (!allNumbersInputCheck(lifeFlat.value)) {
            lifeFlat.style.border = '1px solid red';
            lifeDataIsCorrect = false;
        }
        if (!numberInputCheck(lifeInn.value, 12)) {
            lifeInn.style.border = '1px solid red';
            lifeDataIsCorrect = false;
        }
        if (!dateOfBirthInputCheck(lifeDateOfBirth.value)) {
            lifeDateOfBirth.style.border = '1px solid red';
            lifeDataIsCorrect = false;
        }
        if (!allNumbersInputCheck(lifeSumInsured.value)) {
            lifeSumInsured.style.border = '1px solid red';
            lifeDataIsCorrect = false;
        }

        if (!lifeDataIsCorrect) {
            event.preventDefault(); //Временно, пока нет сервера.
        } else {
            event.preventDefault();
            alert('Функция временно не доступна, приносим извинения.');
        }
    });
}

//Заполнение полей страховки жизни
lifeCity.addEventListener('focus', function() {
    lifeCity.style.border = '1px solid #c0c0c0';
});
lifeStreet.addEventListener('focus', function() {
    lifeStreet.style.border = '1px solid #c0c0c0';
});
lifeHouse.addEventListener('focus', function() {
    lifeHouse.style.border = '1px solid #c0c0c0';
});
lifeFlat.addEventListener('focus', function() {
    lifeFlat.style.border = '1px solid #c0c0c0';
});
lifeInn.addEventListener('focus', function() {
    lifeInn.style.border = '1px solid #c0c0c0';
});
lifeDateOfBirth.addEventListener('focus', function() {
    lifeDateOfBirth.style.border = '1px solid #c0c0c0';
});
lifeSumInsured.addEventListener('focus', function() {
    lifeSumInsured.style.border = '1px solid #c0c0c0';
});