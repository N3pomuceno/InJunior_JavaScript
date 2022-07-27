function lista(num){
    for (var i = 0; i < num; i++) {
        arrei.push(Math.round(Math.random()*50 + 50))
    }
}


// Criação de array
let arrei = []
lista(5)

arrei.forEach((n) =>{
    console.log(n)
})

for (elem in arrei){
    if (arrei[elem] > 90){
        arrei[elem] = "A"
    } else if (arrei[elem] >= 80){
        arrei[elem] = "B"
    } else if (arrei[elem] > 70){
        arrei[elem] = "C"
    } else if (arrei[elem] > 60){
        arrei[elem] = "D"
    } else { arrei[elem] = "F"}
}

arrei.forEach((n) =>{
    console.log(n)
})