const secondLogin = 'Maks';

const secondMessage =
  (secondLogin === 'Maks')
    ? 'Hi, Maks'
    : (secondLogin === 'Serg')
      ? 'Hi Serg'
      : (secondLogin === '')
        ? 'Hi undefined'
        : '';
console.log(secondMessage);
