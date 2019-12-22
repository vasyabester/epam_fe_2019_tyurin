function calculateFibByRecursion(elementNumber) {
  if (elementNumber === 1 || elementNumber === 2) {
    return 1;
  } else if (elementNumber > 2) {
    return calculateFibByRecursion(elementNumber - 1) + calculateFibByRecursion(elementNumber - 2);
  }
}

function calculateFibByCycle(elementNumber) {
  let prevEl = 1;
  let fibSum = 1;

  for (let i = 2; i < elementNumber; i++) {
    const currentSum = prevEl + fibSum;
    prevEl = fibSum;
    fibSum = currentSum;
  }

  return fibSum;
}

const banchmark = (sum, nameOfFunction, elementNumber = 40) => {
  const start = performance.now();
  sum(elementNumber);

  const timePassed = (performance.now() - start).toFixed(4);

  console.log(`${nameOfFunction}: ${timePassed} ms`); // eslint-disable-line
};

banchmark(calculateFibByRecursion, 'Recursion');
banchmark(calculateFibByCycle, 'Cycle');

/* Description
The loops give better performance than functions because calling a function consumes more resources than executing statements.
In our case the call stack in a function with a solution of using recursion is constantly growing, which exponentially
increases the time the function works. */
