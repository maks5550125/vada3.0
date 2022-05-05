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

const homeForm = document.forms.homeInsurance;
const homeName = homeForm.homeInsuranceName;
const homeSurname = homeForm.homeInsuranceSurname;
const homePatronymic = homeForm.homeInsurancePatronymic;
const homePassportSeries = homeForm.homeInsurancePassportSeries;
const homePassportNumber = homeForm.homeInsurancePassportNumber;
const homeTel = homeForm.homeInsuranceTel;
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
        userLoggedIn = document.cookie.slice(8) === 'true';

        let homeDataIsCorrect = true;

        if (!nameInputCheck(homeName.value)) {
            homeName.style.border = '1px solid red';
            homeDataIsCorrect = false;
        }
        if (!nameInputCheck(homeSurname.value)) {
            homeSurname.style.border = '1px solid red';
            homeDataIsCorrect = false;
        }
        if (!nameInputCheck(homePatronymic.value)) {
            homePatronymic.style.border = '1px solid red';
            homeDataIsCorrect = false;
        }
        if (!numberInputCheck(homePassportSeries.value, 4)) {
            homePassportSeries.style.border = '1px solid red';
            homeDataIsCorrect = false;
        }
        if (!numberInputCheck(homePassportNumber.value, 6)) {
            homePassportNumber.style.border = '1px solid red';
            homeDataIsCorrect = false;
        }
        if (!numberInputCheck(homeTel.value, 11)) {
            homeTel.style.border = '1px solid red';
            homeDataIsCorrect = false;
        }
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
            
            fetch('https://vada-58654-default-rtdb.firebaseio.com/applications/home.json', {
                method: 'POST',
                body: JSON.stringify({
                    type: 'home',
                    date: new Date().toLocaleDateString(),
                    name: homeName.value,
                    surname: homeSurname.value,
                    patronymic: homePatronymic.value,
                    passportSeries: homePassportSeries.value,
                    passportNumber: homePassportNumber.value,
                    tel: homeTel.value,
                    city: homeCity.value,
                    street: homeStreet.value,
                    house: homeHouse.value,
                    flat: homeFlat.value,
                    inn: homeInn.value,
                    dateOfBirth: homeDateOfBirth.value,
                    sumInsured: homeSumInsured.value,
                    address:  homeAddress.value
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            fetch('https://vada-58654-default-rtdb.firebaseio.com/data/sumInsured/-N1IfhaUbBd3dJXrUANp.json', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(responce => responce.json())
            .then(data => sumInsuredTemp = data.sumInsured)
            .then(function(sumInsuredTemp) {
                fetch('https://vada-58654-default-rtdb.firebaseio.com/data/sumInsured/-N1IfhaUbBd3dJXrUANp.json', {
                    method: 'PUT',
                    body: JSON.stringify({
                        sumInsured: sumInsuredTemp + Number(homeSumInsured.value),
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                .then(function() {
                    homeName.value = '';
                    homeSurname.value = '';
                    homePatronymic.value = '';
                    homePassportSeries.value = '';
                    homePassportNumber.value = '';
                    homeTel.value = '';
                    homeCity.value = '';
                    homeStreet.value = '';
                    homeHouse.value = '';
                    homeFlat.value = '';
                    homeInn.value = '';
                    homeDateOfBirth.value = '';
                    homeSumInsured.value = '';
                });
            });

            showSuccessfullyPopup();

            fetch('https://vada-58654-default-rtdb.firebaseio.com/data/homeCount/-N18CFYfiNcMu8jxdaNR.json', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(responce => responce.json())
            .then(data => countOfInsurance = data.count)
            .then(function(countOfInsurance) {
                fetch('https://vada-58654-default-rtdb.firebaseio.com/data/homeCount/-N18CFYfiNcMu8jxdaNR.json', {
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

//Заполнение полей страховки жилья
homeName.addEventListener('focus', function() {
    homeName.style.border = '1px solid #c0c0c0';
});
homeSurname.addEventListener('focus', function() {
    homeSurname.style.border = '1px solid #c0c0c0';
});
homePatronymic.addEventListener('focus', function() {
    homePatronymic.style.border = '1px solid #c0c0c0';
});
homePassportSeries.addEventListener('focus', function() {
    homePassportSeries.style.border = '1px solid #c0c0c0';
});
homePassportNumber.addEventListener('focus', function() {
    homePassportNumber.style.border = '1px solid #c0c0c0';
});
homeTel.addEventListener('focus', function() {
    homeTel.style.border = '1px solid #c0c0c0';
});
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