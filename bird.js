function migratoryBirds(arr) {
    var mostCommon = [];
     var count = 0;
    // var type = 0;
    arr.sort();
    for (var i = 0; i < arr.length; i++) {
      var type = arr.lastIndexOf(arr[i]) - arr.indexOf(arr[i]) + 
      console.l
      if (type > count) {
        count = type;
        console.log(arr[i])
      }
    } //return count; 
  }
  console.log(migratoryBirds([1, 1, 2, 3, 3, 3, 3, 4]));