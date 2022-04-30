//Адреса
const addresses = {
    moscow:  'г. Москва, ул. Шаболовка, д. 31 стр 5.',
    kaluga: 'г. Калуга, ул. Циолковского, д. 34.',
    stPetersburg: 'г. Санкт-Петербург, Московский пр., д. 60.',
    sochi: 'Краснодарский край, г. Сочи, ул. Нагорная, 8 А.',
    lyudinovo: 'г. Людиново, ул. З-го Интернационала, д. 23А.',
}



const citySelect = document.forms[0].city;
const addressText = document.querySelector('.address__text');

if (citySelect) {
    addressText.textContent = addresses[citySelect.value]; 
}

if (citySelect) {
    citySelect.addEventListener('change', function() {
        addressText.textContent = addresses[citySelect.value]; 
    });
}