// check two strings are anagram
// two strings will be anagram if one string can be formed
// using other string
// appraoch
// one string will be formed using another string
// if no of characters in one string is same
// as other string
// frequency of each character should be same
function calculateFrequency(str) {
  let obj = {};
  for (let value of str) {
    obj.value = (obj.value || 0) + 1;
  }
  return obj;
}
function checkTwoObjectsAreEqual(obj1, obj2) {
  for (let key in obj1) {
    if (key in obj2) {
      if (obj1[key] === obj2[key]) continue;
      else return false;
    } else return false;
  }
  return true;
}
function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  // get frequency of each character in str1
  // get frequency of each character in string 2
  // loop over and check if obj2 is having same value
  // for the characters of obj1
  // if yes return true\
  // else return false
  const obj1 = calculateFrequency(str1);
  const obj2 = calculateFrequency(str2);
  return checkTwoObjectsAreEqual(obj1, obj2);
}
console.log(isAnagram('santhhhosha', 'shothhhnsa'));
