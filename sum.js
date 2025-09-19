function parseNumber(a) {
  return Number(a);
}

function sum(a, b) {
  return parseNumber(a) + parseNumber(b);
}

module.exports = sum;
