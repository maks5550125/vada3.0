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

const lifeForm = document.forms.lifeInsurance;
const lifeName = lifeForm.lifeInsuranceName;
const lifeSurname = lifeForm.lifeInsuranceSurname;
const lifePatronymic = lifeForm.lifeInsurancePatronymic;
const lifePassportSeries = lifeForm.lifeInsurancePassportSeries;
const lifePassportNumber = lifeForm.lifeInsurancePassportNumber;
const lifeTel = lifeForm.lifeInsuranceTel;
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
        userLoggedIn = document.cookie.slice(8) === 'true';

        let lifeDataIsCorrect = true;
        if (!nameInputCheck(lifeName.value)) {
            lifeName.style.border = '1px solid red';
            lifeDataIsCorrect = false;
        }
        if (!nameInputCheck(lifeSurname.value)) {
            lifeSurname.style.border = '1px solid red';
            lifeDataIsCorrect = false;
        }
        if (!nameInputCheck(lifePatronymic.value)) {
            lifePatronymic.style.border = '1px solid red';
            lifeDataIsCorrect = false;
        }
        if (!numberInputCheck(lifePassportSeries.value, 4)) {
            lifePassportSeries.style.border = '1px solid red';
            lifeDataIsCorrect = false;
        }
        if (!numberInputCheck(lifePassportNumber.value, 6)) {
            lifePassportNumber.style.border = '1px solid red';
            lifeDataIsCorrect = false;
        }
        if (!numberInputCheck(lifeTel.value, 11)) {
            lifeTel.style.border = '1px solid red';
            lifeDataIsCorrect = false;
        }
        if (!userLoggedIn) {
            alert('Вы не вошли!');
            console.log(document.cookie);
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
            event.preventDefault();
        } else {
            event.preventDefault();
            
            fetch('https://vada-58654-default-rtdb.firebaseio.com/applications/life.json', {
                method: 'POST',
                body: JSON.stringify({
                    type: 'life',
                    date: new Date().toLocaleDateString(),
                    name: lifeName.value,
                    surname: lifeSurname.value,
                    patronymic: lifePatronymic.value,
                    passportSeries: lifePassportSeries.value,
                    passportNumber: lifePassportNumber.value,
                    tel: lifeTel.value,
                    city: lifeCity.value,
                    street: lifeStreet.value,
                    house: lifeHouse.value,
                    flat: lifeFlat.value,
                    inn: lifeInn.value,
                    dateOfBirth: lifeDateOfBirth.value,
                    sumInsured: lifeSumInsured.value,
                    address:  lifeAddress.value
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
                        sumInsured: sumInsuredTemp + Number(lifeSumInsured.value),
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                .then(function() {
                    lifeName.value = '';
                    lifeSurname.value = '';
                    lifePatronymic.value = '';
                    lifePassportSeries.value = '';
                    lifePassportNumber.value = '';
                    lifeTel.value = '';
                    lifeCity.value = '';
                    lifeStreet.value = '';
                    lifeHouse.value = '';
                    lifeFlat.value = '';
                    lifeInn.value = '';
                    lifeDateOfBirth.value = '';
                    lifeSumInsured.value = '';
                });
            });

            showSuccessfullyPopup();

            fetch('https://vada-58654-default-rtdb.firebaseio.com/data/lifeCount/-N18F5LUt7meWYVaacl4.json', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(responce => responce.json())
            .then(data => countOfInsurance = data.count)
            .then(function(countOfInsurance) {
                fetch('https://vada-58654-default-rtdb.firebaseio.com/data/lifeCount/-N18F5LUt7meWYVaacl4.json', {
                    method: 'PUT',
                    body: JSON.stringify({
                        count: ++countOfInsurance
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
            });
        }
    });
}

//Заполнение полей страховки жизни
lifeName.addEventListener('focus', function() {
    lifeName.style.border = '1px solid #c0c0c0';
});
lifeSurname.addEventListener('focus', function() {
    lifeSurname.style.border = '1px solid #c0c0c0';
});
lifePatronymic.addEventListener('focus', function() {
    lifePatronymic.style.border = '1px solid #c0c0c0';
});
lifePassportSeries.addEventListener('focus', function() {
    lifePassportSeries.style.border = '1px solid #c0c0c0';
});
lifePassportNumber.addEventListener('focus', function() {
    lifePassportNumber.style.border = '1px solid #c0c0c0';
});
lifeTel.addEventListener('focus', function() {
    lifeTel.style.border = '1px solid #c0c0c0';
});
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