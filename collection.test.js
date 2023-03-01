const { sumFunc } = require('./collection')

test('Menambahkan 2 dan 2 seharusnya 4', () => {
    expect(sumFunc(2,2)).toBe(4);
})