/* eslint-disable */
function getMockedJson() {
  const rawFile = new XMLHttpRequest();
  let result = {};

  rawFile.open('GET', 'data.json', false);
  rawFile.send(null);

  if (rawFile.status === 200) {
    result = JSON.parse(rawFile.response);
  }

  return result;
}

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

function createPostDueToType(post) {
  let postObject;

  if (post.type === 'video') {
    postObject = new VideoPost(post);
  } else if (post.type === 'audio') {
    postObject = new AudioPost(post);
  } else if (post.type === 'picture') {
    postObject = new ImagePost(post);
  } else {
    postObject = new Post(post);
  }

  return postObject;
}
/* eslint-enable */
