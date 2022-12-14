// кортежи

const catDataTuple: [number, string, boolean] = [12, "Барсик", true];

// catDataTuple[0] = '1';

// можно пушнуть но обратиться не можем, так как будет только 3 эемента в этом порядке
// кортеж - неизменяемая структура с определенным порядком
// catDataTuple.push(12);
// catDataTuple[3]; //низя

//получим массив в котором получим лишь строки
const res = catDataTuple.map((el) => `${el} - data`);

//деструктуризация
const [age, catname, alive] = catDataTuple;

//спред оператор
//мы развернули массив в конце
//за счет этого мы можем расширять сколько угодно его, но в формате string
const student: [string, string, number, ...string[]] = ['Широв', 'Иван', 26, 'Group-4']
