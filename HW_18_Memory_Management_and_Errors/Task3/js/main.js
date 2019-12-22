function parseJSON(json) {
  const user = JSON.parse(json);

  if (!user.name) {
    throw new Error('name property is required');
  }
  if (!user.company) {
    throw new Error('company property is required');
  }

  return user;
}

window.onerror = (message, url, line) => {
  console.log(`Error in ${line} line: ${message}`);  // eslint-disable-line
};

const good = '{"name":"student","company":"EPAM"}';
const bad1 = '{"name":"student","surname":"EPAM"}'; // eslint-disable-line
const bad = 'name:student,company:EPAM'; // eslint-disable-line

console.log(parseJSON(good)); // eslint-disable-line
