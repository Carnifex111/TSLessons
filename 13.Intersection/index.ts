
type Config = { carEngine: 'Бензин' | 'Дизель' };

type Role = {
    role: string;
}

type ConfigWithRole = Config & Role;

const Opel: ConfigWithRole = {
    carEngine: 'Бензин',
    role: 'Водитель'
}

const Audi: ConfigWithRole = {
    carEngine: "Дизель",
    role: 'Пассажир'
}

// пересечение intersection