//https://www.hackerrank.com/challenges/bon-appetit/problem
//HackerRank Algorithm


function bonAppetit(bill, k, b) {
    let splitCorrect = (bill.reduce((sum, cost) => sum + cost,0) - bill[k]) / 2;
    if (b == splitCorrect) {
        console.log("Bon Appetit");
    } else {
        console.log(b - splitCorrect);
    }
}