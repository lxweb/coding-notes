const base = require('../index.js');

describe("Sorted strings", function() {
  var a;

  it("It's an anagram", function() {

    let a = base.isAnagramCase1('a', 'a');
    expect(a).toBe(true);
  });
});
