// what the clock shows n minutes have passed from start of the day
// tried with function
// let time = 1441;
// function time(){
//     let h = time % 60
//     let m = (time/60)%24
//     return h , m
// }
// console.log(time)

//1st) 1441
let a = 1441;
let b = a%60;
let c = Math.floor(1441/60)%24
console.log(`${c} ${b}`)
//2nd) 150
let d = 150;
let e = d%60;
let f = Math.floor(150/60)%24
console.log(`${f} ${e}`)

