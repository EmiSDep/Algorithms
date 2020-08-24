function abbreviation(a, b) {
    var stringA = a.toUpperCase().split("");
    var stringB = b.split("");
    var i = 0;
    var matchString = [];
    while (i < stringA.length){
        if (stringA[i] = stringB[i]){
            matchString.push(stringA[i])}
        i++
    }
    if (matchString === stringB){
        return "Yes"
    }
    else {
        return "No"
    }
    console.log(matchString, stringB)
    }
    console.log(abbreviation("daBcd","ABC"));
    // Make wordA match wordB
    // Can only remove letters 
    // Make the matching letters Uppercase?