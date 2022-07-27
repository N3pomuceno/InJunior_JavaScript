// Funções
function impressao(numero){
    console.log(numero);
}

function troca(vet){
    let j = 0
    while (j < arrei.length) {
        if (arrei[j] > arrei[j+1]){
            let temp = vet[j];
            vet.splice(j, 1);
            vet.push(temp);            
            j=0
        } 
        else {
            j+=1
        }
    } 
}

function lista(num){
    for (var i = 0; i < num; i++) {
        arrei.push(Math.round(Math.random()*99 + 1))
    }
}


// Criação de array
let arrei = []
lista(10)

// Impressão
console.log("Array desorganizado:")
arrei.forEach(impressao);

// Ordenação
troca(arrei)

// Impressão
console.log("Array organizado:")
arrei.forEach(impressao);