/*Задание 1
1. Поиск в интернете (бесплатные api примеры).
2. Найти любые данные, на произвольную тему.
3. Создать файл data.js.
4. Создать переменную которая будет хранить данные из публичных api.

Задание 2
1. Создать файл index.html.
2. Подключить data.js.
3. Сформировать контент из данных (картинка загловок и параграф).
4. Добавить данный контент в вёрстку.
5. * Добавить стили при необходимости (по желанию). */

import { dataFile } from "./data.js";

const data = JSON.parse(dataFile);

const content = document.querySelector('.content');

data.forEach(({ id, url, name, dicription }) => {
    const div = document.createElement('div');
    div.classList.add('card');
    div.style.display = 'inline-block';
    div.style.marginRight = '10px';
    content.appendChild(div);

    const img = document.createElement('img');
    img.classList.add('card-top');
    img.src = url;
    img.width = 550;
    img.style.border = '2px solid purple'
    div.appendChild(img);

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    div.appendChild(cardBody);

    const title = document.createElement('h2');
    title.classList.add('card-title');
    title.textContent = name;
    title.style.color = 'white';
    cardBody.appendChild(title);

    const subtitle = document.createElement('h4');
    subtitle.classList.add('card-subtitle');
    subtitle.textContent = dicription;
    subtitle.style.color = 'white';
    cardBody.appendChild(subtitle);

});