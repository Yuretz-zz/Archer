
let menuClose = true;
let zajavkaClose = true;


// Функции ----------------------------------------------------

// Мбильное меню открыть
function mobileMenuOpen() {
    document.querySelector('.burger').classList.add('close');
    document.querySelector('nav > ul').classList.add('open');
    document.querySelector('.overley-menu').classList.add('visible');
    document.querySelector('body').classList.add('fix');
    menuClose = false;
}

// Мбильное меню закрыть
function mobileMenuClose() {
    document.querySelector('.burger').classList.remove('close');
    document.querySelector('nav > ul').classList.remove('open');
    document.querySelector('.overley-menu').classList.remove('visible');
    document.querySelector('body').classList.remove('fix');
    menuClose = true;
}

// Заявку открыть
function zajavkaFormOpen() {
    document.querySelector('.zajavka').classList.add('open');
    document.querySelector('.overley-zajavka').classList.add('visible');
    document.querySelector('body').classList.add('fix');
    zajavkaClose = false;
}

// Заявку закрыть
function zajavkaFormClose() {
    document.querySelector('.zajavka').classList.remove('open');
    document.querySelector('.overley-zajavka').classList.remove('visible');
    document.querySelector('body').classList.remove('fix');
    zajavkaClose = true;
}

// Мобильное меню ----------------------------------------------

// Клик на бургер
document.querySelector('.burger').addEventListener('click', () => {
    if (menuClose) {
        mobileMenuOpen();
    } else {
        mobileMenuClose();
    }
});

// Закрываем мобильное меню при изменении размера окна
window.addEventListener('resize', () => {
    if (!menuClose) mobileMenuClose();
});

// Закрываем мобильно меню при клике на пункт
    document.querySelectorAll('nav > ul > li').forEach( (item) => {
        item.addEventListener('click', () => {
            if (!menuClose) mobileMenuClose();
        });
});

// Закрываем мобильно меню при клике на логотип
document.querySelector('.logo').addEventListener('click', () => {
    if (!menuClose) mobileMenuClose();
});

// Закрываем мобильно меню при клике "в пустоту"
document.querySelector('.overley-menu').addEventListener('click', () => {
    if (!menuClose) mobileMenuClose();
});




// Header ----------------------------------------------------

// Уменьшение высоты шапки при скролле
window.addEventListener('scroll', () => {

    if (scrollY > window.innerHeight / 3) {
        document.querySelector('header').classList.add('move-down');
        document.querySelector('.logo').classList.add('move-down');
        document.querySelector('nav > ul').classList.add('move-down');
    } else {
        document.querySelector('header').classList.remove('move-down');
        document.querySelector('.logo').classList.remove('move-down');
        document.querySelector('nav > ul').classList.remove('move-down');
    }
});




// Заявка ---------------------------------------------------

// Клик по кнопке "Отправить заявку"
document.querySelector('.btn-zajavka').addEventListener('click', (e) => {

    if (zajavkaClose) {
        zajavkaFormOpen();
    } else {
        zajavkaFormClose();
    }
});

// Клик по крестику
document.querySelector('.zajavka > .close').addEventListener('click', () => {
    zajavkaFormClose();
    zajavkaClose = true;
});

// Клик по крестику
document.querySelector('.overley-zajavka').addEventListener('click', () => {
    zajavkaFormClose();
    zajavkaClose = true;
});