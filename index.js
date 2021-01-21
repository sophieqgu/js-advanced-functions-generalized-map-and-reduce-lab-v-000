// Add your functions here
function map(sourceArray, callback) {
  let result = [];
  for (let i = 0; i < sourceArray.length; i++) {
    result.push(callback(sourceArray[i]));
  }
  return result;
}

function reduce(sourceArray, callback, startValue) {
  let result = callback(sourceArray);
  return result;
}
