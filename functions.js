// 1. console.log выводит сообщение в консоль.
console.log("Привет из Node.js!");

// 2. require подключает модули в формате CommonJS.
// Подключаем встроенный модуль fs для работы с файлами.
const fs = require("fs");

console.log("Подключен модуль fs");

// Проверяем, существует ли файл app.js рядом с текущим файлом.
const path = require("path");
const filePath = path.join(__dirname, "app.js");

console.log("Файл app.js существует:", fs.existsSync(filePath));

// 3. alert показывает всплывающее окно в браузере.
// В Node.js этой функции нет, поэтому обрабатываем ошибку.
try {
  alert("Это работает только в браузере!");
} catch (error) {
  // Обработка ошибки позволяет продолжить выполнение программы.
  console.log("alert не поддерживается в Node.js");
}

console.log("Проверка завершена.");