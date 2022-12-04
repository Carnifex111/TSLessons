const catName: string = 'Барсик';
let age: number = 15;
let alive: boolean = false;

// function catLife(catName: string, age: number, alive: boolean): string {
//     if (alive) {
//         return `Кот ${catName} жив! Ему ${age} лет`
//     } else {
//         return `Кот ${catName} в сё! Он прожил ${age} лет`
//     }
// }

const catLife = (catName: string, age: number, alive: boolean): string => {
    if (alive) {
        return `Кот ${catName.toLocaleLowerCase()} жив! Ему ${age} лет`
    } else {
        return `Кот ${catName.toLocaleLowerCase()} всё! Он прожил ${age} лет`
    }
}

console.log(catLife(catName, age, alive))