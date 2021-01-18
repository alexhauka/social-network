// => returns account by name who follows the most people
const biggestFollower = function(data) {
  let mostFollows = data.f01;
  for (const account in data) {
    if (data[account].follows.length > mostFollows.follows.length) {
      mostFollows = data[account];
    }
  }
  return mostFollows.name;
};

module.exports = biggestFollower;