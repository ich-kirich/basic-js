const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if(date){
    if((date instanceof Date) && Object.prototype.toString.call(date) === '[object Date]' && typeof date.getMonth === 'function'){
      if (Object.getOwnPropertyNames(date).length > 0) {
        throw new Error('Invalid date!');
      }
      if(date.getMonth() === 11 || date.getMonth() <= 1){
        return 'winter'
      }
      else if(date.getMonth() >= 2 && date.getMonth() <= 4){
        return 'spring'
      }
      else if(date.getMonth() >= 5 && date.getMonth() <= 7){
        return 'summer'
      }
      else if(date.getMonth() >= 8 && date.getMonth() <= 10){
        return 'autumn'
      }
    }
    else{
      throw new Error('Invalid date!')
    }
  }
  else{
    return 'Unable to determine the time of year!'
  }
}

module.exports = {
  getSeason
};
