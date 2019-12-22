function parseJSON(json) {
  try {
    return JSON.parse(json);
  } catch (error) {
    return null;
  }
}

const good = '{"role":"student","company":"EPAM","mentor":"Cool Mentor"}';
const bad = 'role:student,company:EPAM,mentor:Cool Mentor';
console.log(parseJSON(good));// eslint-disable-line
console.log(parseJSON(bad));// eslint-disable-line

