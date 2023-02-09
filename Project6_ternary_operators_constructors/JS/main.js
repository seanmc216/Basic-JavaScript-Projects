function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short" : "You are tall enough";   //? is the ternary operator. If height <52 then 'You are too short' displays, and vv.
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Vote_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are not old enough to vote" : "You can vote!";   //? is the ternary operator
    document.getElementById("Vote").innerHTML = Can_vote;
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;                       //The function "Vehicle()" is an object constructor
    this.Vehicle_Model = Model;                 //The "this" keyword indicates the object that is the owner of the code.
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");   //The 'new' keyword is used to create new objects.
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {                   //This feeds to where 'myFunction' is being called in the HTML, and writes in the location with the id 'Keywords_and_Constructors' the following text: 'Erik drives a mustard coloured Pinto manufactured in 1971.'
    document.getElementById("Keywords_and_Constructors").innerHTML =
        "Erik drives a " + Erik.Vehicle_Color + "-coloured " + Erik.Vehicle_Model +
        " manufactured in " + Erik.Vehicle_Year;
}
function myFunction2() {                //This feeds to where 'myFunction2' is being called in the HTML, and writes in the location with the id 'New_and_This' the following text: 'Jack drives a Red-coloured Viper manufactured in 2020'.
    document.getElementById("New_and_This").innerHTML =
        "Jack drives a " + Jack.Vehicle_Color + "-coloured " + Jack.Vehicle_Model +
        " manufactured in " + Jack.Vehicle_Year;
}

// function Vehicle2(Make, Model, Year, Color) {
//     this.Vehicle_Make = Make;                       //The function "Vehicle2()" is an object constructor, and tries to make use of "this" as a variable name - which is a reserved word. The result is that the whole file fails to work. 
//     this.Vehicle_Model = Model;
//     this.Vehicle_Year = Year;
//     this.Vehicle_Color = Color;
// }
// var this = new Vehicle2("Dodge", "Viper", 2020, "Red");
// function myFunction3() {
//     document.getElementById("Reserved_Word").innerHTML =
//         "This car is " + this.Vehicle_Color;
// }

function count_Function() {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() { Starting_point += 1; }     //The Plus_one() function is the nested function. The addition assignment ( += ) operator adds the value of the right operand to a variable and assigns the result to the variable. 
        Plus_one();
        return Starting_point;
    }
}