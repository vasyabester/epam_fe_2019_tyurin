/* eslint-disable */
function applyAll(func) {
  this.argumentsArray = [];

  for (var i = 1; i < arguments.length; i++) {
    this.argumentsArray.push(arguments[i]);
  }

  return func.call(this);
}

function sum() {
  var sum = 0;

  for (var i = 0; i < this.argumentsArray.length; i++) {
    sum += this.argumentsArray[i];
  }

  return sum;
}

function mul() {
  var mul = 1;

  for (var i = 0; i < this.argumentsArray.length; i++) {
    mul *= this.argumentsArray[i];
  }

  return mul;
}

applyAll(sum, 1, 2, 3);
applyAll(mul, 2, 3, 4);
/* eslint-enable */
