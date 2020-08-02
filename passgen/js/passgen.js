var keyList = "abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*";
var temp = "";

function generatePass(plength) {
     var i;
    temp = "";
    for(i = 0; i < plength; i++) {
        temp += keyList.charAt(Math.floor(Math.random() * keyList.length));
    }
    return temp;
}

function populateForm() {
    
    length = document.getElementById("length").value;
    
    document.passgen.output.value = generatePass(length);
}