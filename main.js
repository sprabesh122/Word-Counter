
// For text-area

let textbox = document.getElementById("textbox");

textbox.addEventListener('input', function(){

    var text = this.value; // text value
    
    let Number_Of_Char = text.length; // getting the length of the text

    // for characters

    document.getElementById("char").innerHTML = Number_Of_Char;

    text = text.trim(); // trim function does not consider the beginning and the end space.

    let words = text.split(" "); // splitting when there is space between two characters.

    // What if there is more than one space in between 2 words or characters.

    let cleanList = words.filter(function(element){

        return element != "";

    });

    let Number_of_words = cleanList.length;

    document.getElementById("word").innerHTML =  Number_of_words;

});