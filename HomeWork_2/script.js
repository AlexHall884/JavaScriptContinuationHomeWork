//Task 1
// 1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown", необходимо использовать методы forEach и querySelectorAll и свойство classList у элементов.

const dropdownItemElem = document.querySelectorAll('.dropdown-item');

dropdownItemElem.forEach((item) => {
    item.classList.add('.super-dropdown');
});


//Task 2
// 2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он присутствует у этого элемента, либо добавить, если такого класса у элемента не было.

const btn = document.querySelector('.btn');
btn.classList.toggle('btn-secondary');

//Task 3
// 3. Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu".

const menu = document.querySelectorAll('.menu');

menu.forEach(element => {
    element.classList.remove('dropdown-menu')
});

//Task 4
// 4. Используя метод insertAdjacentHTML добавьте после div'a с классом "dropdown" следующую разметку:
// `<a href="#">link</a>`

const dropdownElem = document.querySelector('div.dropdown');
dropdownElem.insertAdjacentHTML('afterend', '<a href="#">link</a>');

//Task 5
// 5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".

const idElem = document.querySelector('#dropdownMenuButton');
idElem.id = 'superDropdown';


//Task 6
// 6. Добавьте атрибут data-dd со значением 3 элементу у которого существует атрибут "aria-labelledby" равный "dropdownMenuButton" используя dataset.

const elem = document.querySelector('[aria-labelledby = "dropdownMenuButton"]');

elem.dataset.dd = 3;

//Task 7
// 7. Удалите атрибут type у элемента с классом "dropdown-toggle".

const dropdownToggle = document.querySelector('.dropdown-toggle');

dropdownToggle.removeAttribute('type');

