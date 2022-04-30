//Проверка на выбор городов
function cityInputCheck(value) {
    let result = false;

    if (value === 'Москва' || value === 'москва') {
        result = true;
        homeAddress.value = addresses.moscow;
    }
    if (value === 'Калуга' || value === 'калуга') {
        result = true;
        homeAddress.value = addresses.kaluga;
    }
    if (value === 'Санкт-Петербург' || value === 'Санкт Петербург' ||
        value === 'Петербург' || value === 'Санкт петербург' || value === 'санкт петербург') {
        result = true;
        homeAddress.value = addresses.stPetersburg;
    }
    if (value === 'Сочи' || value === 'сочи') {
        result = true;
        homeAddress.value = addresses.sochi;
    }
    if (value === 'Людиново' || value === 'людиново') {
        result = true;
        homeAddress.value = addresses.lyudinovo;
    }

    return result;
}

let userLoggedIn = false; // Будет проверка защел ли пользователь.

const homeForm = document.forms.homeInsurance;
const homeCity = homeForm.homeInsuranceCity;
const homeStreet = homeForm.homeInsuranceStreet;
const homeHouse = homeForm.homeInsuranceHouse;
const homeFlat = homeForm.homeInsuranceFlat;
const homeInn = homeForm.homeInsuranceInn;
const homeDateOfBirth = homeForm.homeInsuranceDateOfBirth;
const homeSumInsured = homeForm.homeInsuranceSumInsured;
const homeAddress = homeForm.homeInsuranceAddress;

//Проверка на ошибка заполнения анкеты на страхование жилья
if (homeForm) {
    homeForm.addEventListener('submit', function(event) {
        let homeDataIsCorrect = true;

        if (!userLoggedIn) {
            alert('Вы не вошли!');
            homeDataIsCorrect = false;
        }
        if (!cityInputCheck(homeCity.value)) {
            homeCity.style.border = '1px solid red';
            homeDataIsCorrect = false;
        }
        if (homeStreet.value === '') {
            homeStreet.style.border = '1px solid red';
            homeDataIsCorrect = false;
        }
        if (homeHouse.value === '') {
            homeHouse.style.border = '1px solid red';
            homeDataIsCorrect = false;
        }
        if (!allNumbersInputCheck(homeFlat.value)) {
            homeFlat.style.border = '1px solid red';
            homeDataIsCorrect = false;
        }
        if (!numberInputCheck(homeInn.value, 12)) {
            homeInn.style.border = '1px solid red';
            homeDataIsCorrect = false;
        }
        if (!dateOfBirthInputCheck(homeDateOfBirth.value)) {
            homeDateOfBirth.style.border = '1px solid red';
            homeDataIsCorrect = false;
        }
        if (!allNumbersInputCheck(homeSumInsured.value)) {
            homeSumInsured.style.border = '1px solid red';
            homeDataIsCorrect = false;
        }

        if (!homeDataIsCorrect) {
            event.preventDefault(); //Временно, пока нет сервера.
        } else {
            event.preventDefault();
            alert('Функция временно не доступна, приносим извинения.');
        }
    });
}

//Заполнение полей страховки жилья
homeCity.addEventListener('focus', function() {
    homeCity.style.border = '1px solid #c0c0c0';
});
homeStreet.addEventListener('focus', function() {
    homeStreet.style.border = '1px solid #c0c0c0';
});
homeHouse.addEventListener('focus', function() {
    homeHouse.style.border = '1px solid #c0c0c0';
});
homeFlat.addEventListener('focus', function() {
    homeFlat.style.border = '1px solid #c0c0c0';
});
homeInn.addEventListener('focus', function() {
    homeInn.style.border = '1px solid #c0c0c0';
});
homeDateOfBirth.addEventListener('focus', function() {
    homeDateOfBirth.style.border = '1px solid #c0c0c0';
});
homeSumInsured.addEventListener('focus', function() {
    homeSumInsured.style.border = '1px solid #c0c0c0';
});