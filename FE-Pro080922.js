/* function handler(){
    if (a > 10){
        return true
    }
    else {
        return false
    }
}
    if (handler()){
        console.log('true')
    }
console.log(handler()) */

/* function sqrt(num){   // - function declaration
    return num ** 2
}

let sqrt = function(num){ // - function expression
    return num ** 2
}

let sqrt = (num) => { num ** 2  // - стрелочная функция, можно не использовать return
}
console.log(sqrt(5)) */

// Task 1

/* function typeData(a){
    return `${a} - это ${typeof(a)}`
} */

/*let typeData = function(a){
    return `${a} - это ${typeof(a)}`
}

let typeData = (a) => {`${a} - это ${typeof(a)}`
}*/

/* console.log(typeData(5))
console.log(typeData('Mike'))
console.log(typeData(true))
console.log(typeData([5, 6, 0])) */

// Task 2

/*  1 solution
    function checkEven(string){
    if (string.length % 2 == 0){
        console.log('true')
    } else{
        console.log('false')
    }
}
checkEven('grateful') */

/*  2 solution
    function checkEven(string){
    console.log(string.length % 2 == 0)
}
checkEven('pomegranate') */

// let checkEven = (string) => console.log(string.length % 2 == 0) - 3 solution (arrow function)

function stringToNumber(string, onOk, onError){
    if(typeof(string) != 'string'){
    onError('Введенное значение не строка!')
    return;
    }
    if (!isNaN(+string)){
    onOk(+string)
    } else {
    onError('Введенное строка не преобразовывается в число!')
    }
}
function printNumQuad(num){
console.log(num**2)
}

function logError(message){
console.log(message)
}

stringToNumber(5,printNumQuad, logError)
