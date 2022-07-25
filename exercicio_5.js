let num1 = Math.round(Math.random() *(99)+1);
let num3 = Math.round(Math.random() *(99)+1);
let num2 = Math.round(Math.random() *(99)+1);
let num4 = Math.round(Math.random() *(99)+1);
let num5 = Math.round(Math.random() *(99)+1);
conjunto = [num1, num2, num3, num4, num5];
console.log("Os números inteiros são: "+conjunto);
for(numero of conjunto){
    if (numero % 3 != 0 && numero % 5 == 0){
        console.log(numero, ": Buzz");
        console.log();
    }
    else if(numero % 3 == 0 && numero % 5 != 0){
        console.log(numero, ": Fizz");
        console.log();
    }
    else{
        if (numero % 3 == 0 && numero % 5 == 0){
            console.log(numero, ": FizzBuzz");
            console.log();
        }       
    }
}
