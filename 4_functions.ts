function add(a: number, b: number): number { // function имя(параметр: тип): тип результата работы функции { ... }
    return a + b
}

function toUpperCase(str: string): string {
    return str.trim().toUpperCase()
}

// Перегрузка функций с разными праметрами и их значениями
interface IPosition {
    x: number | undefined
    y: number | undefined
}

interface IPositionWithDefault extends IPosition {
    default: string
}

function position(): IPosition // возможность вызова функции без параметров
function position(a: number): IPositionWithDefault // возможность вызова функции с одним параметром (перегрузка)
function position(a: number, b: number): IPosition // возможность вызова функции с двумя параметрами (перегрузка)

function position(a?: number, b?: number) { // указываем необязательные параметры для функции position
    if(!a && !b) {
        return {
            x: undefined,
            y: undefined
        }
    }
    if(a && !b) {
        return {
            x: a,
            y: undefined,
            default: a.toString()
        }
    }
    return {
        x: a,
        y: b
    }
}
/**
 * Проверяем
 * tsc .\4_functions.ts
 * node .\4_functions.js
 **/
console.log('Empty:', position()); // Empty: { x: undefined, y: undefined }
console.log('One params:', position(42)); // One params: { x: 42, y: undefined, default: '42' }
console.log('Two params:', position(42, 8)); // Two params: { x: 42, y: 8 }
