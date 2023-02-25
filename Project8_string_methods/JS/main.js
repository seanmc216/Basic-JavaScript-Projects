function full_sentence() { //Concatenation. The concat() method concatenates two or more strings.
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a  ";
    var part_4 = "complete sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_method() {  //Extracts a section of a string and then returns the extracted section in a new string.
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27, 33);
    document.getElementById("Slice").innerHTML = Section;
}

function string_Method() {  //The toString() method returns a number as a string.
    var X = 172;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function precision_Method() {  //The toPrecision() method formats a number to a specified length.
    var X = 2106.1988;
    document.getElementById("Precision").innerHTML = X.toPrecision(5);
}