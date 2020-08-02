////
////var typed = new Typed('.blink', {
////  strings: ["Eter a TODO", "Enter a TODO"],
////  typeSpeed: 30
////});
//
//$(function(){
//    $(".blink").typed({
//  strings: ["Eter a TODO", "Enter a TODO"],
//  typeSpeed: 30});
//});

import Typed from 'typed.js';

var options = {
  strings: ['<i>First</i> sentence.', '&amp; a second sentence.'],
  typeSpeed: 40
};

var typed = new Typed('.blink', options);




var addbtn = document.getElementById("add");
var removeall = document.getElementById("removeall");
var list = document.getElementById("list");


removeall.onclick = function() {
    list.innerHTML = " ";
}

addbtn.onclick = function(){
    addlis(list);
    document.getElementById("userinput").value = " ";
    document.getElementById("userinput").focus();
    
}

function addlis(targetUl){
    
    var inputText = document.getElementById("userinput").value;
    var li = document.createElement("li");
    var textNode = document.createTextNode(inputText + " ");
    var removeButton = document.createElement("button");
    
    if( inputText === " ") {
        alert("please enter a todo");
    }
    else{
        removeButton.className = "btn btn-xs btn-danger";
        removeButton.innerHTML = " &times; ";
        removeButton.setAttribute("onclick", " removeMe(this) ");
        
        li.appendChild(textNode);
        li.appendChild(removeButton);
        targetUl.appendChild(li);
    }
    
}

function removeMe(item){
    var p = item.parentElement;
    p.parentElement.removeChild(p);
}

