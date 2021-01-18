const printAll = require('./printAll');

// returns each person's reach (sum of followers and followers of followers)
const printReach = function(data) {
  let input = printAll(data);
  let reach = {};
  for (const person in input) {
    reach[person] = input[person].followedBy.length;
    let followers = input[person].followedBy;
    for (const follower of followers) {
      reach[person] += input[follower].followedBy.length;
    }
  }
  return reach;
};

module.exports = printReach;