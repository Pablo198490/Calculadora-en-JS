/*
//FUNCIONES


function mensaje (){
    return 'Mensaje';
}

var msj = mensaje();
console.log(msj);



function sumar (a, b, c) {
    return a + b + c;
}

var resultado = sumar (3, 2, 4);
console.log(resultado);



//FUNCIONES RECURSIVAS

function factorial (n){
   if((n === 0) || n === 1)
     return 1;
   else
     return(n * factorial(n - 1));
}

console.log(factorial(5));



//ARRAYS

var nombres = ['Luis', 'Carlos', 'Luisa'];
var vegetales = new Array('Tomate', 'Lechuga', 'Zanahoria');

console.log(nombres[2]);
console.log(vegetales[1]);

console.log(nombres.length);
for(i = 0; i <= nombres.length -1; i++){
    console.log(nombres[i]);
}

vegetales.forEach (function(elemento, indice){
    console.log(elemento, indice);
});



console.log(nombres);
nombres.push('Pedro');
console.log(nombres);
nombres.unshift('Lili');
console.log(nombres);
nombres.pop();
console.log(nombres);
nombres.shift();
console.log(nombres);

var pos = nombres.indexOf('Carlos');
console.log(pos);

nombres.splice(1,2);
console.log(nombres);


*/