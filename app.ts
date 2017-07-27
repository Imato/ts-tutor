// app.ts

function addValue(htmlId: string, name: string, value){
    document.getElementById(htmlId).innerHTML += name + ": " + value;
}

// Basic Types

let htmlId: string = "basicTypes";

let isDone: boolean = false;
addValue(htmlId, "isDone", isDone);


