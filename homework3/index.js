/* 
Задание 1
Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени
*/

function cube(num) {
    return num*num*num;
}

console.log("2^3 + 3^3 =", cube(2) + cube(3));
