//Task 1
// 1. При изменении значения в input с id="from", значение содержащееся в нем должно моментально отображаться в span. То есть при печати в input'е тег span также должен меняться.

const input = document.querySelector('#from');
const span = document.querySelector('span');

input.addEventListener('input', function () {
    const valueInput = input.value;
    span.textContent = valueInput;

});

//Task 2
// 2. При клике на кнопку с классом messageBtn необходимо элементу с классом message:
// - добавить два класса: animate_animated и animate_fadeInLeftBig
// - поставить данному элементу стиль visibility в значение 'visible'.

const messageBtn = document.querySelector('.messageBtn');
const message = document.querySelector('.message');

messageBtn.addEventListener('click', function () {
    message.classList.add('animate_animated', 'animate_fadeInLeftBig');

    message.style.visibility = 'visible';
});

//Task 3
// 3. Необходимо при отправке формы проверить, заполнены ли все поля в этой форме. Если какое-либо поле не заполнено, форма не должна отправляться, также должны быть подсвечены незаполненные поля (необходимо поставить класс error незаполненным полям). Как только пользователь начинает заполнять какое-либо поле, необходимо, при вводе в данное поле, произвести проверку:
// - Если поле пустое, необходимо данное поле подсветить (поставить класс error данному полю).
// - Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать.

const form = document.querySelector('form');
const fields = form.querySelectorAll('.form-control');

const messageError = document.createElement('p');
messageError.textContent = 'Error! Заполните пустые поля';
messageError.style.color = 'red';

function validateForm(e) {
    let isValid = false;

    for (let i = 0; i < fields.length; i++) {
        if (!fields[i].value) {
            fields[i].classList.add("error");
            isValid = true;
        } else {
            fields[i].classList.remove("error");
        }
    }

    if (isValid) {
        e.preventDefault();
        form.appendChild(messageError);
    }
};


form.addEventListener('submit', validateForm);
