const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
 function Hanoi(turns, seconds) {
  this.turns = turns;
  this.seconds = seconds;
}

function calculateHanoi(disksNumber, turnsSpeed) {
  let turns = (Math.pow(2, disksNumber)) - 1
  let seconds = Math.trunc(turns * (3600 / turnsSpeed))
  result = new Hanoi(turns, seconds)
  return result
  // remove line with error and write your code here
}

module.exports = {
  calculateHanoi
};
