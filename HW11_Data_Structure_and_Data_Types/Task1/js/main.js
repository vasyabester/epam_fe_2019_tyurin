function validateTitle(title) {
  const specialCharacters = ['!', '.', '?', ',', ' '];

  if (typeof title !== 'string') {
    return 'Incorrect input data';
  } else if (!(title.length > 2 && title.length < 20)) {
    return 'Invalid';
  }

  const isFirstLetterUpperCase = title[0].toUpperCase() === title[0];

  if (!isFirstLetterUpperCase) {
    return 'Invalid';
  }

  let result = 'Valid';

  title.split('').forEach((char) => {
    const isValidCharacter = specialCharacters.find((character) => character === char);
    const isLetter = char.toLowerCase() !== char.toUpperCase();

    if (!isLetter && !isValidCharacter) {
      result = 'Invalid';
    }
  });

  return result;
}

validateTitle('Title?');
