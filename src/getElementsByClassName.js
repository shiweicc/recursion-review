// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

//  You should use document.body, element.childNodes, and element.classList
var getElementsByClassName = function(className, node) {
  // your code here
  //create a result array
  //set up a new parameter named node which contains all nodes
  //compare the node class name with target className
  //if match, push node to result array

  //iterate over the child node and invoke the recursive function
  //return the result array

  var result = [];
  node = node || document.body;
  var match = node.classList;

  if (match !== undefined && match.contains(className)) {
    result.push(node);
  }

  if (node.hasChildNodes()) {
    var arr = node.childNodes;
    _.each(arr, function(item) {
      result = result.concat(getElementsByClassName(className, item));
    });
  }

  return result;

};
