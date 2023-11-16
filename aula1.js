const myConts = 'banana'

console.log(myConts);

let n1 = 10
let n2 = 10

function myFunction (n1, n2) {
  var numero = 10;
  return (n1 + n2)/ numero ;
  
}
//console.log(numero)
console.log(myFunction(n1,n2));

let customer = {
  name: "julio",
  idade: 39,
  peso: 75,
  daySH: new Date ("24-02-1998 00:00:00 GMT-0300")
}

console.log(customer)



function media(nota1, nota2, nota3, nota4) {
  return (nota1+nota2+nota3+nota4)/4;
}
//(1,2,4,6)
function MediaPonderada (n1, n2, n3,n4) {
  let ponderada = n1*1 + n2*2 + n3*4 + n4*6
  let pesos = 1+2+4+6
  return ponderada/pesos
}


console.log(media(10,9,8,7))
console.log(MediaPonderada(10,9,8,7))



//Faça uma função que receba um array de number e retorne a media da notas do aulonos
const notas = [10,9,8,7]
const pesos = [1,2,4,6]

function somaDaMedia () {
    const media = notas.reduce((acumulador, elemento)=> acumulador + elemento ,0 )
    return media/notas.length
}

console.log(somaDaMedia(notas))

//Agora faça uma função que calcule a media ponderada 
function calculoPonderada (notas, pesos) {
  const ponderada = notas.map((elemento, index) => elemento * pesos[index])

  const somaDaPesos = ponderada.reduce((acumulador, elemento)=> acumulador + elemento , 0 )

  const somaPeso = pesos.reduce((acumulador, elemento) => acumulador + elemento)

  //console.log(ponderada)
  //console.log(somaPeso)

  return somaDaPesos/somaPeso

}

console.log(calculoPonderada(notas,pesos))




const cidadeMap = new Map();

cidadeMap.set('nome', 'São Paulo');
cidadeMap.set('UF', 'SP');
cidadeMap.set('populacao', 123456789);
////////////////////////////////////////////////////////
const cidadeObj = {
  nome: 'São Paulo',
  UF: 'SP',
  populacao: 123456789,
}

console.log(cidadeObj)

console.log(cidadeMap)



const lista = new Map();

function addContato(id, nome, telefone, email, endereco) {
    if(lista.has(id)) { //  has: Ele retorna um booleano(se o elemento passado é true ou false)
        console.log('Este ID já existe na lista.');
    } else {
        lista.set(id, {nome, telefone, email, endereco});
        console.log('Contato adicionado!');
    }
}

addContato(1, 'junior', 1198565868, 'junior@teste.com', 'testerua')
addContato(2, 'teste', 1234567891, 'j@teste.com2', 'teste2')
addContato(1, 'junior', 1198565868, 'junior@teste.com', 'testssserua')
lista.set(3 ,{ nome:'julio', telefone: 1234567891, email: 'julio@teste.com', endereco: 'ruatestando'})

function apagarContato(id) {
      lista.delete(id);
      console.log('Contato apagado com sucesso!');
}

function listaNomes () {
  for (const [key, value] of lista ) {
  console.log(`Id = ${key} Nome ${value.nome}`)
  }
}

apagarContato()
console.log(listaNomes())



*/

/*
declare uma lista de map que armazene varios lista cada contato deve conter os campos
(nome, telefone, email, endereço), use um id como chave. 
crie as função com as seguintes resposabilidades cada uma. 
-adicionar um novo contato na lista.
-verificar se o contato já existe através do id 
-apagar um contato da lista através do id
-imprimir id e nome do contato de toda a lista


let contatos = [
  {id: 1, nome: 'junior oliveira',  telefone: 1198565868, email: 'junior@teste1.com', endereco: 'testerua1'},
  {id: 2, nome: 'dj oliveira',      telefone: 1234567891, email: 'junior@teste2.com', endereco: 'testerua2'},
];

console.log('sem alteração', contatos)

function adicionaContato(id, nome, telefone, email, endereco) {
  for (let i = 0; i < contatos.length; i++) {
    if (id === contatos[i].id) {
      console.log('Esse contato já existe!');
      return;
    }
  }
  contatos.push({id, nome, telefone, email, endereco});
  console.log('Contato adicionado');
}

adicionaContato(3, 'teste5 oliveira', 1234567891,  'junior@teste4.com', 'testerua4')
adicionaContato(4, 'teste5 silva', 1234567891,  'junior@teste4.com', 'testerua4')
adicionaContato(4, 'teste5 silva', 1234567891,  'junior@teste4.com', 'testerua4')
console.log('já alterado ', contatos)

function verificaContato(nome) {
  for (let i = 0; i < contatos.length; i++) {
    if (nome === contatos[i].nome) {
      console.log('O contato existe.');
      return;
    }
  }
  console.log('O contato não existe.');
}

verificaContato(1,'teste5 oliveira')

function apagaContato(id) {
  for (let i = 0; i < contatos.length; i++) {
    if (id === contatos[i].id) {
      contatos.splice(i);
      console.log('Contato apagado com sucesso!');
      return;
    }
  }
  console.log('O contato não existe.');
}


apagaContato(4)

function imprimirContatos() {
  for (let i = 0; i < contatos.length; i++) {
    console.log(`ID: ${contatos[i].id}, Nome: ${contatos[i].nome}`);
  }
}

/*function imprimirContatos() {
  contatos.forEach(
    contatos => console.log(`ID: ${contatos[i].id}, Nome: ${contatos[i].nome}`)
  )
  
}

imprimirContatos()


const n1 = [1,2,3]
let n2 = 0
for (const n3 of n1){
  n2 = n1
  console.log(n2)
}
console.log('-----------------')
for (const n3 in n1){
  n2 = n1.length
  console.log(n2)
}



