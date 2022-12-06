const catName: string = 'Барсик';
let age: number = 15;
let alive: boolean = false;

//never - тип который значит что ничего не возвращается и не присваивается


// never - использовать тогда когда функция заканчивается без возвращения значения
const createError = (msg: string) => {
    throw new Error(msg); 
    // while (true) {
        // функция никогда не дойдет до своего конца
        // получаем never
    // }
}

const catLife = (catName: string, age: number, alive: boolean): string => {
    if (alive === true) {
        return `Кот ${catName.toLocaleLowerCase()} жив! Ему ${age} лет`
    } else if (alive === false) {
        return `Кот ${catName.toLocaleLowerCase()} всё! Он прожил ${age} лет`
    } 
    return createError("Error") // это значит что на этом участке после условия у нас совсем ничего
    // не возвращается из нашей функции 
    // у нас вернется даже не undefined
    // а вернется конкретная ошибка которая куда-то выпадет (либо в другую ошибку, либо в консоль)
    // закончится функция ошибкой, а не тем что она вернет undefined
}



// мы пытаемся сказать коду что в этой переменной должно содержаться что-то
// что никогда не будет присвоено, и никогда не вернется =(
// const temp: never = undefined;