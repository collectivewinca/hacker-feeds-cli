const test = require('node:test');
const assert = require('node:assert/strict');
const {
  isPositiveInt,
  isNonNegativeInt,
  isValidSince,
  isValidRedditSort,
  isValidDevtoSort,
  isValidLobstersSort,
  isValidEchojsSort,
} = require('../utils/validators');

test('isPositiveInt validates positive integers only', () => {
  assert.equal(isPositiveInt(1), true);
  assert.equal(isPositiveInt(0), false);
  assert.equal(isPositiveInt(-2), false);
  assert.equal(isPositiveInt(1.2), false);
  assert.equal(isPositiveInt(Number.parseInt('x', 10)), false);
});

test('isNonNegativeInt validates zero and positive integers', () => {
  assert.equal(isNonNegativeInt(0), true);
  assert.equal(isNonNegativeInt(2), true);
  assert.equal(isNonNegativeInt(-1), false);
  assert.equal(isNonNegativeInt(3.3), false);
});

test('isValidSince allows only supported ranges', () => {
  assert.equal(isValidSince('daily'), true);
  assert.equal(isValidSince('weekly'), true);
  assert.equal(isValidSince('monthly'), true);
  assert.equal(isValidSince('yearly'), false);
});

test('isValidRedditSort allows supported sorts', () => {
  assert.equal(isValidRedditSort('hot'), true);
  assert.equal(isValidRedditSort('new'), true);
  assert.equal(isValidRedditSort('best'), true);
  assert.equal(isValidRedditSort('top'), true);
  assert.equal(isValidRedditSort('rising'), false);
});

test('isValidDevtoSort allows supported sorts', () => {
  assert.equal(isValidDevtoSort('top'), true);
  assert.equal(isValidDevtoSort('latest'), true);
  assert.equal(isValidDevtoSort('rising'), true);
  assert.equal(isValidDevtoSort('hot'), false);
});

test('isValidLobstersSort allows supported sorts', () => {
  assert.equal(isValidLobstersSort('hottest'), true);
  assert.equal(isValidLobstersSort('newest'), true);
  assert.equal(isValidLobstersSort('top'), false);
});

test('isValidEchojsSort allows supported sorts', () => {
  assert.equal(isValidEchojsSort('latest'), true);
  assert.equal(isValidEchojsSort('top'), true);
  assert.equal(isValidEchojsSort('hot'), false);
});
