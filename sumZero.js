// write a program which checks if sorted array is having two
// values whos some is zero
// return two values in form of array
function sumZero(arr) {
  // take two  pointers left and write
  // loop until left> right
  // if sum of left and right> 0, right--
  // else left --
  // if zero return [left, right]
  let left = 0;
  let right = arr.length - 1;
  let sum;
  while (left < right) {
    sum = arr[left] + arr[right];
   // console.log(sum)
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum < 0) left++;
    else right--;
  }
}

console.log(sumZero([-8,-4,1,2,4,8,9,11]));
