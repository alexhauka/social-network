// const data = {             // => data object from social.js (for testing only)
//   f01: {
//     name: "Alice",
//     age: 15,
//     follows: ["f02", "f03", "f04"]
//   },
//   f02: {
//     name: "Bob",
//     age: 20,
//     follows: ["f05", "f06"]
//   },
//   f03: {
//     name: "Charlie",
//     age: 35,
//     follows: ["f01", "f04", "f06"]
//   },
//   f04: {
//     name: "Debbie",
//     age: 40,
//     follows: ["f01", "f02", "f03", "f05", "f06"]
//   },
//   f05: {
//     name: "Elizabeth",
//     age: 45,
//     follows: ["f04"]
//   },
//   f06: {
//     name: "Finn",
//     age: 25,
//     follows: ["f05"]
//   }
// };


// returns an object with keys as accounts (e.g. f01) and value as number of followers
const followerCount = function(data) {
  let followArray = [];
  let followCount = {};
  for (let account in data) {
    followArray.push(...data[account].follows);
  }
  followArray.forEach(e => {
    if (followCount[e]) {
      followCount[e] += 1;
    } else {
      followCount[e] = 1;
    }
  });
  return followCount;
};

// returns an object with keys as names and values as an array of who they follow
const followingByName = function(data) {
  let namesAndFollowing = {};
  for (const account in data) {
    let key = data[account].name;
    let namedFollowing = [];
    for (let i = 0; i < data[account].follows.length; i++) {
      let k = data[account].follows[i];
      namedFollowing.push(data[k].name);
    }
    namesAndFollowing[key] = namedFollowing;
  }
  return namesAndFollowing;
};

// returns an object with keys as names and values as and array of who they are followed by
const followersByName = function(data) {
  let namesAndFollowers = {};
  for (const account in data) {
    for (let i = 0; i < data[account].follows.length; i++) {
      let dataKey = data[account].follows[i];
      let keyName = data[dataKey].name;
      if (namesAndFollowers[keyName]) {
        namesAndFollowers[keyName].push(data[account].name);
      } else {
        namesAndFollowers[keyName] = [];
        namesAndFollowers[keyName].push(data[account].name);
      }
    }
  }
  return namesAndFollowers;
};

// ----------TEST DRIVERS----------

// UNCOMMENT data object at top to test inside this file exclusively!

// console.log(followerCount(data))
// console.log(followingByName(data))
// console.log(followersByName(data))

module.exports = { followerCount, followingByName, followersByName }