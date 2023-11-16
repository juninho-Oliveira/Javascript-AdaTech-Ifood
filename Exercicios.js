//1- Verificação de idade: Crie um programa que peça ao usuário para inserir a sua idade e verifique se ele é menor de idade, adulto ou idoso.

function verifique(idade) {
    if (idade == 1 || idade <= 17) {
        return `Você ainda é menor de idade sua idade é: ${idade}`
    } else if (idade == 18 || idade <= 48) {
        return `Você já é um adulto sua idade é: ${idade}`
    } else {
        return `Você já é idoso sua idade é: ${idade}`
    }
}

console.log(verifique(49))

//2- Comparações de números: Crie um programa que peça ao usuário para inserir dois números e diga qual deles é maior, ou se são iguais.

const number1 = 40;
const number2 = 60;
function Comparaçao(number1, number2) {
    if (number1 > number2) {
        return `O primeiro numero: ${number1} é maior que o segundo: ${number2} `
    } else if (number1 === number2) {
        return `Os numeros digitados tem o mesmo valor numero-1: ${number1}, numero-2: ${number2}`
    } else {
        return `O segundo numero: ${number2} é maior que o primeiro: ${number1} `
    }
}

console.log(Comparaçao(number1, number2))


//3- Verificação de divisibilidade: Crie um programa que peça ao usuário para inserir dois números e verifique se o primeiro número é divisível pelo segundo.

const number1 = 10;
const number2 = 2;


function Verificacao () {
    if (number1 % number2 === 0) {
        return `sim o primeiro numero: ${number1} é divisivel pelo segundo numero: ${number2}`
    } else {
        return `não é divisivel o primeiro numero: ${number1} pelo segundo numero: ${number2}`
    } 
}

console.log (Verificacao(number1,number2))


//4- Verificação de temperatura: Crie um programa que peça ao usuário para inserir uma temperatura e verifique se está frio, agradável ou quente.



function clima (tempeRatura) {
    if (tempeRatura <= 18){
        return `Está frio ${tempeRatura} C`
    } else if (tempeRatura === 19 || tempeRatura <= 37.6){
        return `Está agradavel o clima hoje ${tempeRatura} C`
    } else {
        return `Está muito quente ${tempeRatura} C`
    }
}

console.log (clima(37.7)) 



//5- Verificação de notas: Crie um programa que peça ao usuário para inserir sua nota em uma prova e imprima se ele foi aprovado ou reprovado (considerando que a nota mínima para aprovação é 7).

const user = 6.9;
function nota (user) {
    if (user >= 7) {
        return `Parabéns você foi aprovado sua nota é: ${user}`
    }else {
        return `Reprovado a media para passar nessa prova é 7 e sua nota foi: ${user}`
    }  
}

console.log(nota(user))


//6- Impressão dos números de 1 a 10: Crie um programa que imprima os números de 1 a 10.

const array = [1,2,3,4,5,6,7,8,9,10]

for (let i =0; i < array.length; i++) {
    console.log(array[i])
}

//7- Cálculo do fatorial de um número: Crie um programa que peça ao usuário para inserir um número e calcule o fatorial desse número.

let numero = 6 //prompt("Por favor, insira um número para calcular o fatorial:");
let fatorial = 1;

for(let i = 2; i <= numero; i++) {
    fatorial *= i;
}

console.log(`O fatorial de ${numero} é ${fatorial}.`);



//8- Contagem regressiva: Crie um programa que faça uma contagem regressiva de 10 até 1.

let contador = 10; // Iniciar a contagem em 10

while (contador > 0) {
    console.log(contador);
    contador = contador - 1;
}


//9- Tabuada de um número: Crie um programa que peça ao usuário para inserir um número e imprima a tabuada desse número.



let numero = 10//prompt("Por favor, insira um número:");
for(let i = 1; i <= 10; i++) {
    console.log(numero + " * " + i + " = " + numero * i);
}




//10- Soma dos números em uma lista: Crie um programa que some todos os números em uma lista.

// Definindo uma função chamada somaLista
function somaLista(lista) {
    // Inicializando a variável soma com 0
    var soma = 0;
    // Loop para percorrer todos os elementos da lista
    for(var i = 0; i < lista.length; i++) {
        // Adicionando o valor atual da lista à variável soma
        soma += lista[i];
    }
    // Retornando a soma após o loop
    return soma;
}

// Definindo uma lista de números
var minhaLista = [1, 2, 3, 4, 5];
// Chamando a função somaLista com minhaLista como argumento e imprimindo o resultado no console
console.log(somaLista(minhaLista)); // Saída: 15


let array = [ 'testando']

let array2 = [ 't','e','s','t','a','n','d','o']

console.log(array.length);

console.log(array2.length);

let arrayOriginal = [1,2,3]

let novoArray = arrayOriginal.map (function(elementos) {
    return elementos *2;
})

console.log(novoArray)

let arrayOriginal = [1,2,5,6]

const result = arrayOriginal.reduce (function(acumulador, elemento) {
    return acumulador + elemento
},0)

console.log(result)


const array2 = [1,2,3,4,5,6,7,8,9,10]

const result2 = array2.filter((element)=>{
    if (element % 2 == 0) {
        return true
    }else {
        return false
    }
}) 

const result2 = array2.filter((element)=>element % 2 == 0) 

console.log(result2)


const precos = [ 
    "Crédito",
    "R$ 200",
    "R$ 400",
    "Contas a Pagar",
    "R$ 300",
    "R$ 400",
    "Meus dados",
  ]
  
  const preco = precos.filter((elemento)=> elemento.includes("R$") )
  console.log(preco)
  
  const precoNumeros = preco.map((preco)=> Number(preco.replace("R$ ", '')))
  console.log(precoNumeros)
  
  
  const total = precoNumeros.reduce ((acc, elemento)=> acc + elemento)
  console.log(total)
 
  
  //1-Cálculo de média: Escreva uma função em JavaScript que aceite uma lista de números e retorne a média deles. Por exemplo, para a lista [1, 2, 3, 4, 5], a média é (1+2+3+4+5)/5 = 3.
  const quantidadeDeNotas = [1,2,3,4,5]
  const notas = [1, 2, 3, 4, 5];
  
  
  
  function Media() {
  
    if (notas.length === quantidadeDeNotas.length) {
      const somaDasNotas = notas.reduce((acc, item)=> acc + item / quantidadeDeNotas.length,0)
      return somaDasNotas
    }
      return "Erro"
  }
  
  console.log(Media(notas))
  
  
  //2-Fatorial: Escreva uma função em JavaScript que aceite um número inteiro positivo e retorne o fatorial desse número. O fatorial de um número n é o produto de todos os números inteiros positivos de 1 a n. Por exemplo, o fatorial de 5 (denotado como 5!) é 12345 = 120.

let numero = 5 
let fatorial = 1;

function somaFatorial (numero, fatorial) {
    for(let i = 2; i <= numero; i++) {
        fatorial *= i;
    }
    return fatorial
}

console.log(somaFatorial(numero, fatorial))

//3-Sequência de Fibonacci: A sequência de Fibonacci é uma série de números em que cada número é a soma dos dois anteriores. Os primeiros dois números da sequência de Fibonacci são 0 e 1, e cada número subsequente é a soma dos dois anteriores. Escreva uma função em JavaScript que aceite um número n e retorne o n-ésimo número na sequência de Fibonacci.
const n = 10;
function fibonacci(n) {
    if (n <= 0) {
      return "O valor de entrada deve ser um número positivo.";
    } else if (n === 1) {
      return 0;
    } else if (n === 2) {
      return 1;
    } else {
      let a = 0;
      let b = 1;
      for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
      }
      return b;
    }
  }

  console.log(fibonacci(n))
  */

/*fImplemente uma função que receba três array de mesmo tamanho com parametro 
A sua função deve retorna um novo array no qual cada item é umsa frase desejando um bom dia 
para a pessoa seguindo o seguinte modelo:

"Olá pronome nome sobrenome, tenha uma bom dia!"
*/
const pronome = [
    {nome: 'Srta', idade: 25}, 
    {nome: 'junior', idade: 25}, 
    {nome: 'Studio', idade: 25}, 
];

let pessoas = pronome.find((pessoa)=> {
    return pessoa.nome === 'Srta'
})
console.log(pessoas)

for(i=0; i < pronome.length; i ++) {
    console.log(`nomes ${pronome[i].nome}, idade: ${pronome[i].idade}`)
}