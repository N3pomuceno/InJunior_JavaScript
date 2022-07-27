function multiplicação(x, n){
    if (n == 0) {
        return 0
    } else {
        return x + multiplicação(x, n - 1)
    }
}


num1 = Math.round(Math.random() *10)
num2 = Math.round(Math.random() *10)

console.log(num1, num2)

console.log(multiplicação(num1, num2))