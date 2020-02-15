const arrayOfNumbers: Array<number> = [1, 1, 2, 3, 5, 8, 13]
const arrayOfStrings: Array<string> = ['Hello', 'Pavel']

// Функция с разными типами данных
function reverse<T>(array: T[]): T[] { // тип переданного аргумента является и типом возвращаемого значения
    return array.reverse()
}

reverse(arrayOfNumbers)
reverse(arrayOfStrings)