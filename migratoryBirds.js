const migratoryBirds = (arr) => {
    const countBirdTypes = [0, 0, 0, 0, 0, 0];
    let countBirdType = 0,
      maxId = 0;
    //build counting array
    arr.forEach((bird) => countBirdTypes[bird]++);
    // console.log(countBirdTypes);
    //find max number in array
    countBirdTypes.forEach((type, index) => {
      if (type > countBirdType) {
        countBirdType = type;
        maxId = index;
      }
    });
    // for (let i = 0; i < countBirdTypes.length; i++) {
    //   if (countBirdTypes[i] > countBirdType) {
    //     countBirdType = countBirdTypes[i];
    //     maxId = i + 1;
    //   }
    // }
    return maxId;
  };