// Add your functions here
function map(sourceArray, callback) {
  let result = [];
  for (let i = 0; i < sourceArray.length; i++) {
    result.push(callback(sourceArray[i]));
  }
  return result;
}

function reduce(sourceArray, callback, startValue = sourceArray[0]) {

  for (let i = !!startValue ? 1 : 0; i < sourceArray.length; i++) {
    startValue = callback(sourceArray[i], startValue);
  }
  return startValue;
}
