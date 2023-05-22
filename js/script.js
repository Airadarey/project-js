/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */
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

const addButton = document.querySelector('.add button'),
      input = document.querySelector('.adding__input'), 
      advertise = document.querySelectorAll('.promo__adv img'),      
      promoGenre = document.querySelector('.promo__genre'),           
      promoBg = document.querySelector('.promo__bg'), 
      movieList = document.querySelector('.promo__interactive-list'),
      checkbox = document.querySelector('.add input[type="checkbox"]');


advertise.forEach(item => {
    item.remove();
});


promoGenre.textContent = "драма";

promoBg.style.backgroundImage = 'url(../img/bg.jpg)';

addButton.addEventListener('click', (e) => {
    e.preventDefault();

    if (input.value) {
        if (input.value.length > 21) {
            input.value = `${input.value.substring(0, 22)}...`
        }

        movieDB.movies.push(input.value);

        createMovieList(movieDB.movies, movieList);

        if (checkbox.checked) {
            console.log("Добавляем любимый фильм");
        }
    }

    
    
})

function createMovieList(films, parent) {
    parent.innerHTML = "";
    films.sort();
    films.forEach((item, i) => {
        parent.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${item}
            <div class="delete"></div>
        </li>`;
    });

    document.querySelectorAll('.delete').forEach((item, i) => {
        item.addEventListener('click', () => {
            item.parentElement.remove();
            movieDB.movies.splice(i, 1);

            createMovieList(films, parent);
        })
    })
}
createMovieList(movieDB.movies, movieList);
