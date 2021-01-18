const biggestFollower = require('./biggestFollower');
const mostPopular = require('./mostPopular');
const printAll = require('./printAll');
const unrequitedFollowers = require('./unrequitedFollowers');
const followersOver30 = require('./followersOver30');
const followingOver30 = require('./followingOver30');
const printReach = require('./printReach');

const data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
};

// ------------TEST DRIVERS----------

// NOTE: in the case of multiple names having equally greatest return values, only one is returned (as exercise did not specify which way to go with this)

console.log(biggestFollower(data)); // => returns the person who follows the most people
console.log(mostPopular(data)); // => returns the person who is followed the most
console.log(printAll(data)); // => returns a new object with names and each name's respective followers & who they're following
console.log(unrequitedFollowers(data)); // => returns a person and the names of anyone they follow who does not follow them back (if any) 
console.log(followersOver30(data)); // => returns the name of the person with the most followers over 30 years old
console.log(followingOver30(data)); // => returns the name of the person who follows the most people over 30 years old
console.log(printReach(data)); // => returns the names of each person and their reach (sum of # of followers + # of followers of followers)