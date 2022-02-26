// test cases are described in fixtures.js
// describe('stringifyJSON', function() {
//   it('should match the result of calling JSON.stringify', function() {

//     stringifiableObjects.forEach(function(test) {
//       var expected = JSON.stringify(test);
//       var result = stringifyJSON(test);
//       expect(result).to.equal(expected);
//     });

//     unstringifiableValues.forEach(function(obj) {
//       var expected = JSON.stringify(obj);
//       var result = stringifyJSON(obj);
//       expect(result).to.equal(expected);
//     });

//   });
// });


// test cases are described in fixtures.js
describe('stringifyJSON', function() {
  describe('should match the result of calling JSON.stringify', function() {

    stringifiableObjects.forEach(function(test) {
      it(JSON.stringify(test), function() {
        var expected = JSON.stringify(test);
        var result = stringifyJSON(test);
        expect(result).to.equal(expected);
      });
    });
  });

  describe('should not stringify invalid input (functions, undefined)', function() {
    unstringifiableValues.forEach(function(item) {
      it(JSON.stringify(item) + '', function() {
        var expected = JSON.stringify(item);
        var result = stringifyJSON(item);
        expect(result).to.equal(expected);
      });
    });
  });
});
