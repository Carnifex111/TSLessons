// объединение типов

// наша переменная может быть типа number или string
const temp: number | string = '10';

const tempOne: number | string | boolean = true;

// union тип - объединенный тип, из нескольких простых типов
const printMsg = (msg: string | number): void => {
    // console.log(msg.toLowerCase()); // мы не можем применить это свойство для msg так как его нет у number
    console.log(msg);
}


// минутка работы 
// Если выписать все натуральные числа меньше 10, кратные 3 или 5, то получим 3, 5, 6 и 9. Сумма этих чисел равна 23.

// Найдите сумму всех чисел меньше 1000, кратных 3 или 5.
// (Важное условие! Написать на TypeScript.Не гуглить)
const hello: string = 'Hello world =)';