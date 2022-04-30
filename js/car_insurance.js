//Проверка ввода города
function cityInputCheck(value) {
    let result = false;

    if (value === 'Москва' || value === 'москва') {
        result = true;
        carAddress.value = addresses.moscow;
    }
    if (value === 'Калуга' || value === 'калуга') {
        result = true;
        carAddress.value = addresses.kaluga;
    }
    if (value === 'Санкт-Петербург' || value === 'Санкт Петербург' ||
        value === 'Петербург' || value === 'Санкт петербург' || value === 'санкт петербург') {
        result = true;
        carAddress.value = addresses.stPetersburg;
    }
    if (value === 'Сочи' || value === 'сочи') {
        result = true;
        carAddress.value = addresses.sochi;
    }
    if (value === 'Людиново' || value === 'людиново') {
        result = true;
        carAddress.value = addresses.lyudinovo;
    }

    return result;
}

let userLoggedIn = false; // Будет проверка защел ли пользователь.

const carForm = document.forms.carInsurance;
const carCity = carForm.carInsuranceCity;
const carStreet = carForm.carInsuranceStreet;
const carHouse = carForm.carInsuranceHouse;
const carFlat = carForm.carInsuranceFlat;
const carInn = carForm.carInsuranceInn;
const carDateOfBirth = carForm.carInsuranceDateOfBirth;
const carSumInsured = carForm.carInsuranceSumInsured;
const carDriversLicense = carForm.carInsuranceDriversLicense;
const carAddress = carForm.carInsuranceAddress;

//Проверка ошибок заполнения анкеты на авто-страхование
if (carForm) {
    carForm.addEventListener('submit', function(event) {
        let carDataIsCorrect = true;

        if (!userLoggedIn) {
            alert('Вы не вошли!');
            carDataIsCorrect = false;
        }
        if (!cityInputCheck(carCity.value)) {
            carCity.style.border = '1px solid red';
            carDataIsCorrect = false;
        }
        if (carStreet.value === '') {
            carStreet.style.border = '1px solid red';
            carDataIsCorrect = false;
        }
        if (carHouse.value === '') {
            carHouse.style.border = '1px solid red';
            carDataIsCorrect = false;
        }
        if (!allNumbersInputCheck(carFlat.value)) {
            carFlat.style.border = '1px solid red';
            carDataIsCorrect = false;
        }
        if (!numberInputCheck(carInn.value, 12)) {
            carInn.style.border = '1px solid red';
            carDataIsCorrect = false;
        }
        if (!dateOfBirthInputCheck(carDateOfBirth.value)) {
            carDateOfBirth.style.border = '1px solid red';
            carDataIsCorrect = false;
        }
        if (!numberInputCheck(carDriversLicense.value, 10)) {
            carDriversLicense.style.border = '1px solid red';
            carDataIsCorrect = false;
        }
        if (!allNumbersInputCheck(carSumInsured.value)) {
            carSumInsured.style.border = '1px solid red';
            carDataIsCorrect = false;
        }

        if (!carDataIsCorrect) {
            event.preventDefault(); //Временно, пока нет сервера.
        } else {
            event.preventDefault();
            alert('Функция временно не доступна, приносим извинения.');
        }
    });
}

//Заполнение полей авто-страховки
carCity.addEventListener('focus', function() {
    carCity.style.border = '1px solid #c0c0c0';
});
carStreet.addEventListener('focus', function() {
    carStreet.style.border = '1px solid #c0c0c0';
});
carHouse.addEventListener('focus', function() {
    carHouse.style.border = '1px solid #c0c0c0';
});
carFlat.addEventListener('focus', function() {
    carFlat.style.border = '1px solid #c0c0c0';
});
carInn.addEventListener('focus', function() {
    carInn.style.border = '1px solid #c0c0c0';
});
carDateOfBirth.addEventListener('focus', function() {
    carDateOfBirth.style.border = '1px solid #c0c0c0';
});
carDriversLicense.addEventListener('focus', function() {
    carDriversLicense.style.border = '1px solid #c0c0c0';
});
carSumInsured.addEventListener('focus', function() {
    carSumInsured.style.border = '1px solid #c0c0c0';
});