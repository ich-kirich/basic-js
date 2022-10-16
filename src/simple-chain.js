const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  temp : '',
  
  getLength() {
    return this.temp.split('~~').length;
  },
  addLink(value) {
    if (this.temp !== '') {
      this.temp = this.temp + `~~( ${value} )`;
      return this;
    } else {
      this.temp = this.temp + `( ${value} )`;
      return this;
    }
  },
  removeLink(position) {
    if (!Number.isInteger(position) || (position <= 0) || position > this.getLength()) {
      this.temp = ''
      throw new Error("You can't remove incorrect link!")
    }
    this.temp = this.temp.split('~~').filter((i, j) => {
      if (j !== (position - 1)) return i;
    }).join('~~');
    return this;
  },
  reverseChain() {
    this.temp = this.temp.split('~~').reverse().join('~~');
    return this;
  },
  finishChain() {
    let result = this.temp;
    this.temp = '';
    return result;
  }
};

module.exports = {
  chainMaker
};
