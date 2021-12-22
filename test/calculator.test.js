const Calculator = require('../src/calculator');


test('defines value', () => {
    const calculator = new Calculator();
    expect(calculator.value).toBe(0);

    calculator.set(10);
    expect(calculator.value).toBe(10);

    calculator.set(5);
    expect(calculator.value).toBe(5);
})

test('clear', () => {
    const calculator = new Calculator();
    calculator.set(10);
    expect(calculator.value).toBe(10);

    calculator.clear();
    expect(calculator.value).toBe(0);
})

describe('add', () => {
    test('add', () => {
        const calculator = new Calculator();
        calculator.add(1);
        expect(calculator.value).toBe(1);
        calculator.add(10);
        expect(calculator.value).toBe(11);
    })

    test('can`t be bigger than 100', () => {
            const calculator = new Calculator();
            calculator.add(100);
            expect(calculator.value).toBe(100);
            expect(() => calculator.add(1)).toThrow('Value can not be greater than 100');
    })
})

test('subtract', () => {
    const calculator = new Calculator();
    expect(calculator.value).toBe(0);
    calculator.subtract(10);
    expect(calculator.value).toBe(-10);
})

test('multiply', () => {
    const calculator = new Calculator();
    calculator.set(10);
    calculator.multiply(2)
    expect(calculator.value).toBe(20);
})

test('multiply', () => {
    const calculator = new Calculator();
    calculator.set(10);
    calculator.divide(2)
    expect(calculator.value).toBe(5);
})