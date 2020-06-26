function countingValleys(steps, directions) {
    let valley = 0;
    let location = 0;

    for(var i = 0; i < directions.length; i++) {
        if(location === -1 && directions[i] === 'U') ++valley
        directions[i] === 'U' ? ++locations : --location
    }
    return valley
}

console.log(countingValleys(8, 'UDDUDUU'));