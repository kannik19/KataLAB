const calc = require('./calc');
const numberlist = [6, 9, 15, -2, 92, 11]

test('min', () => {
    let i, minimum;
    for (i = 0; i < numberlist.length; i++) {
        if (i == 0) {
            minimum = numberlist[0];
        }
        if (numberlist[i] <= minimum) {
            minimum = numberlist[i];
        }
    }
    let result = minimum;
    let result2 = calc.min(result);
    expect(calc.min(result2)).toBe(minimum);
})

test('max', () => {
    let i, maximum;
    for (i = 0; i < numberlist.length; i++) {
        if (i == 0) {
            maximum = numberlist[0];
        }
        if (numberlist[i] >= maximum) {
            maximum = numberlist[i];
        }
    }
    let result = maximum;
    let result2 = calc.max(result);
    expect(calc.max(result2)).toBe(maximum);
})

test('count', () => {
    let result = numberlist.length;
    let result2 = calc.count(result);
    expect(calc.count(result2)).toBe(result);
})

test('average', () => {
    let i, average = 0;
    for (i = 0; i < numberlist.length; i++) {
        average = average + numberlist[i];
    }
    let result = average / numberlist.length;
    console.log(average);
    let result2 = calc.avg(result);
    expect(calc.avg(result2)).toBe(result);
})