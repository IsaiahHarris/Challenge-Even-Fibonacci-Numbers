/**
 * Return the total sum of all even fibonacci numbers up to and including
 * the value given to you at `maxFibValue`
 *
 * @param  {Number} maxFibValue
 * @return {Number} sum
 */
function _sumFibs(maxFibValue) {
  var sum = 0;
console.log(maxFibValue)
  var arr = [1, 2];
  for (let i = 0; i < arr.length; i++) {
    if (arr[arr.length - 1] < maxFibValue) {
      arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    }
  }
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] % 2 === 0) {
      sum += arr[j];
    }
  }

  return sum;
}

// bonus round
function _highestFibonacciNumber(maxFibValue) {

  var highest = 0;
  var arr = [1, 2];
  for (let i = 0; i < arr.length; i++) {
    if (arr[arr.length - 1] < maxFibValue) {
      arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    }
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] < maxFibValue) {
      highest = arr[i];
      return highest;
    }
  }


};

/**
 * Do not modify code below.
 * You must be at least level 10 to understand.
 */
module.exports = {
  sumFibs: _sumFibs,
  highestFibonacciNumber: _highestFibonacciNumber
};