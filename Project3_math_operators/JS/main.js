function addition_Function() { //This targets the element with id "Math" and overwrites Click This!
    var addition = 2 + 2;
    document.getElementById("Math").innerHTML = "2 + 2 = " + addition;
}

function subtraction_Function() { //This targets the element with id "Math2" and overwrites Click This!
    var Subtraction = 5 - 2;
    document.getElementById("Math2").innerHTML = "5 - 2 = " + Subtraction;
}

function multiplication() { //This targets the element with id "Math3" and overwrites Click This!
    var simple_Math = 6 * 8;
    document.getElementById("Math3").innerHTML = "6 x 8 = " + simple_Math;
}

// function division() {
//     var simple_Math = 48 / 6;
//     document.getElementById("Math").innerHTML = "48 / 6 = " + simple_Math;
// }

// function more_Math() {
//     var simple_Math = (1 + 2) * 10 / 2 - 5;
//     document.getElementById("Math").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math;
// }

function modulus_Operator() { //This targets the element with id "Math4" and overwrites Click This!
    var simple_Math = 25 % 6;
    document.getElementById("Math4").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math;
}

// function negation_Operator() {
//     var x = 10;
//     document.getElementById("Math").innerHTML = -x;
// }

function increment_Operator() { //This targets the element with id "Math5" and overwrites Click This!
    var X = 5;
    X++;
    document.getElementById("Math5").innerHTML = (X);
}

function decrement_Operator() {
    var X = 5.25; //This targets the element with id "Math6" and overwrites Click This!
    X--;
    document.getElementById("Math6").innerHTML = (X);
}

// window.alert(Math.random() * 100);
window.alert(Math.pow(15, 2));

