document.write(typeof 1988); //Displays the type of '1988'

function my_Function() {     //This will display 'NaN' (Not a Number)
    document.getElementById("Test").innerHTML = 0 / 0;
}

function my_Function2() {    //This will display true because 'This is a string' is not a number
    document.getElementById("Test2").innerHTML = isNaN('This is a string');
}

function my_Function3() {    //This will display false because '007' is a number
    document.getElementById("Test3").innerHTML = isNaN('007');
}

function my_Function4() {    //Display a number > than the maximum floating point number
    document.getElementById("Test4").innerHTML = 3E310;
}

function my_Function5() {    //To display -Infinity, write any negative number that is -1.7976931348623157E308 or lower, such as -3E310
    document.getElementById("Test5").innerHTML = -3E310;
}

document.write(10 > 2);     //This output would be true
document.write(10 < 2);     //This output would be false

console.log(23 + 13);

function string_And_Number() {
    document.getElementById("stringAndNumber").innerHTML = ("10" + 5);
}
//“Type coercion” in JavaScript is when the operands of an operator are different data types (such as “string” and “number” – like: “five” + 5).
//This would return 105 in the browser (it would tack “5” onto the string “10”). This is mentioned here because in many other programming languages (without type coercion) using two different data types within an operation would return an error.

console.log(18 > 26);      //False

function double_Equal() {
    document.getElementById("dbEql").innerHTML = (10 == 10);
}

console.log(10 == 10);     //True   
console.log(3 == 11);      //False

X = 10;                    //True as X and Y are the same data type and value. 
Y = 10;
console.log(X === Y);

A = 'A';                   //False as A and B are different data type and value.
B = 13;
console.log(A === B);

function triple_Equal() {
    let C = '10';                  //False as they are a different data type.
    let D = 10;
    document.getElementById("trpEq").innerHTML = (C === D);
}

E = 10;                    //False as same data type but different value.
F = 14;
console.log(E === F);

function and_Function() {
    document.getElementById("AND").innerHTML = (5 > 2 && 16 > 8);
}

function or_Function() {
    document.getElementById("OR").innerHTML = (5 > 2 || 16 > 8);
}

console.log(5 > 2 && 16 > 8);    //Will log as true
console.log(5 < 2 && 16 > 8);    //Will log false
console.log(5 > 2 || 16 > 18);   //Will log true
console.log(5 < 2 || 16 < 8);    //Will log false;

function not_Function() {
    document.getElementById("Not").innerHTML = !(5 > 10);  //True
}

function not_Function2() {
    document.getElementById("Not2").innerHTML = !(20 > 10);  //False
}