function frankenSplice(arr1, arr2, n) {
    var combinedArr = arr2.slice();
    combinedArr.splice(n, 0, ...arr1)
    console.log(combinedArr);
  }

  frankenSplice([1, 2, 3], [4, 5, 6], 1);
