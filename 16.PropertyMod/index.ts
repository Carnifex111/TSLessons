interface ICat {
    name: string;
    readonly age: number; // только для чтения!
    readonly catHome?: number;
}

const Barsik: ICat = {
    name: 'Барсик',
    age: 22
}

Barsik.name = 'Алёшка';
// Barsik.age = 31 //низя, свойство только для чтения

const listName: readonly string[] = ['Иван', 'Петька', 'Владимир'];

// listName[0] = 'Алешка' // низя! Кстати push и всякое подобное тоже не будет доступно

//вообще все свойства объкта только для чтения!
const Persik: Readonly<ICat> = {
    name: 'Персик',
    age:11
}

//Persik.name = 22; // низя! теперь всё внутри только для чтения!

const listNameTwo: ReadonlyArray<string> = ['Иван', 'Петька', 'Владимир'];