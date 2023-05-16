/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против...",
    ]
};

function deleteAdv() {
    const advertise = document.querySelectorAll('.promo__adv img');
    advertise.forEach(item => {
        item.remove();
    })
}
deleteAdv();

function changeGenre() {
    const promoGenre = document.querySelector('.promo__genre');
    promoGenre.textContent = 'Драма';
}
changeGenre();

function changeBgImage() {
    const promoBg = document.querySelector('.promo__bg');
    promoBg.style.backgroundImage = 'url(../img/bg.jpg)';
}
changeBgImage();

function movieList() {
    const promoInteractiveList = document.querySelectorAll('.promo__interactive-list .promo__interactive-item');
    movieDB.movies.sort();
    promoInteractiveList.forEach((item, index) => {
        item.innerHTML = `${index + 1}. ${movieDB.movies[index]}`;
    });
    
}
movieList();
