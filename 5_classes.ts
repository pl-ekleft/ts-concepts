class Typescript {
    version: string

    constructor(version: string) {
        this.version = version
    }

    info(name: string) { // приватный метод
        return `[${name}]: TypeScript version is ${this.version}`
    }
}

// class Car {
//     readonly model: string
//     readonly numberOfWheels: number = 4

//     constructor(theModel: string) {
//         this.model = theModel
//     }
// }

// сокращаем запись класса Car описанного выше:
class Car {
    readonly numberOfWheels: number = 4
    constructor(readonly model: string) { // ts сам создаст модификатор readonly model в классе

    }
}

// ====
// В TS есть привычные модификаторы: public, private и protected, которые можно использовать как для методов, так и для свойств.
// Подробнее: https://codex.so/ts-classes 
class Animal {
    protected voice: string = ''
    public color: string = 'black' // public - это значение по умолчанию для всех модификаторов класса, доступны везде (включая наследников)

    private go() { // метод go доступен только в рамках класса Animal
        console.log('Go');
    }

    constructor() {
        this.go()
    }
}

class Cat extends Animal { // наследование от Animal
    public setVoice(voice: string): void {
        this.voice = voice
    }
}

const cat = new Cat()
cat.setVoice('test')
console.log(cat.color)


// ====
// Абстрактные классы
abstract class Component {
    abstract render(): void
    abstract info(): string
}

class AppComponent extends Component {
    render(): void {
        console.log('Component on render');   
    }

    info(): string {
        return 'This is info';
    }
}
console.log(new AppComponent().info);
