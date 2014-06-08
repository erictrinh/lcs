var expect = require('chai').expect;
var LCS = require('./index.js');

describe('lcs', function() {
  var n = new LCS('abcde', 'abed');
  var results = n.getSequences();

  it('should return all possible subsequences', function() {
    expect(results.length).to.equal(2);
    expect(results).to.include('abd');
    expect(results).to.include('abe');
  });

  it('should report the correct subsequence length', function() {
    expect(n.getLength()).to.equal(3);
  });

  it('should still work if forget to use new', function() {
    var x = LCS('abcde', 'abed');

    expect(x.getSequences().length).to.equal(2);
  });
});
