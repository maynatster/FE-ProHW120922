// let myObj = new Object({}); - not in use anymore
let myObj = {
    name: 'Mike',
    lastName: 'Placido',
    age: 39,
    status: {
        jobStatus: true,
        salary: 95000
    }
}
myObj.height = 173
myObj.sayHi = function(){
    console.log('Mike says Hi')
}
myObj.sayHi
console.log(myObj);

let product = {
    name: 'Bycicle',
    quantity: 10,
    price: 1500
}
product.name = 'Scooter'
product.weight = 17
delete product.quantity

console.log(product)

let article = {
    title: "Загадки дачного огурца", 
    text: "Огурец не перестает удивлять своими выходками. Хозяйка в недоумении" 
}
let author = {
    name: "Ричард М.В.",
    age: 43
}

let article2 = Object.assign (article, author)
console.log (article2)

// Задача 2
// Напишите программу, которая выведет в консоль все значения элементов объекта someObj, 
// игнорируя строки.

let someObj = {
	char1: 1,
	char2: '2',
	char3: 3,
	char4: '4',
	char5: '5',
	char6: 6,
}
for(let i in someObj) {
    if(typeof someObj[i] == 'number')
    console.log(someObj[i])
}

// Задание 3 (ДОП ЗАДАНИЕ) PS: Решение можно отправить в лс слака
// Доработайте решение 2 задания, изменив условие:
// Выведите значение ключей, цифра в конце которых 
// делится на 2 без остатка.
// Пример значений переменной:
// let someObj = {
// 	someChar1: 1,
// 	char2: '2',
// 	char3: 3,
// 	someChar4: '4',
// 	char5: '5',
// 	veryBigShar6: 6,
// }
// Пример результата:
// char2
// someChar4
// veryBigShar6

let someObj2 = {
    someChar1: 1,
    char2: '2',
    char3: 3,
    someChar4: '4',
    char5: '5',
    veryBigShar6: 6,
    }
for(let i in someObj2){
    if(+i[i.length-1] % 2 == 0){
        console.log(i)
    }
}

