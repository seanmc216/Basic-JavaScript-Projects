function my_Dictionary() { //Creates a function called my_Dictionary, with variable names 'Band'
    var Band = {
        Name: "INXS",     //These are the properties of the variable 'Band'
        Country: "Australia",
        Genre: "New_wave",
        Formed: 1977,     //These 2 pairs have identical keys. 
        Formed: 1987,     //The last read key-value paid would get read.
    };
    delete Band.Genre;    //Deletes the Genre property
    document.getElementById("Dictionary").innerHTML = Band.Genre; //Tries to output the Genre property to the element with id "Dictionary" to overwrite 'Click me!'
}