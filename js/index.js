function add_the_num(){
    var number1= parseInt(document.getElementById("num1").value) ;
    var number2= parseInt(document.getElementById("num2").value) ;
    var result= number1+number2 ;
        document.getElementById('show-result').innerHTML=`<h2> Addition of  ${number1} and ${number2} is ${result}</h2>`
}
function sub_the_num(){
    var number1= parseInt(document.getElementById("num1").value) ;
    var number2= parseInt(document.getElementById("num2").value) ;
    var result= number1-number2 ;
        document.getElementById('show-result').innerHTML=`<h2> subtraction of  ${number1} and ${number2} is ${result}</h2>`
}
function multiply_the_num(){
    var number1= parseInt(document.getElementById("num1").value) ;
    var number2= parseInt(document.getElementById("num2").value) ;
    var result= number1*number2 ;
        document.getElementById('show-result').innerHTML=`<h2> multiply of  ${number1} and ${number2} is ${result}</h2>`
}
function divide_the_num(){
    var number1= parseInt(document.getElementById("num1").value) ;
    var number2= parseInt(document.getElementById("num2").value) ;
    var result= number1/number2 ;
        document.getElementById('show-result').innerHTML=`<h2> divide of  ${number1} and ${number2} is ${result}</h2>`
}