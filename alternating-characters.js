// Complete the alternatingCharacters function below.
function alternatingCharacters(s) {
    
    const stringArr = s.split("");
    let deletions = 0;
    
    // console.log(3, stringArr);
    stringArr.forEach((letter, index) => {
        // console.log(`Current Letter: ${letter} Next Letter: ${stringArr[index + 1]}`)
        if (letter === stringArr[index + 1]) {
            ++deletions;
        }
    });
​
    // console.log(`Deletions: ${deletions}`);
    return deletions;
}
