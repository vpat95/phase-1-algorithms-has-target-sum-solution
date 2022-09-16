function hasTargetSum(array, target) {
  const seenNumbers = {};

  for (const number of array) {
    const complement = target - number;
    if (complement in seenNumbers) return true;
    seenNumbers[number] = true;
  }
  return false
}

/* 
  Write the Big O time complexity of your function here:
  O(n)
*/

/* 
  Add your pseudocode here:
  ([3, 8, 12, 4, 11, 7], 10)
  iterate through each number in array, 
  for the current number, identify a complement adds to target (comp = target -num)
    iterate through rest of array
      check if any number is our complement
      if so, return true

  if compliment not found return false
*/

/*
  Add written explanation of your solution here:
  make a function 'hasTargetSum' that checks if two numbers from the array
  add up to some target. I.e, if array '[1,2,3,4]' and target '6' it should
  return true because 2 + 4 = 6
  for each number check if there's a number that adds to target
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
