function viralAdvertising(days) {
    let cumulative = 0;
    let recipients = 5;
    let likes = 0;

    for(let i = 0; i < days; i++) {
        likes = Math.floor(recipients / 2);
        recipients = likes * 3;
        cumulative += likes;
    }
    return cumulative;

}