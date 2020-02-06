describe("Test UT", function() {
  const utils = require('../../src/js/utils');

  beforeEach(function() {

  });

  afterEach(function() {

  });

  it("test 1", function() {
    const testString = 'test';

    expect(testString).toBe('test');
  });

  it('test validate method', function () {
    expect(utils.validate('Nfdk33jd')).toBe(true);
  });
});
