module.exports = function solveEquation(equation) {
  const trimmedEquation = equation.replace(/\s/g, "");

  let splittedEquation = trimmedEquation.split("*x^2");
  console.log(splittedEquation)
  const coefA = splittedEquation.length > 1 ? +splittedEquation[0] : 0;
  console.log((coefA))
  splittedEquation = splittedEquation[splittedEquation.length - 1].split("*x");
  const coefB = splittedEquation.length > 1 ? +splittedEquation[0] : 0;

  const coefC = +splittedEquation[splittedEquation.length - 1];

  const discriminant = Math.pow(coefB,2) - 4 * coefA * coefC;
  const x1 = Math.round((-1*coefB+Math.sqrt(discriminant))/2/coefA);
  const x2 = Math.round((-1*coefB-Math.sqrt(discriminant))/2/coefA);
  return [x1, x2].sort(compare);
}

function compare(a,b) {
  return a - b;
}