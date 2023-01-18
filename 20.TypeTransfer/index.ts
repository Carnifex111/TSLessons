let a: Number = new Number(2);
let b: number = 5;

//Ошибки нет так как а неявно преобразовался в b
a = b;

// Но если в обратном случае, то мы получаем ошибку
// Так как данное действие недопустимо по правилам TS
// number - это примитив. Number это обернутый объект
// b = a;

// в данном случае получим обычный number, как примитив
let c = Number(1);

// Стандартное преобразование с JS
// toString

const ageNum: number = 26;
const ageString: string = ageNum.toString();

// toNum ставим плюсик перед переменной
const ageStr = '12';
const num = +ageStr; 


// // Объект

interface Company {
    name: string,
    budget: number
}

const company = {
    name: 'page404',
    budget: 7000000
}

interface Project {
    name: string,
    projectBudget: number
}

function tranformObj(company: Company, counter: number) : Project {
    return {
        name: company.name,
        projectBudget: counter
    };
}