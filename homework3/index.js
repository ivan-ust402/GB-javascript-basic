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

function getSalary(salaryWithTax) {
    clearSalary = salaryWithTax - salaryWithTax * 13 / 100;
    console.log(`Размер заработной платы за вычетом налогов равен ${clearSalary}`);
    alert(`Размер заработной платы за вычетом налогов равен ${clearSalary}`);
}

let accrual = prompt("Введите ваши начисления: ");

getSalary(accrual);


