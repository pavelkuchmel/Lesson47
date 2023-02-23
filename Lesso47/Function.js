/*
function task1(){
    for (let i = 1; i <= 100; i++){
        console.log(i + " ");
    }
}
task1();
*/
/*
function task2(num){
    return num ** 3;
}
var a = prompt("Enter number: ", 0);
console.log(task2(prompt("Enter number: ", 0)));
*/
/*
function task3(num1, num2, num3){
    return(num1 + num2 + num3);
}
var array = [parseInt(prompt("Enter number 1: ", 1)), parseInt(prompt("Enter number 2: ", 2)), parseInt(prompt("Enter number 3: ", 3))];
console.log(array)
console.log(task3(...array));
*/
/*
function task4(...b){
    for (let i = 0; i < 3; i++) {
        if (b[i] % 2 == 0){
            return true;
        }
    }
    return false;
}
console.log("" + task4(...[parseInt(prompt("Enter number 1: ", 1)),
    parseInt(prompt("Enter number 2: ", 2)),
    parseInt(prompt("Enter number 3: ", 3))]));
*/
/*
let task4 = (...b) => {
    for (let i = 0; i < b.length; i++) {
        if (b[i] % 2 == 0){
            return true;
        }
    }
    return false;
}
console.log("" + task4(...[parseInt(prompt("Enter number 1: ", 1)),
    parseInt(prompt("Enter number 2: ", 2)),
    parseInt(prompt("Enter number 3: ", 3))]));
*/
/*
let task5 = (...b) => {
    for (let i = 0; i < b.length; i++) {
        if (b[i] == b[i+1]){
            return true;
        }
    }
    return false;
}
console.log("" + task5(...[parseInt(prompt("Enter number 1: ", 1)),
    parseInt(prompt("Enter number 2: ", 2)),
    parseInt(prompt("Enter number 3: ", 3))]));
*/
/*
let task6 = (a, b) => a == b;
console.log(task6(2, 2) + "")
*/
