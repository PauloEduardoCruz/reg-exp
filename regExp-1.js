const regExp1 = /paulo/g 


const x = `Executa umaaaaaaaaaaaaa pesquisa em uma string usando um padrão de 
            expressão regular e retorna uma matriz contendo os resultados dessa pesquisa.`


console.log(x.replace(/(Uma+)/gi, function(input){
    return ' # ' + input.toUpperCase() + ' # '
}))


const dados = [
    "foto",
    "Dale",
    "Chama"
]

//console.log(dados)

for (const dado of dados) {
    console.log(dado)
}


