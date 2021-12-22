const Calculator = require('../src/calculator');


describe('Calculator', () => {
    let calculator;
    beforeEach(() => {
        calculator = new Calculator();
    })
    it('defines value', () => {
        expect(calculator.value).toBe(0);
    
        calculator.set(10);
        expect(calculator.value).toBe(10);
    
        calculator.set(5);
        expect(calculator.value).toBe(5);
    })
    
    it('clear', () => {
        calculator.set(10);
        expect(calculator.value).toBe(10);
    
        calculator.clear();
        expect(calculator.value).toBe(0);
    })
    
    describe('add', () => {
        it('add', () => {
            calculator.add(1);
            expect(calculator.value).toBe(1);
            calculator.add(10);
            expect(calculator.value).toBe(11);
        })
    
        it('can`t be bigger than 100', () => {
                calculator.add(100);
                expect(calculator.value).toBe(100);
                expect(() => calculator.add(1)).toThrow('Value can not be greater than 100');
        })
    })
    
    it('subtract', () => {
        expect(calculator.value).toBe(0);
        calculator.subtract(10);
        expect(calculator.value).toBe(-10);
    })
    
    it('multiply', () => {
        calculator.set(10);
        calculator.multiply(2)
        expect(calculator.value).toBe(20);
    })
    
    describe('devide', () => {
        it('0 / 0 === NaN', () => {
            calculator.set(0);
            calculator.divide(0);
            expect(calculator.value).toBe(NaN);
        })
        it('10 / 0 === Infinity', () => {
            calculator.set(10);
            calculator.divide(0);
            expect(calculator.value).toBe(Infinity);
        })
        it('10 / 2 === 5', () => {
            calculator.set(10);
            calculator.divide(2)
            expect(calculator.value).toBe(5);
        })
    })
})