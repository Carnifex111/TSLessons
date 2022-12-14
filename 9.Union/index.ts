

// объединение типов

// наша переменная может быть типа number или string
const temp: number | string = '10';

const tempOne: number | string | boolean = true;

// union тип - объединенный тип, из нескольких простых типов
const printMsg = (msg: string | number): void => {
    // console.log(msg.toLowerCase()); // мы не можем применить это свойство для msg так как его нет у number
    console.log(msg);
}