// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // check the data type of input obj
  var isBoolean = function (value) {
    return typeof value === 'boolean';
  };

  var isString = function (value) {
    return typeof value === 'string';
  };

  var isNumber = function (value) {
    return typeof value === 'number';
  };

  // case for number and boolean and string
  var checkData = function (value) {
    return isBoolean(value) || isString(value) || isNumber(value);
  };

  // concat the value with quotes
  if (checkData(obj)) {
    //var quote = isString(obj) ? '' : '"';
    if (isString(obj)) {
      var quote = '"';
    } else {
      var quote = '';
    }
    return quote + obj + quote;
  }

  // case for null
  // check if the data type of input is null
  // if so, add quotes to the return input
  var isNull = function (value) {
    return typeof value === 'object' && value === null;
  };

  if (isNull(obj)) {
    var quote = '';
    return quote + null + quote;
  }

  // case for edge case
  // if data type is undefined or function, avoid the edge
  // create a function expression called isEdge
  var isUndefined = function (value) {
    return typeof value === 'undefined' && value === undefined;
  };

  var isFunction = function(value) {
    return typeof value === 'function';
  };

  var isEdge = function (value) {
    return isFunction(value) || isUndefined(value);
  };

  // case for array
  // create an empty string named resultforArr
  // use _.each to iterate the item within the array
  // concat the item value with [] and qutoes
  // return the concated string
  var removeComma = function(str) {
    var arr = str.split('');
    arr.pop();
    return arr.join('');
  };

  var isArr = function (value) {
    return Array.isArray(value) === true;
  };

  var resultforArr = '';
  if (isArr(obj)) {
    _.each(obj, function (item) {
      resultforArr = resultforArr + stringifyJSON(item) + ',';
    });

    var leftBracket = '[';
    var rightBracket = ']';
    return leftBracket + removeComma(resultforArr) + rightBracket;
  }

  // case for object
  // create an empty string named resultforObj
  // create a variable connecting all the keys of input obj
  // use _.each to iterate all the keys
  // concat the key and the item value with {} and colon: and quotes
  // call stringifyJSON on the nested item value
  // return the concated string
  var isObj = function (value) {
    return typeof value === 'object' && Array.isArray(value) === false;
  };

  var resultforObj = '';
  if (isObj(obj)) {
    var objKeys = Object.keys(obj);

    _.each(objKeys, function(item) {
      var value = obj[item];

      if (isEdge(item) || isEdge(value)) {
        resultforObj = '';
      } else {
        resultforObj += '"' + item + '":' + stringifyJSON(value) + ',';
      }

    });

    var leftCurly = '{';
    var rightCurly = '}';
    return leftCurly + removeComma(resultforObj) + rightCurly;
  }
};
