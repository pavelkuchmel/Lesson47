/*
function task6(string){
    let stringArray = string.split(" ");
    let result = "";
    for (let i = 0; i < stringArray.length; i++){
        let string = " ";
        for (let j = 0; j < stringArray[i].length; j++) {
            if (j == 0) {
                string = string + stringArray[i][j].toUpperCase();
            }
            else {
                string = string + stringArray[i][j];
            }
        }
        result = result + string;
    }
    return result.trimStart();
}
console.log(task6("text ttteeexxxtt textxt testtext"));
*/

/*
function task7(quantity, max){
    let array = [];
    for (let i = 0; i < quantity; i++){
        array.push(Math.floor(1 + Math.random() * (max)));
    }
    return array;
}
let array = task7(parseInt(prompt("Enter quantity: ")), parseInt(prompt("Enter max number: ")))
console.log(array);

function rdmInt(min, max){
    return Math.floor(min + Math.random() * (max + 1 - min));
}
function task8(){
    let rdm = rdmInt(0, array.length - 1);
    console.log("index: " + rdm)
    return array.at(rdm);
}
console.log(task8());
*/

/*
function task9(number){
    let a = Math.round(number);
    return number == a;
}
alert(task9(prompt("Enter number: ")))
*/

function task10(a, b){

}