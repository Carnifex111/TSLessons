let age: number = 25;
// age.slice(0,3); // Нельзя использовать метод с string в number
// age = 'Ivan'; // число в строку помещать нельзя!

const lastname: string = "Иван";
const firstname: string = "Широв";
const flag: boolean = true;

if (flag) {
    console.log(`Это ${lastname.toUpperCase()} ${firstname} ему ${age} лет`)
} else {
    console.log(`Неизвестный пользователь системы`)
}
