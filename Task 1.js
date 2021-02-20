const value = prompt("Введите число");
const result = +value;

if (typeof result !== "number" || isNaN(value)) {
    console.log("Упс, кажется, вы ошиблись");
} else if (result % 2 == 0) {
    console.log("Вы ввели чётное число");
} else {
    console.log("Вы ввели нечётное число");
}
