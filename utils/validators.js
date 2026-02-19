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

function isValidDevtoSort(value) {
  return ['top', 'latest', 'rising'].includes(value);
}

function isValidLobstersSort(value) {
  return ['hottest', 'newest'].includes(value);
}

function isValidEchojsSort(value) {
  return ['latest', 'top'].includes(value);
}

module.exports = {
  isPositiveInt,
  isNonNegativeInt,
  isValidSince,
  isValidRedditSort,
  isValidDevtoSort,
  isValidLobstersSort,
  isValidEchojsSort,
};
