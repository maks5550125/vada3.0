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

const carForm = document.forms.carInsurance;
const carName = carForm.carInsuranceName;
const carSurname = carForm.carInsuranceSurname;
const carPatronymic = carForm.carInsurancePatronymic;
const carPassportSeries = carForm.carInsurancePassportSeries;
const carPassportNumber = carForm.carInsurancePassportNumber;
const carTel = carForm.carInsuranceTel;
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
        userLoggedIn = document.cookie.slice(8) === 'true';

        let carDataIsCorrect = true;
        
        if (!nameInputCheck(carName.value)) {
            carName.style.border = '1px solid red';
            carDataIsCorrect = false;
        }
        if (!nameInputCheck(carSurname.value)) {
            carSurname.style.border = '1px solid red';
            carDataIsCorrect = false;
        }
        if (!nameInputCheck(carPatronymic.value)) {
            carPatronymic.style.border = '1px solid red';
            carDataIsCorrect = false;
        }
        if (!numberInputCheck(carPassportSeries.value, 4)) {
            carPassportSeries.style.border = '1px solid red';
            carDataIsCorrect = false;
        }
        if (!numberInputCheck(carPassportNumber.value, 6)) {
            carPassportNumber.style.border = '1px solid red';
            carDataIsCorrect = false;
        }
        if (!numberInputCheck(carTel.value, 11)) {
            carTel.style.border = '1px solid red';
            carDataIsCorrect = false;
        }
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
            
            fetch('https://vada-58654-default-rtdb.firebaseio.com/applications/car.json', {
                method: 'POST',
                body: JSON.stringify({
                    type: 'car',
                    date: new Date().toLocaleDateString(),
                    name: carName.value,
                    surname: carSurname.value,
                    patronymic: carPatronymic.value,
                    passportSeries: carPassportSeries.value,
                    passportNumber: carPassportNumber.value,
                    tel: carTel.value,
                    city: carCity.value,
                    street: carStreet.value,
                    house: carHouse.value,
                    flat: carFlat.value,
                    inn: carInn.value,
                    dateOfBirth: carDateOfBirth.value,
                    sumInsured: carSumInsured.value,
                    driversLicense: carDriversLicense.value,
                    address:  carAddress.value
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            carName.value = '';
            carSurname.value = '';
            carPatronymic.value = '';
            carPassportSeries.value = '';
            carPassportNumber.value = '';
            carTel.value = '';
            carCity.value = '';
            carStreet.value = '';
            carHouse.value = '';
            carFlat.value = '';
            carInn.value = '';
            carDateOfBirth.value = '';
            carSumInsured.value = '';
            carDriversLicense.value = '';

            showSuccessfullyPopup();

            fetch('https://vada-58654-default-rtdb.firebaseio.com/data/carCount/-N18Bxc_NdS7jSoejAX2.json', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(responce => responce.json())
            .then(data => countOfInsurance = data.count)
            .then(function(countOfInsurance) {
                fetch('https://vada-58654-default-rtdb.firebaseio.com/data/carCount/-N18Bxc_NdS7jSoejAX2.json', {
                    method: 'PUT',
                    body: JSON.stringify({
                        count: ++countOfInsurance
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
            })
        }
    });
}

//Заполнение полей авто-страховки
carName.addEventListener('focus', function() {
    carName.style.border = '1px solid #c0c0c0';
});
carSurname.addEventListener('focus', function() {
    carSurname.style.border = '1px solid #c0c0c0';
});
carPatronymic.addEventListener('focus', function() {
    carPatronymic.style.border = '1px solid #c0c0c0';
});
carPassportSeries.addEventListener('focus', function() {
    carPassportSeries.style.border = '1px solid #c0c0c0';
});
carPassportNumber.addEventListener('focus', function() {
    carPassportNumber.style.border = '1px solid #c0c0c0';
});
carTel.addEventListener('focus', function() {
    carTel.style.border = '1px solid #c0c0c0';
});
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