// var X = 10;       //Declaring a global variable
// function Add_numbers_1() {
//     document.write(20 + X + "<br>");
// }
// function Add_numbers_2() {
//     document.write(X + 100);
// }
// Add_numbers_1();
// Add_numbers_2();

function Add_numbers_1() {    //Declaring a local variable
    var X = 10;
    // document.write(20 + X + "<br>");
    console.log(15 + X);
}
function Add_numbers_2() {
    // document.write(X + 100);
    console.log(X + 100);
}
Add_numbers_1();
Add_numbers_2();

function get_Date() {           //If the time is <1800, you get asked "How are you today?"
    if (new Date().getHours() < 18) {
        document.getElementById("Date").innerHTML = "How are you today?";
    }
}

function Acft_type() {          //A simple If statement
    if (319 < 321) {
        document.getElementById("acft").innerHTML = "The 319 is smaller than the 321.";
    }
}

function Temperature_Function() {       //An Else statement
    Temperature = document.getElementById("Temperature").value;
    if (Temperature >= 27) {
        Result = "Yes it's warm in Singapore.";
    }
    else {
        Result = "It's probably warmer than that.";
    }
    document.getElementById("Temperature_Singapore").innerHTML = Result;
}

function Time_function() {          //An Else If statement
    var Time = new Date().getHours();   //Pulls the time from your computer
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It is the afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}