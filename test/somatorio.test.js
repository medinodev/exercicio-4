const somatorio = require('../funcoes/somatorio');

test('Soma de 120 e 50 deve ser igual a 170', () => {
    expect(somatorio([120, 50])).toEqual(170);
});

test('Soma dos números [1, 2, 3, 4, 5, 6] deve ser igual a 21', () => {
    expect(somatorio([1, 2, 3, 4, 5, 6])).toEqual(21);
});