const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  let t
  if (typeof sampleActivity === 'string' && !isNaN(sampleActivity) && !(sampleActivity === Infinity || sampleActivity === -Infinity) && (!isNaN(parseFloat(sampleActivity)) && isFinite(sampleActivity))){
    if(Number(sampleActivity) > 0 && sampleActivity <= 15){
      t = Math.log(15 / sampleActivity) * (5730 / 0.693)
      t = Math.trunc(t) + 1
      return t
    }
    else{
      return false
    }
  }
  else{
    return false
  }
}

module.exports = {
  dateSample
};
