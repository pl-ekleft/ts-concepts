// Создаем интерфейс для типа данных
interface Rect { // именуем новый тип данных как Rect
    readonly id: string // readonly - обозначает только чтение
    color?: string // ? - обозначает необязательный параметр
    size: {
        width: number
        height: number
    }
}

const rect1: Rect = {
    id: '123',
    size: {
        width: 20,
        height: 30
    },
    color: '#000'
}

const rect2: Rect = {
    id: '124',
    size: {
        width: 110,
        height: 5
    }
}

rect2.color = 'black'
// rect2.id = '12121' // переназначение невозможно 

// указываем к какому типу нужно привести объект
const rect3 = {} as Rect 
const rect4 = <Rect>{}

// ====
// Наследование интерфейсов

interface RectWithArea extends Rect {
    getArea: () => number // создаем параметр в виде функции, которая вернет тип данных number
}

const rect5: RectWithArea = {
    id: '123',
    size: {
        width: 20,
        height: 20
    },
    getArea(): number {
        return this.size.width * this.size.height
    }
}

// ====
interface IClock {
    time: Date,
    setTime(date: Date): void
}

class Clock implements IClock { // указываем принадлежность класса к интерфейсу IClock
    time: Date = new Date()

    setTime(date: Date): void {
        this.time = date
    }
}

// ====
// Создаем интерфес для объекта с большим кол-вом динамических ключей
interface Styles {
    [key: string]: string // указываем тип ключа string и тип его значения string
}

const css: Styles = {
    border: '1px solid black', // string: string  (согласно интерфейсу Styles)
    marginTop: '2px',
    borderRadius: '5px'
}