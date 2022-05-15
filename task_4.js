// n second passed create time clock
function addZero (n) {
    return n < 10 ? "0"+n : n
}
function getTime(n) { 
let h = n/3600%24;
let m = Math.floor(n%3600/60);
let s = Math.floor(n % 3600 %60) 
// let s1 = s < 10 ? "0"+s:s
// let m1 = m < 10 ? "0"+m : m
console.log(`${Math.floor(h)} : ${addZero(m)} : ${addZero(s)}`)
}