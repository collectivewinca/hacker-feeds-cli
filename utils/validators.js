function isPositiveInt(value) {
  return Number.isInteger(value) && value > 0;
}

function isNonNegativeInt(value) {
  return Number.isInteger(value) && value >= 0;
}

function isValidSince(value) {
  return ['daily', 'weekly', 'monthly'].includes(value);
}

function isValidRedditSort(value) {
  return ['hot', 'new', 'best', 'top'].includes(value);
}

module.exports = {
  isPositiveInt,
  isNonNegativeInt,
  isValidSince,
  isValidRedditSort,
};
