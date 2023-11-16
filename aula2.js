function mediaAritimetica (notas){

    const somaNotas = notas.reduce( (acc, nota) => acc + nota ,0)
    const media = somaNotas / notas.length
    return media;

}

function calcularMediaPonderada (notas, pesos){

    if(notas.length !== pesos.length)
        throw  "O número de pesos deve ser igual ao de notas"

    const somaNotasPonderadas = notas.reduce( (acc, nota,index) => acc + nota * pesos[index],0)
    const  somaPesos = pesos.reduce ((acc, peso)=> acc + peso)
    
    return somaNotasPonderadas / somaPesos

}


const notas = ["a",8,7,8]
const pesos = [1,2,4,6]

console.log (calcularMediaPonderada(notas, pesos))