const primos = require('../funcoes/primos')

test('', () => {
    expect(primos(13)).toEqual(true);
});
test('', () => {
    expect(primos(10)).toEqual(false);
});
