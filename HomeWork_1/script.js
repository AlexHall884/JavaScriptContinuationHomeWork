//Task 1
// 1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.
console.log('Task 1');

const element1 = document.getElementById('super_link');
console.log(element1);

console.log('----------------------------');

//Task 2
// 2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".
console.log('Task 2');

const elements = document.querySelectorAll('.card-link');

elements.forEach((element) => {
    element.textContent = 'ссылка'
});

console.log('----------------------------');

//Task 3
// 3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.
console.log('Task 3');

const cardBody = document.querySelector('.card-body')
const elementCollection = cardBody.querySelectorAll('.card-link');
console.log(elementCollection);

console.log('----------------------------');

//Task 4
// 4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.
console.log('Task 4');

const element2 = document.querySelector('[data-number="50"]');
console.log(element2);

console.log('----------------------------');

//Task 5
// 5. Выведите содержимое тега title в консоль.
console.log('Task 5');

const title = document.title;

console.log(title);

console.log('----------------------------');

//Task 6
// 6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.

console.log('Task 6');

const cardTitle = document.querySelector('.card-title');

console.log(cardTitle.parentNode);

console.log('----------------------------');

//Task 7
// 7. Создайте тег p`, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".

console.log('Task 7');

const paragraphElem = document.createElement('p')
paragraphElem.textContent = 'Привет'

const card = document.querySelector('.card');
card.insertBefore(paragraphElem, card.firstChild);

console.log('----------------------------');

//Task 8
// 8. Удалите тег h6 на странице.

console.log('Task 8');

const heading = document.querySelector('h6');
heading.remove();

console.log('----------------------------');