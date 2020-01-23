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

function validate(title) {

  return /^[A-Z](?=.*[a-z])[a-zA-Z0-9\s\!\:\-\?\,\.]{5,59}$/.test(title);
}

function createPostDueToType(post) {
  let postObject;

  if (post.type === 'video') {
    postObject = new VideoPost(post);
  } else if (post.type === 'audio') {
    postObject = new AudioPost(post);
  } else if (post.type === 'picture') {
    postObject = new ImagePost(post);
  }

  return postObject;
}
/* eslint-enable */
