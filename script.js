"use strict";

const runButton = document.querySelector("[data-run]");
const textAreaElem = document.querySelector("[data-userInput]");
const consoleOutput = document.querySelector("[data-consoleOutput]");
const output = document.querySelector("[data-output]");

let isThemeBlack = true ;

function runScript(){
    let userInput = textAreaElem.value;
    if(!userInput) { 
        alert("Empty field");
        return;
    }
    let userFunc = new Function(`${userInput}`);

    try{
        consoleOutput.innerHTML = "";
        userFunc(); 
    }
    catch(err){
        
        console.log(err);
        consoleOutput.style.color = "#FF2800"
        consoleOutput.innerHTML = err;
    }
}
window.onload = function(){
    textAreaElem.value = `const output = document.querySelector("[data-output]");

//Try to change the output value and run the snippet;
output.value = "Hello World";
    `
}

runButton.addEventListener("click",runScript);
