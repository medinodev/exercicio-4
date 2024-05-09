function contagem(vetor) {
    let numerosInteiros = 0;

    for (let i = 0; i < vetor.length; i++) {
        if (Number.isInteger(vetor[i])) {
            numerosInteiros++;
        }
    }

    return numerosInteiros;
}

module.exports = contagem;