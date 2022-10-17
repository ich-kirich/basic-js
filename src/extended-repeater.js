const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  result = ""
  if(!('repeatTimes' in options)){
    options.repeatTimes = 1
  }
  else if(typeof options.repeatTimes !== 'number'){
    options.repeatTimes = Number(options.repeatTimes)
  }
  if(!('separator' in options)){
    options.separator = '+'
  }
  else if(typeof options.separator !== 'string'){
    options.separator =  String(options.separator)
  }
  if(!('addition' in options)){
    options.addition = ''
  }
  else if(typeof options.addition !== 'string'){
    options.addition = String(options.addition)
  }
  if(!('additionRepeatTimes' in options)){
    options.additionRepeatTimes = 1
  }
  else if(typeof options.additionRepeatTimes !== 'number'){
    options.additionRepeatTimes =  Number(options.additionRepeatTimes)
  }
  if(!('additionSeparator' in options)){
    options.additionSeparator = '|'
  }
  else if(typeof options.additionSeparator !== 'string'){
    options.additionSeparator =  String(options.additionSeparator)
  }
  for(let i = 0; i < options.repeatTimes; i++){
    result += str
    for(let j = 0; j < options.additionRepeatTimes; j++){
      if(j < options.additionRepeatTimes - 1){
        result += options.addition + options.additionSeparator
      }
      else{
        result += options.addition
      }
    }
    if(i < options.repeatTimes - 1){
      result += options.separator
    }
    else{
      result += ''
    }
  }
  return result
  // remove line with error and write your code here
}

module.exports = {
  repeater
};
