const body = document.querySelector('body');
const tel = document.querySelector('.header__wrapper .contacts__tel')

//Проверка на выбор поля с телефоном
if (body) {
    body.addEventListener('click', function (event) {
        if (tel) {
            if (!tel.classList.contains('_active')) {
                if (event.target.classList.contains('header__contacts-icon')) {
                    tel.classList.add('_active');
                } 
            } else {
                if (!event.target.closest('.contacts__tel')) {
                    tel.classList.remove('_active');
                }
            }
        }
    });
}

const menu = document.querySelector('.header__sign').firstElementChild;
const select = document.querySelector('.header__form');
let selectInMenu = false;
const selectContainer = document.querySelector('.header__city-and-burger');

if (menu && select) {
    if (document.documentElement.clientWidth <= 768) {
        if (!selectInMenu) {
            menu.prepend(select);
            selectInMenu = true;
        }
    } else {
        if (selectInMenu) {
            selectContainer.prepend(select);
        }
    }
}

if (body) {
    window.addEventListener('resize', function() {
        if (menu && select) {
            if (document.documentElement.clientWidth <= 768) {
                if (!selectInMenu) {
                    menu.prepend(select);
                    selectInMenu = true;
                }
            } else {
                if (selectInMenu) {
                    selectContainer.prepend(select);
                    selectInMenu = false;
                }
            }
        }
    });
}



let sign = document.querySelector('.header__sign');


//Проверка на выбор поля "авторизация"
if (body) {
    window.addEventListener('click', function(event) {
        if (sign) {
            if (!sign.classList.contains('_active')) {
                if (event.target.closest('.header__burger')) {
                    sign.classList.add('_active');
                    body.classList.add('_lock');
                }
            } else {
                if (!event.target.closest('.header__sign')) {
                    sign.classList.remove('_active');
                    body.classList.remove('_lock');
                }
            }
        }
    });
}

//Прокручивание
if (body) {
    window.addEventListener('scroll', function() {
        if (sign) {
            sign.style.top = `${120 - scrollY}px`;
        }
    });
}