// Вспомогательные операторы которые помогают взаимодействовать с типами данных
interface Person {
    name: string
    age: number
}

// применяем оператор keyof
type PersonKeys = keyof Person // keyof проверка ключей (в примере, принимает только: 'name' | 'age')

let key: PersonKeys = 'name'
key = 'age'
// key = 'default' // error

type User = {
    _id: number
    name: string
    email: string
    createdAt: Date
}

type UserKeysNoMeta1 = Exclude<keyof User, '_id' | 'createdAt'> // исключаем '_id' | 'createdAt', результате принимает только 'name' | 'email'
type UserKeysNoMeta2 = Pick<User, 'name' | 'email'> // перечисляем приемлемые типы

let u1: UserKeysNoMeta1 = 'name'
// u1 = '_id' // error