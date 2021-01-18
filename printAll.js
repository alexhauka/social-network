const { followingByName, followersByName } = require('./helpers');

// returns everyone & who they follow/who follows them (really useful for later functions!)
const printAll = function(data) {
  let followingObj = followingByName(data);
  let followersObj = followersByName(data);
  let followingAndFollowers = {};
  for (const account in data) {
    let key = data[account].name;
    followingAndFollowers[key] = {
      follows: followingObj[key],
      followedBy: followersObj[key]
    };
  }
  return followingAndFollowers;
};

module.exports = printAll;