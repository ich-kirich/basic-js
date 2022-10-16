const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    if(arr.filter(temp => temp.constructor.name === "Array").length != 0){
      let res = 1 + this.calculateDepth([].concat(...arr.filter(temp => temp.constructor.name === "Array")))
      return res;
   } else {
      return 1;
   }
  }
}

module.exports = {
  DepthCalculator
};
