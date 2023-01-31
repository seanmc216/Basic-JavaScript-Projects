document.write("Hello, world! ");

var A = "This is a string"; //Assign a string value to a variable
window.alert(A); //Display the variable

document.write("\"Be who you are and say what you feel, " + "because those who mind don\'t matter and those who matter don\'t mind.\""); //Escaping an apostrophe and concatenation.

var B = " Mars " + "ice cream. "
document.write(B);
document.write(A + B);

var Country = "USA", National_Park = "Zion", Beach = "Big Sur", Island = "Catalina Island"; Landmark = "Golden Gate Bridge";
document.write(Beach + " "); //Assign multiple variables in one statement.

//Assign colors to all variables using str.fontcolor() method:
var Country = Country.fontcolor("blue");
document.write(Country + " ");
var National_Park = National_Park.fontcolor("blue");
document.write(National_Park + " ");
var Beach = Beach.fontcolor("blue");
document.write(Beach + " ");
var Island = Island.fontcolor("blue");
document.write(Island + " ");
var Landmark = Landmark.fontcolor("blue");
document.write(Landmark + " ");

document.write(21 * 6); //A statement containing an expression.

function myFunction(p1, p2) {
    return p1 * p2;
}
document.getElementById("demo").innerHTML = myFunction(4, 3);
document.getElementById("demo").style.color = "red";

