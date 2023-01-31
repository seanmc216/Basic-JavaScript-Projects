function myFunction() { //Defining a function and naming it
    var str = "This text is green!"; //Defining a variable and giving it a string value
    var result = str.fontcolor("green");
    document.getElementById("Green_Text").innerHTML = result; //Putting the value of result into HTML element with "Green_Text" id
}
