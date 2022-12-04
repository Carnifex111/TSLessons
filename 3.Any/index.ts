// совет: избегайте any | any - это вселенское зло =(

//представим что данные приходят нам с сервера
const catData = '{"catNameData": "Барсик", "ageData": 40, "aliveData": true}';

// распарсим строку записанную в  формате json
// Наш userObj - any. Проблема в том что когда срабатывает json.parse неизвестно что мы получим
// const userObj = JSON.parse(catData.go());

// Укажем аннотацию объекта
const userObj: {
    catNameData: string,
    ageData: number,
    aliveData: boolean
} = JSON.parse(catData);


// Указывайте сразу тип! any - зло
let counter;
counter = 23;