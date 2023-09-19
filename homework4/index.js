/* 
Задание 1
Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
0 – это ноль
1 – нечетное число
2 – четное число
3 – нечетное число
…
10 – четное число
*/

console.log('Задание 1');

for (let i = 0; i < 11; i++) {
    let value;
    if (i===0) {
        value = 'это ноль';
    } else if (i % 2 === 0) {
        value = 'четное число'
    } else if (i % 2 !== 0) {
        value = 'нечетное число'
    }
    console.log(`${i} - ${value}`);   
}

console.log("");

/* 
Задание 2
Дан массив [1, 2, 3, 4, 5, 6, 7]
Сделайте из этого массива следующий [1, 2, 3, 6, 7]
*/
console.log('Задание 2')
const arr2 = [1, 2, 3, 4, 5, 6, 7];
const res = arr2.filter((el) => el !== 4 && el !== 5);

console.log(arr2);
console.log(res);
console.log("");

/* 
Задание 3
Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
1. Рассчитать сумму элементов этого массива
2. Найти минимальное число
3. Найти есть ли в этом массиве число 3
*/

console.log('Задание 3');

const arr3 = Array.from({length: 5}, (el) => el = Math.floor(Math.random()*10));

const sum3 = arr3.reduce((acc, el) => acc + el, 0);
const min3 = arr3.reduce((acc, el) => Math.min(acc, el));

const existThree = (arr3.indexOf(3) !== -1) 
    ? 'Да, число 3 есть в массиве'
    : 'Нет числа 3 в массиве'

console.log(arr3);
console.log(sum3);
console.log(min3);
console.log(existThree);
console.log('');
