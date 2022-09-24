
function handRandom(){
    let result = Math.ceil(Math.random() * 100)
    console.log(result) // return result
}
handRandom() // console.log(handRandom())

let a = '11.5001px'
let b = '11.499em'
let c = '11.49fr'
let d = '-11.5px'
console.log(Math.max(parseFloat(a), parseFloat(b), parseFloat(c), parseFloat(d)))
