//Реалізовуємо свій компютерний магазин.
//Необхідно реалізувати базовий клас комютера. Який має лише параметри:
//Оперативна память.
//Потужність процесора. (цифра від 0 до 1000)
//Назва.
//В кожного компютера має бути метод включання.
/* class Computers {
    constructor(ram, cpuPower, name) {
        this.ram = ram || 0;
        this.cpuPower = cpuPower || 0; //(0 <= 1000)
        this.name = name || 'No name';

        if (cpuPower < 0 || cpuPower > 1000) {
            console.log('Wrong Cpu power');
        }

    }
    powerOn(typeOfPC) {
        console.log(typeOfPC);
    }

}
//Від базового компютрера треба реалізувати ноутбук.
//Він має нову властивість дюймаж монітора.
//У нього зявляється нова змінна роботи батареї. Ця змінна визначається як потужність / (дюйми * оперативку)
class Laptop extends Computers {
    constructor(ram, cpuPower, name, monitorSize, batteryPower) {
        super(ram, cpuPower, name);
        this.monitorSize = monitorSize || 'No monitor size';
        this.batteryPower = batteryPower = Math.floor(cpuPower / (monitorSize * this.ram)) || 'No battery';

    }
}
//Від ноутбука потрібно зробити ультрабук.
//Він має нову змінну ваги.
//При включенні ультрабуку має видаватися помилка, якшо вага більша за 2кг та батарея тримаж менше ніж 4 години.
class Ultrabook extends Laptop {
    constructor(ram, cpuPower, name, monitorSize, weight) {
        super(ram, cpuPower, name, monitorSize);
        this.weight = weight || 'No weight';
        weight > 2 ? console.log('Battery will work less then 4 hour') : weight === weight;
    }
}
//Від базвого класу потрібно створити базовий ПК.
//В нього має бути новий метод запуску ігор.
//Кількість FPS визначається як потужність / опервтивку.
//Example: `You are playing *GAME_NAME* with *FPS_COUNT* FSP`
class basicPC extends Computers {
    constructor(ram, cpuPower, name) {
        super(ram, cpuPower, name);
    }
    runGame(typeOfPc) {
        let fps = Math.floor(this.cpuPower / this.ram);
        if (typeOfPc === gamerPc) {
            this.cpuPower = this.cpuPower - (this.cpuPower * (0.01 / this.ram))
            fps = fps * 2;
        }
        if (this.cpuPower < 500 || this.ram < 8) {
            console.log('на цьому відрі ігри не запускаються');
        } else {
            console.log(`You are playing Controll with ${fps} FPS`);
        }
    }
    //Компютер можна апгрейдити.
    //Потужність процесора можна збільшувати максимум на 10%. Зменшувати її не можна.
    //Оперативку можна збільшити лише в 2 рази. Зменшувати її не можна.
    //Для зміни характеритик мають бути свої методи. Мняти змінну "в лоб" заборонено.
    cpuBoost() {
        let boost = prompt('How much you want to boost your CPU? (0-10%)');
        if (boost <= 10 && boost >= 0) {
            this.cpuPower = this.cpuPower + (this.cpuPower * (boost / 100));

        } else {
            console.log('ERROR, from 0 to 10%!')
        }

    }
    ramBoost() {
        let upgrade = confirm('Do you want to upgrade your RAM? (x2)');
        if (upgrade === true) {
            this.ram = this.ram * 2;
        }
    }
}
//Від базового ПК необхідно зробити ігровий ПК.
//Кількість ФПС має бути рівно в 2 рази більший ніж в звичайного ПК.
//При запуску однієї гри потужніть процесора має падати на 0.1%.
//Якшо потужність процесора менша ніж 500. І оперативка менша за 8 потрібно видати помилку, (алерт, або консоль) що на цьому відрі ігри не запускаються.
class gamerPC extends basicPC {
    constructor(ram, cpuPower, name) {
        super(ram, cpuPower, name);
    }
}
let testPC = new Computers(8, 500, 'Standrat PC', 20, 6);
let basicPcTest = new basicPC(16, 700, 'Basic PC');
let gamerPc = new gamerPC(16, 501, 'Gamer PC');
testPC.powerOn(testPC);
basicPcTest.powerOn(basicPcTest);
basicPcTest.runGame(basicPcTest);
basicPcTest.cpuBoost();
basicPcTest.ramBoost();
basicPcTest.powerOn(basicPcTest);
basicPcTest.runGame(basicPcTest);
gamerPc.powerOn(gamerPc);
gamerPc.runGame(gamerPc);
gamerPc.runGame(gamerPc);
gamerPc.runGame(gamerPc);
gamerPc.runGame(gamerPc);
gamerPc.runGame(gamerPc);
gamerPc.powerOn(gamerPc);
 */

//- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//-- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
//-- info () - яка виводить всю інформацію про автомобіль
//-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//-- changeYear (newValue) - змінює рік випуску на значення newValue
//-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
/* 
function Car(model, maker, date, maxSpeed, engineCapacity) {
    this.model = model;
    this.maket = maker;
    this.date = date;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;
    this.drive = function drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }
    this.info = function info() {
        console.log(testCar);
    }
    this.increaseMaxSpeed = function increaseMaxSpeed(newSpeed) {
        this.maxSpeed = this.maxSpeed + newSpeed;
    }
    this.changeYear = function changeYear(newValue) {
        this.date = newValue;
    }
    this.addDriver = function addDriver(driver) {
        this.driver = driver;
    }
}
let testCar = new Car('Octavia', 'Skoda', 2018, 240, 40);


const driver = {
    name: 'Man',
    age: 30,
    drive: true
}
testCar.info();
testCar.increaseMaxSpeed(10);
testCar.info();
testCar.changeYear(2022);
testCar.info();
testCar.addDriver(driver);
testCar.info();
 */
//- Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//-- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
//-- info () - яка виводить всю інформацію про автомобіль
//-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//-- changeYear (newValue) - змінює рік випуску на значення newValue
//-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
/* 
class Car {
    constructor(model, maker, date, maxSpeed, engineCapacity){
    this.model = model;
    this.maket = maker;
    this.date = date;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;
    }
    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }
    info() {
        console.log(testCar);
    }
    increaseMaxSpeed(newSpeed) {
        this.maxSpeed = this.maxSpeed + newSpeed;
    }
    changeYear(newValue) {
        this.date = newValue;
    }
    addDriver(driver) {
        this.driver = driver;
    }
}
let testCar = new Car('Octavia', 'Skoda', 2018, 240, 40);


const driver = {
    name: 'Man',
    age: 30,
    drive: true
}
testCar.info();
testCar.increaseMaxSpeed(10);
testCar.info();
testCar.changeYear(2022);
testCar.info();
testCar.addDriver(driver);
testCar.info();  
*/

//-створити класс попелюшка з полями ім'я, вік, розмір ноги
//--Створити 10 попелюшок , покласти їх в масив
//--Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//-- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
/* 
class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}
const firstC = new Cinderella('Tanya', 30, 24);
const secondC = new Cinderella('Lena', 24, 20);
const thisrdC = new Cinderella('Olga', 54, 30);
const fourthC = new Cinderella('Yurii', 25, 25);
const fifthC = new Cinderella('Iryna', 24, 21);
const sixthC = new Cinderella('Lesya', 14, 14);
const seventhC = new Cinderella('Slavik', 34, 26);
const eighthC = new Cinderella('Maria', 32, 19);
const ninthС = new Cinderella('Sasha', 44, 23);
const tenthС = new Cinderella('Sofia', 35, 18);
const cinderellas = [];
cinderellas.push(firstC, secondC, thisrdC, fourthC, fifthC, sixthC, seventhC, eighthC, ninthС, tenthС);
console.log(cinderellas);

class Prince extends Cinderella {
    constructor(name, age, footSize) {
        super(name, age, footSize);
    }
}
const firstPrince = new Prince('Dima', 36, 20);
console.log(firstPrince);
for (destiny of cinderellas) {
    if (destiny.footSize === firstPrince.footSize) {
        console.log(destiny.name);
    }
} */

//-створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
//--Створити 10 попелюшок , покласти їх в масив
//--Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
//-- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
/* 
function Cinderella(name, age, footSize) {
    {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}
let cinderellas = [
    new Cinderella('Tanya', 30, 24),
    new Cinderella('Lena', 24, 20),
    new Cinderella('Olga', 54, 30),
    new Cinderella('Yurii', 25, 25),
    new Cinderella('Iryna', 24, 21),
    new Cinderella('Lesya', 14, 14),
    new Cinderella('Slavik', 34, 26),
    new Cinderella('Maria', 32, 19),
    new Cinderella('Sasha', 44, 23),
    new Cinderella('Sofia', 35, 18)
];
console.log(cinderellas);

function Prince (name, age, footSize) {
    this.name = name;
    this.age = age;
    this.footSize = footSize;
}
const firstPrince = new Prince('Dima', 36, 26);
console.log(firstPrince);

function searchForCinderella(){ for (destiny of cinderellas) {
    if (destiny.footSize === firstPrince.footSize) {
        console.log(destiny.name);
    }
}}
searchForCinderella(); 
*/