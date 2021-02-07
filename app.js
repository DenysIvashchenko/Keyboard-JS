let inp = document.querySelector('.inp');
let keys = document.querySelectorAll('.key-button');

inp.onkeydown = (event) => {
    keys.forEach(elem => {                         // запускаем перебор массива
        let data = elem.getAttribute('data-key');       // в переменную data кладем атрибут с символом
        event.key == data ? elem.classList.add('activ') : elem.classList.remove('activ')  // если символ совпадает с key добавляем класс ели нет убераем
    });
}