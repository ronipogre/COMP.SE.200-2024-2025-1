import add from '../src/add.js';

describe('add function', () => {
    test('works with positive integers', () => {
        expect(add(2, 5)).toBe(7)
    });
});
