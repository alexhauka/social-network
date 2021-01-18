const {followerCount} = require('./helpers');

// returns the name of the person with the most followers
const mostPopular = function(data) {
  let accountsWithFollowers = followerCount(data); // => uses helper (see 'helpers.js')
  let mostFollowed = 'f01';
  for (const account in accountsWithFollowers) {
    if (account > mostFollowed) {
      mostFollowed = account;
    }
  }
  return data[mostFollowed].name;
};

module.exports = mostPopular;