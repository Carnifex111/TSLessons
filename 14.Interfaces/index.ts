
// IConfig - приставка I - венгерская нотация (Я интерфейс)

interface IConfig {
    carEngine: 'Бензин' | 'Дизель',
    engineVolume: 1.5 | 2.55,
    testCar: (speed: number) => void; 
}

interface IRole {
    role: "Водитель" | "Пассажир"
}

interface IConfigAndRole extends IConfig, IRole {
    
}

const Opel: IConfigAndRole = {
    carEngine: 'Бензин',
    engineVolume: 1.5,
    role: "Водитель",
    testCar: (speed: number): void => console.log(speed)
}


// Индексные свойста

interface IStyles {
    [key: string]: string 
}

const styles: IStyles = {
    display: 'flex',
    padding: '20px',
    marginTop: '10px'
    //aling: 10 // ошибка, как как тут должэны быть строго строка
}