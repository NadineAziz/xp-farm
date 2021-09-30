function areTheyTheSame(array1, array2) {
  let booleanArr = [];
  for (let j in array2) {
    if (array1.includes(Math.sqrt(array2[j]))) {
      booleanArr.push(true);
    } else {
      booleanArr.push(false);
    }
  }
  if (booleanArr.includes(false)) {
    return false;
  }
  console.log(booleanArr);
  return true;
}

// console.log(areTheyTheSame([121, 144, 19, 161, 19, 144, 19, 11],[132, 14641, 20736, 361, 25921, 361, 20736, 361]));
console.log(
  areTheyTheSame(
    [0, 2, 9, 7, 0, 1, 3, 2, 6, 9, 0, 2, 10, 8, 10, 6],
    [81, 4, 0, 1, 9, 100, 81, 49, 36, 100, 0, 4, 64, 1, 4, 36]
  )
);
module.exports = {
  areTheyTheSame,
};
