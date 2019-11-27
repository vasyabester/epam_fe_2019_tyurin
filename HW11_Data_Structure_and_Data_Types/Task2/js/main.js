function sum(value1, value2) {
  let number1 = value1;
  let number2 = value2;

  if (typeof number1 === 'string') {
    number1 = +number1;

    if (number2 % 15 === 0) {
      number2 *= -1;
    }
  } else {
    number2 = +number2;

    if (number1 % 15 === 0) {
      number1 *= -1;
    }
  }

  return number1 + number2;
}

sum('3',45);
