function bouncer(arr) {
    let newArray = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i]) newArray.push(arr[i]);
    }
    console.log(newArray);
  }

  bouncer([7, "ate", "", false, 9]);
