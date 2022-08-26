// implement myMap using prototype.

Array.prototype.myMap = function (callbackFn) {
  let results = [];
  for (let i = 0; i < this.length; i++) {
    results.push(callbackFn(this[i]));
  }
  return results;
};

console.log([1, 2, 3].myMap((i) => i * i));

//implement myReduce using prototype
Array.prototype.myReduce = function (callbackFn, initialValue) {
  if (this.length <= 1 && arguments.length === 1) return null;
  let result = this[0];
  for (let i = 1; i < this.length; i++) {
    result = callbackFn(result,this[i], i, this);
  }
  return result;
};

console.log([1,2,3].myReduce((sum, item) => sum + item))