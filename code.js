// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(name){
    // if (input === "Alex"){
    //     return "Hello, Alex!";
    // } else if (input === "Pat"){
    //     return "Hello, Pat!";
    // }
    // else return "Hello, Jorge!";
    if(typeof name === "string" && isNaN(name)) {
        return ("Hello," + name + "!");
    }else
        return "Hello, World!"

}
function isFive(input) {
return parseFloat(input)=== 5;
}

function isEven(input) {
return input === true;
}

