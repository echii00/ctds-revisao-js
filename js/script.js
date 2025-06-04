// var num1 = Number(document.getElementById('valor1').value);
// var num2 = Number(document.getElementById('valor2').value);

function somar(){
    var num1 = Number(document.getElementById('valor1').value);
    var num2 = Number(document.getElementById('valor2').value);

    document.getElementById('resultado').innerHTML=(`a soma é ${num1+num2}`);
}


function subtrair(){
    var num1 = Number(document.getElementById('valor1').value);
    var num2 = Number(document.getElementById('valor2').value);

    document.getElementById('resultado').innerHTML=(`a subtração é ${num1-num2}`);

}



function dividir(){
    var num1 = Number(document.getElementById('valor1').value);
    var num2 = Number(document.getElementById('valor2').value);

    document.getElementById('resultado').innerHTML=(`a divisão é ${num1/num2}`);
   
}



function multiplicar(){
    var num1 = Number(document.getElementById('valor1').value);
    var num2 = Number(document.getElementById('valor2').value);

    document.getElementById('resultado').innerHTML=(`a multiplicação é ${num1*num2}`);

   
}






//função return




// function somar(a,b){
//     return a+b;
// } 
// let som2= somar(5, 3);
// console.log(som2);


// function subtrair(a,b){
//     return a-b;
// } 
// let sub2= subtrair(5, 3);
// console.log(sub2);



// function multiplicar(a,b){
//     return a*b;
// } 
// let mult2= multiplicar(5, 3);
// console.log(mult2);



// function dvidir(a,b){
//     return a/b;
// } 
// let div2= dvidir(5, 3);
// console.log(div2);