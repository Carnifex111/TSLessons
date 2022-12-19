
const temp: number | string = '10';

const tempOne: number | string | boolean = true;

// const printMsg = (msg: string | number | boolean): void => {
//     if (typeof msg === "string") {
//         console.log(msg.toUpperCase());
//     } else if ( typeof msg === "string" || typeof msg === "number") {
//         console.log(msg.toString());
//     } else {
//         console.log(msg)
//     }
// }

const printMsg = (msg: string[] | number | boolean): void => {
    //isArray = проверяет была ли переданная сущность массивом
    if (Array.isArray(msg)) {
        msg.forEach(m => console.log(m))
    } else if (typeof msg === 'number') {
        console.log(msg.toFixed())
    } else {
        console.log(msg.valueOf())
    }
}

let newArr: string[] = ['Один', 'Два', 'Три']

console.log(printMsg(newArr))

const print1 = (a: number | string, b: number | boolean) => {
    if (a === b) {
        // должна быть числом
        console.log(a)
    }
}

// у нас есть 1 аргумент. который является объектом
// в котором будет свойство system которое будет числом
// либо будет другой объект который будет содержать в себе свойство user и там тоже будет число
const readings = {
    user: 'user'
}

const check = (readings: {system: string} | { user: string}): void => {
    // сейчас нужно сузить типы
    if ('system' in readings) {
        console.log(readings.system)
    } else {
        console.log(readings.user)
    }
}

check(readings)