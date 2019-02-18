/* Логика кликов */

const items = document.querySelectorAll('.item_point');
const signa = document.querySelectorAll('.item_signa');
const taste = document.querySelectorAll('.item_taste');
const arrayTastes = [];
const str = 'Чего сидишь? Порадуй котэ,<span class="item_buy"> купи.</span>';

items.forEach(function (element, i) {
    arrayTastes.push(taste[i].innerHTML);

    if (element.classList.contains('item_disabled')) {
        signa[i].innerHTML = `Печалька, ${arrayTastes[i]} закончился.`;
        signa[i].style.color = '#ffff66';
    }

    element.addEventListener('click', function () {
        if (this.classList.contains('item_default')) {
            element.classList = 'item_point item_selected';
            activeSigna(i);
        } else if (this.classList.contains('item_selected')) {
            element.classList = 'item_point item_default';
            defaultSigna(i);
            searchBuy();
        } else if (this.classList.contains('item_disabled')) {
            alert('Товар закончился!');
        }
    });
});


/* Нижнее поле при активации элемента */

function activeSigna(numb) {
    if (numb == 0) {
        signa[numb].innerHTML = 'Печень утки разварная с артишоками.';
    } else if (numb == 1) {
        signa[numb].innerHTML = 'Головы щучьи с чесноком да свежайшая сёмгушка.';
    } else if (numb == 2) {
        signa[numb].innerHTML = 'Филе из цыплят с трюфелями в бульоне.';
    }
}

/* Нижнее поле после возвращения элемента к дефолту */

function defaultSigna(numb) {
    signa[numb].innerHTML = str;
}

/* Навешивание клика на текст "Купи" */

function searchBuy() {
    const buy = document.querySelectorAll('.item_buy');
    buy.forEach(function (element, i) {
        element.addEventListener('click', function () {
            items[i].classList = 'item_point item_selected';
            activeSigna(i);
        });
    });
}

searchBuy();