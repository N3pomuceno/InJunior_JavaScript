// Funções

function criador(l,c){
    mat = []
    for (var i = 0; i < l; i++){
        novaLinha=[]
        for (var j = 0; j < c; j++){
            novaLinha.push(Math.round(Math.random()*20 - 10))
        }
        mat.push(novaLinha)
    }
    return mat
}

function operador(mA,mB,lA,cB,lB){
    mat = []
    for (var i = 0; i < lA; i++){
        novaLinha=[]
        for (var j = 0; j < cB; j++){
            numero=0;
            for (var k = 0; k < lB; k++){
                numero+= mA[i][k]*mB[k][j]
            }
            novaLinha.push(numero)
        }
        mat.push(novaLinha)
    }
    return mat
}
    


function mostrar(vetMat){
    for (linha of vetMat) {
        console.log(linha)
    } 
    console.log()
}



// Formação de matrizes
// Matriz A 
let linA = 2    /*Math.round(Math.random()*4 + 1);*/
let colA = 2   /*Math.round(Math.random()*4 + 1);*/
matA = criador(linA, colA);

// Matriz B 
let linB = colA;      
let colB = 2    /*Math.round(Math.random()*4 + 1);*/
matB = criador(linB, colB);

// Impressão de matrizes
mostrar(matA);
mostrar(matB);

// Multiplicação de matrizes
matC = operador(matA, matB, linA, colB, linB);


// Impressão de matriz
mostrar(matC);