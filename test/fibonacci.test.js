const fibonacci = require('../funcoes/fibonacci')

test('os 10 primeiros numeros da contagem de fibonacci devem ser corretos', () => {
    expect(fibonacci(10)).toMatch("0 1 1 2 3 5 8 13 21 34");
});
test('os 3 primeiros numeros da contagem de fibonacci devem ser corretos', () => {
    expect(fibonacci(3)).toMatch("0 1 1");
});