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
/* eslint-enable */
