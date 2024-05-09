const mdc = require('../funcoes/mdc')

test('', () => {
    expect(mdc(120,50)).toEqual(10);
});
test('', () => {
    expect(mdc(12,9)).toEqual(3);
});