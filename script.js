function fn0(){
    let previous=document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previous + 0;
}
function fn1(){
    let previous=document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previous + 1;
}
 
function fn2(){
    let previous=document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previous + 2;
}
  
function fn3(){
    let previous=document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previous + 3;
}
  
function fn4(){
    let previous=document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previous + 4;
}
  
function fn5(){
    let previous=document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previous + 5;
}
  
function fn6(){
    let previous=document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previous + 6;
}
  
function fn7(){
    let previous=document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previous + 7;
}
  
function fn8(){
    let previous=document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previous + 8;
}
function fn9(){
    let previous=document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previous + 9;
}

function fEraser(){
    let previous=document.getElementById("display").innerHTML;
    let erasePrevious = previous.slice(0, -1); 
    document.getElementById("display").innerHTML = erasePrevious;
}

let firstSave;
let operator;

function add(){
    firstSave = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = "";
    operator = 1;
}
function mn(){
    firstSave = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = "";
    operator = 2;
}
function ml(){
    firstSave = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = "";
    operator = 3;
}
function dv(){
    firstSave = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = "";
    operator = 4;
}
function eq(){
    let secondSave = document.getElementById("display").innerHTML;
    if (operator==1){
        document.getElementById("display").innerHTML = parseInt(firstSave)+parseInt(secondSave);
    }
    else if(operator==2){
        document.getElementById("display").innerHTML = parseInt(firstSave)-parseInt(secondSave);
    }
    else if (operator==3){
        document.getElementById("display").innerHTML = parseInt(firstSave)*parseInt(secondSave);
    }
    else if(operator==4){
        document.getElementById("display").innerHTML = parseInt(firstSave)/parseInt(secondSave);
    }
    else{
        document.getElementById("display").innerHTML = "Invalid";
    }
}
function fClear() {
    document.getElementById("display").innerHTML = "";
    firstSave = "";
    operator = null;
}
  
  

