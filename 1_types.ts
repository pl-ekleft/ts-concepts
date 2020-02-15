const isFetching: boolean = true
const isLoading: boolean = false

const ing: number = 42
const float: number = 4.2
const num: number = 3e10

const message: string = 'Hello TypeScript'

const numberArray: number[] = [1, 2, 3, 5, 8, 13]
const numberArray2: Array<number> = [1, 2, 3, 5, 8, 13] // применен дженерик типа

const words: string[] = ['Hello', 'TypeScript']

// Tuple
const contact: [string, number] = ['Pavel', 9164791466]

// Any
let variable: any = 42
// ...
variable = 'New string'
variable = []

// ====
function saveMyName(name: string): void { // через двоеточие указываем тип возвращаемых данных (void - пустой)
    console.log(name);
}
saveMyName('Павел')

// Never - это тип, обозначающий постоянную работу
function throwError(message: string): never {
    // for (let i = 0; i < 10; i++) {
        throw new Error(message)
    // }
}

// function infinite(): never {
    // while (true) {
    // ...
    // }
// }

// Type - создание алиасов для типов
type Login = string

const login: Login = 'admin'

type ID = string | number
const id1: ID = 234234
const id2: ID = '23423423'

 type SomeType = string | null | undefined // взамен обычно используют просто тип void