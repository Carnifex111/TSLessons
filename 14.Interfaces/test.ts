const Opel = {
    carEngine: 'Бензин',
    engineVolume: 1.5,
    role: "Водитель",
}

const Audi = {
    carEngine: 'Дизель',
    engineVolume: 2.0,
}

interface IBasicConfig {
    carEngine: string,
    engineVolume: number
}

const startCar = (car: IBasicConfig): "Машина едет" => {
    console.log(`carEngine: ${car.carEngine} | engineVolume: ${car.engineVolume}`);

    return "Машина едет";
}

startCar(Opel); // нет ничего страшного в том что первый объект шире
startCar(Audi);