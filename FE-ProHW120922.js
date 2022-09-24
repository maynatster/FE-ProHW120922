/* 1. В программе объявлена переменная num с численным значением. 
      Создайте функцию square(), которая возвращает квадрат этого числа.
    Пример: 
    let num = 5
    let result = square(num) 
    console.log(result)
    Ответ: 25 */

let square = function(num){
    return num ** 2;
}
console.log(square(5))

/* 2. В программе объявлена переменная price, которая содержит в себе числовые данные.
      Опишите функцию priceMessage(), которая должна вывести в консоль сообщение по следующему примеру: 
    Пример:
    price = 13000 
    Результат "Данный товар стоит 13000 рублей" */

let priceMessage = function(price){
    console.log('Данный товар стоит ' + price + ' рублей')
}
console.log(priceMessage(7000))

/* 3. В программе объявлена переменная num, которая содержит в себе численные данные.
    Напишите функцию power(), используя цикл, возведите значение переменной в квадрат 3 раза.
    Каждый результат сконкатенировать через пробел и выведите в консоль. 
    Пример:
    let num = 2
    power(num)
    Результат:  4 16 256 */

let power = function(num){
    for(let i = 1; i <= 3; i++){
    console.log(i + (i**2) + ((i**2)**2))
    }
}
power(2)

// 4. В программе задана переменная num с числом. Напишите функцию handler,
//   которая составит таблицу умножения с данным аргументом по следующему примеру:
   /*handler(5)
    Результат:
    5*1=5
    5*2=10
    5*3=15
    5*4=20
    5*5=25
    5*6=30
    5*7=35
    5*8=40
    5*9=45
    5*10=50 */

let handler = function(num){
    for(let i = 1; i <= 10; i++){
    console.log(num + ' * ' + i + ' = ' + num * i)
    }
}
handler(5)

// done
