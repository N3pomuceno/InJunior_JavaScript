// 3 Valores aleatórios de nota.
let nota1 = Math.round(Math.random() *10)
let nota2 = Math.round(Math.random() *10)
let nota3 = Math.round(Math.random() *10)
console.log("Com as notas:", nota1, nota2, nota3)
console.log((nota1+ nota2+ nota3)/3 >= 6 ? "Aprovado": "Reprovado");
