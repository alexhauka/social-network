const printAll = require('./printAll');

// for each person, returns a list of someone they follow who doesn't follow them back (if any)
const unrequitedFollowers = function(data) {
  let input = printAll(data);
  let output = {};
  for (const account in input) {
    let following = input[account].follows;
    let followers = input[account].followedBy;
    for (const name of following) {
      if (!followers.includes(name)) {
        output[account] = {
          unrequitedBy: name
        };
      }
    }
  }
  return output;
};

module.exports = unrequitedFollowers;