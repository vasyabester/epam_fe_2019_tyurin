function getSum(first, second) {
  const firstString = getFirstString(first, second);
  const secondString = getSecondString(first, second);
  let dozen = 0;
  let sum = '';

  const lengthOfLoops = firstString.length + 1;

  for (let i = 1; i < lengthOfLoops; i++) {
    const firstDigit = +firstString[firstString.length - i];
    const secondDigit = +secondString[secondString.length - i] || 0;
    let addedSymbolInSum = secondDigit + firstDigit + dozen;

    dozen = 0;

    if (addedSymbolInSum >= 10) {
      addedSymbolInSum -= 10;
      dozen = 1;
    }

    sum = addedSymbolInSum + sum;
  }

  return sum;
}

function getFirstString(first, second) {
  let firstString;

  if (first.length > second.length) {
    firstString = first;
  } else {
    firstString = second;
  }

  return firstString;
}

function getSecondString(first, second) {
  let secondString;

  if (first.length > second.length) {
    secondString = second;
  } else {
    secondString = first;
  }

  return secondString;
}

getSum('164400', '16409');
