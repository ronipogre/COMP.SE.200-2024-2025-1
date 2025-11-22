import chunk from '../src/chunk.js';

describe('chunk', () => {
    const arr1 = [0, 1, 2, 3, 4, 5];
    const arr2 = [["a", 1], ["b", 2], ["c", 3]];

    test('should produce the correct number of chunks when array length is divisible by size', () => {
        expect(chunk(arr1,  2)).toHaveLength(arr1.length / 2);
    });

    test('should chunk values correctly', () => {
        expect(chunk(arr1,  2)).toEqual([[0, 1], [2, 3], [4, 5]]);
    });

    test('should return original array nested if size is the same as length', () => {
        expect(chunk(arr1, 6)).toEqual([arr1]);
    });

    test('should return remaining elements in final chunk if array cant be split evenly', () => {
        expect(chunk(arr1, 4)).toEqual([[0, 1, 2, 3], [4, 5]]);
    });

    test('should split array into single element chunks when no given chunk size', () => {
        expect(chunk(arr1)).toHaveLength(arr1.length);
    });

    test('should use default chunk size for undefined chunk size', () => {
        expect(chunk(arr1, undefined)).toHaveLength(arr1.length);
    });

    test('should return empty array for empty input array', () => {
        expect(chunk([], 2)).toEqual([]);
    });

    test('should return empty array for undefined input array', () => {
        expect(chunk(undefined, 2)).toEqual([]);
    });

    test('should work with arrays inside the input array', () => {
        expect(chunk(arr2, 2)).toEqual([[["a", 1], ["b", 2]], [["c", 3]]]);
    });
});