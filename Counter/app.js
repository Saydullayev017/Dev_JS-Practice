// установка начального значения счётчика
let count = 0;

// выбор элемента значения и кнопок
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

// перебор каждой кнопки с помощью forEach
btns.forEach(function (btn) {
    // добавление слушателя события "click" для каждой кнопки
    btn.addEventListener('click', function (e) {
        
        // получение списка классов кликнутой кнопки
        const styles = e.currentTarget.classList;
        
        // проверка, какая кнопка была нажата на основе её класса
        if (styles.contains('decrease')) {
            count--; // уменьшение счётчика на 1
        } else if (styles.contains('increase')) {
            count++; // увеличение счётчика на 1
        } else {
            count = 0; // сброс счётчика в 0
        }
        
        // обновление текстового содержимого элемента значения новым значением счётчика
        value.textContent = count;
    })
});
