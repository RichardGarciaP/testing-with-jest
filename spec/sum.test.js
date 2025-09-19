const { describe, expect, test } = require('@jest/globals');

const sum = require('../sum');

describe('sum module', () => {
  test('adds 1 + 2 to equal 2', () => {
    expect(sum(1, 2)).toBe(3);
  });

  test('two plus two is four', () => {
    expect(2 + 2).toBe(4);
  });
});

describe('Recursive test', () => {
  test('should add positive number not to be equal 0', () => {
    for (let i = 1; i < 10; i++) {
      for (let j = 1; j < 10; j++) {
        expect(i + j).not.toBe(0);
      }
    }
  });
});
