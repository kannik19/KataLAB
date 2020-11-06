const converter = require('./converter');
let currency, result, sum = currency / 30.52;

test('Integer convert currency from Thai baht to US dollar.', () => {
    currency = 50000;
    sum = currency / 30.52;
    result = converter(currency);
    expect(result).toBe("$" + sum.toFixed(2));
})

test('Float convert currency from Thai baht to US dollar.', () => {
    currency = 0.5;
    sum = currency / 30.52;
    result = converter(currency);
    expect(result).toBe("$" + sum.toFixed(2));
})

test('-1', () => {
    currency = -1;
    result = converter(currency);
    expect(result).toEqual(currency);
})