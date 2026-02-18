// Лабораторная работа №4
// Тема: Переменные, типы данных, функции в JavaScript

// 1. Переменная с именем пользователя и вывод в консоль
const userName = "Вероника Сухня";               // используем const, так как имя не меняем
console.log("Имя пользователя:", userName);

// 2. Две числовые переменные и их сумма 
let numberA = 15;       // let — значение можно изменить позже
let numberB = 27;
let sumNumbers = numberA + numberB;
console.log("Сумма чисел:", sumNumbers);

// 3. Функция приветствия (выводит сообщение в консоль)
function greetUser(name) {
    console.log("Привет, " + name + "!");
}
// Проверка функции:
greetUser(userName);

// 4. Функция, которая возвращает квадрат числа
function square(value) {
    return value * value;
}
// Проверка:
let squared = square(8);
console.log("Квадрат числа 8 равен:", squared);

// 5. Мини‑калькулятор в консоли
// Запрашиваем два числа у пользователя
let input1 = prompt("Введите первое число:");
let input2 = prompt("Введите второе число:");

// Преобразуем строки в числа (с помощью Number)
let num1 = Number(input1);
let num2 = Number(input2);

// Складываем и выводим результат в консоль
let total = num1 + num2;
console.log("Результат сложения:", total);