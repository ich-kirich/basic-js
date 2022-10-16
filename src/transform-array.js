const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if(Array.isArray(arr)){
    res = []
    j = 0
    commands = ['--discard-next', '--discard-prev', '--double-next', '--double-prev']
    for(let i = 0; i < arr.length; i++){
      if(arr[i] === '--discard-next'){
        if(!commands.includes(arr[i+1]) && (i+1 < arr.length)){
          i++
        }
      }
      else if(arr[i] === '--discard-prev'){
        if(i - 1 >= 0 && !commands.includes(arr[i-1]) && arr[i-2] !== '--discard-next'){
          j--
          res.splice(j, 1);
          j = res.length - 1
        }
      }
      else if(arr[i] === '--double-next'){
        if((i + 1) < arr.length && !commands.includes(arr[i+1])){
          res.push(arr[i + 1])
          j = res.length - 1
        }
      }
      else if(arr[i] === '--double-prev'){
        if((i - 1) >= 0 && !commands.includes(arr[i-1]) && arr[i-2] !== '--discard-next'){
          res.push(arr[i-1])
          j = res.length - 1
        }
      }
      else{
        res.push(arr[i])
        j = res.length - 1
      }
    }
    return res
  }
  else{
    throw new Error('\'arr\' parameter must be an instance of the Array!')
  }
}

module.exports = {
  transform
};
