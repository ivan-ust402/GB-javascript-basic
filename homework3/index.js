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

/* 
Задание 4
Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
1. Сложение
2. Разность
3. Умножение
4. Деление
Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.
*/

function sum(num1, num2) {
    return num1 + num2;
}

function diff(num1, num2) {
    if (num1 < num2) {
        let temp = num1;
        num1 = num2;
        num2 = temp;
    } else if (num1 === num2) {
        return 0;
    }
    return num1 - num2;
}

function mult(num1, num2) {
    return num1 * num2;
}

function div(num1, num2) {
    if (num2 === 0) {
        return "На ноль делить нельзя, хотя мой преподаватель по спец.главам математики с нами бы поспорил!";
    }
    return num1 / num2;
}

alert("Задание 4");

const number1 = parseInt(prompt("Введите первое число: "));
const number2 = parseInt(prompt("Введите второе число: "));

alert(`Сумма введенных чисел: ${sum(number1, number2)}`);
alert(`Разность введенных чисел: ${diff(number1, number2)}`);
alert(`Перемножение введенных чисел: ${mult(number1, number2)}`);
alert(`Деление введенных чисел: ${div(number1, number2)}`);
