import add from '../src/add.js';

describe('add (AI-generated test suite)', () => {
    // --- Normal number additions ---
    test('adds two positive numbers', () => {
        expect(add(6, 4)).toBe(10)
    })

    test('adds positive and negative number', () => {
        expect(add(10, -3)).toBe(7)
    })

    test('adds two negative numbers', () => {
        expect(add(-5, -7)).toBe(-12)
    })

    test('adds numbers with decimals', () => {
        expect(add(0.1, 0.2)).toBeCloseTo(0.3, 5)
    })

    // --- Zero handling ---
    test('adding zero returns the other number', () => {
        expect(add(0, 5)).toBe(5)
        expect(add(7, 0)).toBe(7)
    })

    test('adding a number to its negation returns zero', () => {
        expect(add(5, -5)).toBe(0)
    })

    // --- Undefined / default value handling ---
    test('undefined arguments return default behavior', () => {
        expect(add(undefined, undefined)).toBe(0)
        expect(add(5, undefined)).toBe(5)
        expect(add(undefined, 9)).toBe(9)
    })

    // --- String inputs (numeric coercion) ---
    test('string numbers are coerced to numbers', () => {
        expect(add('3', '4')).toBe(7)
        expect(add('10', 5)).toBe(15)
        expect(add(8, '2')).toBe(10)
    })

    // --- Boolean, null, and edge type coercion ---
    test('boolean and null values are coerced correctly', () => {
        expect(add(true, 1)).toBe(2)
        expect(add(false, 1)).toBe(1)
        expect(add(null, 3)).toBe(3)
    })

    test('non-numeric strings result in NaN', () => {
        expect(add('5px', 2)).toBeNaN()
        expect(add(2, 'abc')).toBeNaN()
    })

    // --- Edge cases: NaN and Infinity ---
    test('NaN inputs propagate NaN', () => {
        expect(add(NaN, 5)).toBeNaN()
        expect(add(5, NaN)).toBeNaN()
        expect(add(NaN, NaN)).toBeNaN()
    })

    test('Infinity handling', () => {
        expect(add(Infinity, 1)).toBe(Infinity)
        expect(add(-Infinity, 10)).toBe(-Infinity)
        expect(add(Infinity, -Infinity)).toBeNaN()
    })

    // --- Large and small numbers ---
    test('handles very large numbers', () => {
        expect(add(1e308, 1e308)).toBe(Infinity)
    })

    test('handles very small numbers', () => {
        expect(add(1e-308, 1e-308)).toBeCloseTo(2e-308)
    })

    // --- Commutativity ---
    test('addition is commutative', () => {
        expect(add(7, 3)).toBe(add(3, 7))
        expect(add(-2, 5)).toBe(add(5, -2))
    })

    // --- Mixed input types ---
    test('mixed input types', () => {
        expect(add('5', undefined)).toBe(5)
        expect(add(undefined, '8')).toBe(8)
        expect(add('4', 6)).toBe(10)
        expect(add(7, '3')).toBe(10)
    })

    // --- Invalid types (objects, arrays, functions) ---
    test('invalid types throw or result in NaN', () => {
        expect(add({}, 1)).toBeNaN()
        expect(add([], 2)).toBeNaN()
        expect(add(() => 1, 2)).toBeNaN()
    })

    // --- Immutability check (no side effects) ---
    test('does not mutate input values', () => {
        const obj = { value: 5 }
        expect(add(obj.value, 3)).toBe(8)
        expect(obj.value).toBe(5)
    })
});