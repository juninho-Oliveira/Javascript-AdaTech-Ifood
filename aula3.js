const listaDeContatos = new Map()

function adicionarContato(id, nome, telefone, email, endereco){
    
    if (listaDeContatos.has(id))
        return "Ja existe um contato com este Id"

    const novoContato = new Map ()
    novoContato.set('nome', nome)
    novoContato.set('telefone', telefone)
    novoContato.set('email', email)
    novoContato.set('endereco', endereco)

    listaDeContatos.set(id, novoContato)

    return "Contato cadastrado com sucesso"

}

function verificarContatoPorId(id){
     return listaDeContatos.has(id) ? "Já existe um contato" : "Contato não consta na lista"
}

function apagarContatoPorId(id){
    return listaDeContatos.delete(id) ? "Contato apagado com sucesso" : "Erro ao apagar o contato"
}

function imprimirContatos(){

    for( let [id, contato] of listaDeContatos)
        console.log(`Id = ${id} e nome = ${contato.get('nome')}`)
}

console.log(adicionarContato(1,"Carlos", "11-15121151", "carlos@carlos.com", "Rua da minha casa, 879"))
console.log(adicionarContato(1,"Carlos", "11-15121151", "carlos@carlos.com", "Rua da minha casa, 879"))

adicionarContato(2,"Bete", "11-15121151", "carlos@carlos.com", "Rua da minha casa, 879")

apagarContatoPorId(2)

adicionarContato(2,"José", "11-15121151", "carlos@carlos.com", "Rua da minha casa, 879")

imprimirContatos()

console.log(verificarContatoPorId(10))

console.log(verificarContatoPorId(2))