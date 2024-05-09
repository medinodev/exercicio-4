const contagem = require('../funcoes/contagem');

test('Contagem de números inteiros em um vetor com apenas inteiros', () => {
    expect(contagem([1, 2, 3, 4, 5])).toEqual(5);
});

test('Contagem de números inteiros em um vetor com mistura de inteiros e decimais', () => {
    expect(contagem([1, 2, 3, 4.5, 5.5, 6])).toEqual(4);
});