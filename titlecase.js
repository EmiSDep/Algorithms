// Title Case a Sentence

function titleCase(str) {
    var emptyArray = [];
    var emptyString = "";
    var lowerCaseArray = str.toLowerCase().split(" ");
    for(var i = 0; i < lowerCaseArray.length; i++) {
      emptyArray.push(lowerCaseArray[i].replace(lowerCaseArray[i][0], lowerCaseArray[i][0].toUpperCase()))
    }
    emptyString = emptyArray.join(" ")
    console.log(emptyString);
  }

  titleCase("I'm a little tea pot");
