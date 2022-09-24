// Рассчитать итоговую сумму всех покупок.
// Ответ: 430

let goods = {
name1: 'Арбуз',
price1: 100,
name2: 'Вишня',
price2: 35,
name3: 'Яблоко',
price3: 45,
name4: 'Клубника',
price5: 250,
}
let sum = 0
for(let i in goods){
    if(typeof goods[i] == 'number'){
        sum += goods[i]
    }
}
console.log(sum)


let someObj = {
    name: 'Tigran', 
    last_name: 'Movsisyan'
  }

function myMethod(obj){
    let newArray = []
    for(let i in obj){
        newArray.push(obj[i])
    }
    return newArray
}
console.log(myMethod(someObj))