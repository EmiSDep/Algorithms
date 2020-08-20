function jumpingOnClouds(c) {
    let jump = 0;
    for ( let i = 0; i < c.length -1; i +=2) {
        jump++;
        if(c[i] == 1) {
            i -= 1;
        }
    }
    return jump;
}

