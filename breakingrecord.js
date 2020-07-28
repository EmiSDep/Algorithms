function breakingRecords(scores) {

  let [highestRecordIncreased, lowestRecordDecreased] = [0, 0];
​
  let [currentHighestRecord, currentLowestRecord] = [
    scores[0] * 1,
    scores[0] * 1,
  ];
​
  
  scores.forEach((score) => {
    
    if (currentHighestRecord < score) {
      
      currentHighestRecord = score;
      
      ++highestRecordIncreased;
    }
​
    
    if (score < currentLowestRecord) {

      currentLowestRecord = score;

      ++lowestRecordDecreased;
    }
  });

  return [highestRecordIncreased, lowestRecordDecreased];
}
​
console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]).join(" ") + "\n");