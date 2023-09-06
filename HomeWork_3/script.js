//Task 1
// 1. Необходимо вывести сообщение в консоль "все теги прогрузились", когда все теги будут созданы браузером.

document.addEventListener('DOMContentLoaded', function () {
    console.log('Все теги прогрузились');
});

//Task 2
// 2. Необходимо вывести сообщение в консоль "страница загрузилась", когда все ресурсы страницы будут загружены.

window.addEventListener('load', function () {
    console.log('страница загрузилась');
});

//Task 3
// 3. При клике на какой-либо тег на странице в консоль должно выводиться сообщение наподобие:
// - Класс "super_element" присутствует в элементе "div".
// - сообщение должно определять присутствует или отсутствует класс "super_element"
// - у элемента, а также выводить в нижнем регистре верный тег в данной строке, по
// - которому был совершен клик.
// - Необходимо использовать делегирование.

document.addEventListener('click', function (event) {
    const target = event.target;

    const hasSuperClass = target.classList.contains('super_element');

    const tagName = target.tagName.toLowerCase();

    console.log(`Класс "${hasSuperClass ? 'super_element' : 'super_element не'}" присутствует в элементе "${tagName}".`);
});

//Task 4
// 4. Сделайте, чтобы при наведении на textarea в консоли появлялось сообщение: "Вы навели на textarea."

const textArea = document.querySelector('textarea');

textArea.addEventListener('mouseover', function () {
    console.log('Вы навели на textarea.');
});

//Task 5
// 5. Необходимо повесить событие клика на тег ul. В обработчике события в консоль необходимо выводить текст, который записан внутри элемента кнопки, по которой был произведен клик. Если клик был не по кнопке, то ничего выводить не нужно. Необходимо использовать делегирование.

const ul = document.querySelector('ul');

ul.addEventListener('click', function (event) {
    const target = event.target;

    if (target.tagName === 'BUTTON') {
        const buttonText = target.textContent;
        console.log(buttonText);
    }
});

//Task 6
// 6. Вопрос: Почему в console.log пишется сначала текст из 5 задания и только потом выводится текст из 3 задания, если мы кликаем по кнопкам в ul? Ответ необходимо написать здесь же, под этим комментарием, своими словами.

const question = 'Вопрос: Почему в console.log пишется сначала текст из 5 задания и только потом выводится текст из 3 задания, если мы кликаем по кнопкам в ul? Ответ необходимо написать здесь же, под этим комментарием, своими словами.';

const answer = 'Ответ: При использовании делегирования событий, сначала срабатывает обработчик на внутреннем элементе (кнопке), а затем происходит всплытие события вверх по элементам до самого внешнего родительского элемента (документа).'

console.log(question);
console.log('↓');
console.log(answer);



//Task 7
// 7. С помощью JS необходимо изменить цвет заднего фона каждого второго тега li.

const items = document.querySelectorAll('li');

for (let i = 0; i < items.length; i++) {
    if (i % 2 === 1) {
        items[i].style.backgroundColor = 'lightgrey';
    }

}