let message;
const login = 'Maks';

switch (login) {
  case 'Maks':
    message = 'Hi, Maks';
    break;

  case 'Serg':
    message = 'Hi, Serg';
    break;

  case '':
    message = 'Hi, undefined';
    break;
  default:
    message = '';
}

console.log(message);

