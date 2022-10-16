const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let s = ""
  if(members === "" || !isNaN(members) || (members === Infinity || members === -Infinity) || members === undefined || !Array.isArray(members)){
    return false
  }
  for(let j = 0; j < members.length; j++){
    if(members[j] !== null && isNaN(members[j]) && !(members[j] === Infinity || members[j] === -Infinity) && members[j] !== undefined && typeof members[j] === 'string'){
      members[j] = members[j].trim()
      members[j] = members[j].toUpperCase() 
    }
  }
  members = members.sort()
  for(let i = 0; i < members.length; i++){
    if(typeof members[i] === 'string' && isNaN(members[i]) && !(members[i] === Infinity || members[i] === -Infinity) && members[i] !== undefined && members[i] !== null){
      if(isNaN(members[i][0])){
        s += members[i][0].toUpperCase() 
      }
    }
  }
  if(s === ""){
    return false
  }
  return s
}

module.exports = {
  createDreamTeam
};
