// function greetings(){
//     alert("heyy all good afternoon")
// }
// greetings()
// add(1,2)
// function add(x,y){
//     let sum=x+y
//     console.log(`sum = ${sum}`)
// }
add(1,2)
function add(x,y){
    let sum=x+y
    console.log(`sum = ${sum}`)
    return sum
}
let s=add(9,10)
console.log(s)
let i=100
function test(){
    //let x=90
    let i=50
    console.log(`inside test function i=${i}`)
}
test()
console.log(`outside test function i=${i}`)
function avg(a,b,c){
    let average=(a+b+c)/3
    console.log(`average is=${average}`)
    return average
}
avg(30,20,40)
