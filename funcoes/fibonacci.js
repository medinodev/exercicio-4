function fibonacci(entrada){    
    let primeiro = 0;
    let segundo = 1;
    var sequenciaDeNumeros = '0 1';

    for (let x = 0; x < entrada - 2; x++) {
        let soma = primeiro + segundo;
        sequenciaDeNumeros += " " + soma;
        let aux = soma;
        primeiro = segundo;
        segundo = soma;
    }

    return sequenciaDeNumeros;
}

module.exports = fibonacci;