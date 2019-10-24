// Return the factorial of the provided integer.

function factorialize(num) {
    for (var product = 1; num > 0; num--) {
      product *= num;
    }
    console.log(product);
  }

  factorialize(10);
