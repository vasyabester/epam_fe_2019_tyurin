function applyAll(func, ...theArgs) {
  this.argumentsArray = Object.assign([], theArgs);

  return func.call(this);
}

function sum() {
  let sum = 0;

  this.argumentsArray.forEach((item) => {
    sum += item;
  });

  return sum;
}

function mul() {
  let mul = 1;

  this.argumentsArray.forEach((item) => {
    mul *= item;
  });

  return mul;
}

applyAll(sum, 1, 2, 3);
applyAll(mul, 2, 3, 4);
