// const myConst = "banana1233";

// let result = 10 *361

// console.log(myConst)
// console.log(result)

// function minhaFuncao(parametro1, parametro2 = 10, parametro3 = 30){

//     const myConst2 = "Melancia"

//     let myVar = 10;

//     return parametro1 * parametro2 * parametro3

// }


// let customer = {
//     name : "Carlao",
//     idade: 39,
//     dateOfBirth : new Date("1984-06-18 00:00:00 GMT-0300")
// }


// console.log(customer)

// console.log(minhaFuncao(56.3298))

// Função para calcular a média das notas dos alunos
function calcularMedia(n1, n2, n3, n4) {
    const soma = n1 + n2 + n3 + n4;
    const media = soma / 4;
    return media;
}
  
  // Função para calcular a média ponderada das notas dos alunos
  function calcularMediaPonderada(n1, n2, n3, n4) {
    const peso1 = 1, peso2 = 2, peso3 = 4, peso4 = 6;
    const somaProdutos = n1 * peso1 + n2 * peso2 + n3 * peso3 + n4 * peso4;
    const somaPesos = peso1 + peso2 + peso3 + peso4;
    const mediaPonderada = somaProdutos / somaPesos;
    return mediaPonderada;
  }
  
  // Exemplo de uso:
  const n1 = 8,
    n2 = 7,
    n3 = 6,
    n4 = 9;
  console.log("Média: " + calcularMedia(n1, n2, n3, n4));
  console.log("Média Ponderada: " + calcularMediaPonderada(n1, n2, n3, n4));
  


  console.log( 100 - "a")

  const array = [1,2,5,6];
  const arrayX = [10,20,50,60];

const result = array.reduce(function (acumulador, elemento,index){
    elemento2  = arrayX[index]
    console.log(elemento2)
  return acumulador + elemento * elemento+elemento2
},0)

console.log(result)



const array2 = [1,2,3,4,5,6,7,8,9,10]

const result2 = array2.filter( (elemento)=> elemento % 2 === 0)

console.log(result2)

result2.forEach((elemento)=> {

  elemento *= 2

  console.log(elemento)
})

console.log(result2)