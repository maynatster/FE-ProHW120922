
// 1. Создайте функцию функцию getQuadCssProps(props), которая в качестве аргумента принимает значение css свойства
// и возвращает квадрат этого числа по следующему примеру ниже. Если в результате преобразования числа вычисляется NaN -
// необходимо вернуть строку ‘none’.
// Пример:
// console.log(getQuadCssProps(‘5px’))
// console.log(getQuadCssProps(‘px5’))
// Результат: 
// ‘25px’
// ‘none’

function getQuadCssProps(string){
    if(isNaN(parseFloat(string))){
        return 'none'
    } else {
        return(parseFloat(string) ** 2) + 'px'
    }
}
console.log(getQuadCssProps('50px'))


// 2. Создайте функцию checkEvenChar(word), которая в качестве аргумента передает строку с произвольной длиной и
// реализует следующие вычисления:
// если из длины переменной word вычисляется квадратный корень (без дробной части) - функция должна возвращать ответ 1,
// в противном случае - 0.
// Пример: 
// console.log(checkEvenChar(‘меню’))
// Результат: 1

function checkEvenChar(string){
    let condition = Math.sqrt(string.length) % 2 == 0
    if(condition){
        return 1
    } else {
        return 0
    }
}
console.log(checkEvenChar('parallel'))

// 3. Создайте функцию getRandomChar(word), которая в качестве аргумента передает строку произвольной длины
// и возвращает случайный символ строки. 
// Примечание: 
// В коде предусмотреть возможность вывода последнего символа в том числе. 
// Убедиться в том, что функция не возвращает undefined (проверить выполнение несколько раз)
// Пример: 
// console.log(getRandomChar(‘меню’))
// Результат: ‘н’

function getRandomChar(string){
    let randomIndex = Math.floor(Math.random() * string.length)
    return string[randomIndex];
}
console.log(getRandomChar('menu'))
console.log(getRandomChar('menu'))
console.log(getRandomChar('menu'))
console.log(getRandomChar('menu'))

// 4. Напишите функцию getRandomChars(word,n), которая в качестве аргумента принимает строку и число.
//    Реализуйте функционал, который вернет в результате выполнения функции n рандомных символом строки word.
// Пример: 
// console.log(getRandomChars(‘меню’, 3))
// console.log(getRandomChars(‘меню’, 5))
// Результат: 
// ‘нме’
// ‘енюмн’

 function getRandomChars(string, n){
    let result = ''
    for(let i = 0; i < n; i++){
        let randomIndex2 = Math.floor(Math.random() * string.length)
        result += string[randomIndex2]
    }
    return result
 }
 console.log(getRandomChars('menu', 1))
 console.log(getRandomChars('menu', 2))
 console.log(getRandomChars('menu', 3))
 console.log(getRandomChars('menu', 25))
