/* 
Задание 1
Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени
*/

function cube(num) {
    return num*num*num;
}

console.log("2^3 + 3^3 =", cube(2) + cube(3));


/* 
Задание 2
Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"
*/

/* function getSalary(salaryWithTax) {
    clearSalary = salaryWithTax - salaryWithTax * 13 / 100;
    console.log(`Размер заработной платы за вычетом налогов равен ${clearSalary}`);
    alert(`Размер заработной платы за вычетом налогов равен ${clearSalary}`);
}

const accrual = parseInt(prompt("Введите ваши начисления: "));

if (isNaN(accrual)) {
    alert("Значение задано неверно");
} else {
    getSalary(accrual);
} */


/* 
Задание 3
Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел
*/

/* function findMax(value1, value2, value3) {
    if ((value1 > value2) && (value1 > value3)) {
        return value1;
    } else if ((value2 > value1) && (value2> value3)) {
        return value2;
    } 
    return value3;
}
const num1 = parseInt(prompt("Введите первое число: "));
const num2 = parseInt(prompt("Введите второе число: "));
const num3 = parseInt(prompt("Введите третье число: "));

if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    alert("Вы ввели неправильное значение");
} else {
    alert(`максимальное число: ${findMax(num1, num2, num3)}`);
} */


