
const catData = {
    catName: 'Барсик',
    age: 15,
    alive: false,
    messages: {
        error: 'Кот умер =('
    }
}

// const catLife = (data: {
//     catName: string,
//     age: number,
//     alive: boolean
// }): string => {
//     if (data.alive) {
//         return `Кот ${data.catName.toLocaleLowerCase()} жив! Ему ${data.age} лет`
//     } else {
//         return `Кот ${data.catName.toLocaleLowerCase()} всё! Он прожил ${data.age} лет`
//     }
// }

// вариант с деструктуризацией
const catLife = ({catName, age, alive, messages: {error}}: {
    catName: string,
    age: number,
    alive: boolean,
    messages: {error: string}
}): string => {
    if (alive) {
        return `Кот ${catName.toLocaleLowerCase()} жив! Ему ${age} лет`;
    } else {
        return error;
    }
}

console.log(catLife(catData))