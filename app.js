//console.log("Hello")

// var log = function(msg) {
//     console.log("[Log]:", msg)
// }
// log("Hello World")
// log("Welcome to SIT313/737")

// var adder=function(first,second){
//     var sum=first+second
//     return sum
// }
// var log=function(msg){
//     console.log("[Log]: ", msg)
// }
// log("Hello World")
// log("Welcome to SIT313/737")
// log("The sum is " +adder(5,6))

var async = function(){
    setTimeout(function(){log("I am coming out later although I have been called before the next one")}, 2000)
}
var adder=function(first,second){
    var sum=first+second
    return sum
}
var log=function(msg){
    console.log("[Log]: ", msg)
}

log("The sum is " +adder(5,6))
async();
log("This is going to come out before the previous one")
