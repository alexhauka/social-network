const printAll = require('./printAll');
// returns the name of the person with the most followers over 30
const followersOver30 = function(data) {
  let input = printAll(data);
  let arrayOfDataCodeNames = Object.getOwnPropertyNames(data);
  let compareCount = 0;
  let outputName;
  for (const person in input) {
    let currentCount = 0;
    for (const codeName of arrayOfDataCodeNames) {
      if (input[person].followedBy.includes(data[codeName].name)) {
        if (data[codeName].age > 30) {
          currentCount += 1;
        }
      }
    }
    if (currentCount > compareCount) {
      compareCount = currentCount;
      outputName = person;
    }
  }
  return outputName;
};

module.exports = followersOver30;