// ALAB 308.3.1: Practical Loops
//------------------------------



//Part 1: Fizz Buzz

//Loop through all numbers from 1 to 100.
function loop1To100 () {
    for (i = 1; i <= 100; i++) {
      console.log(i);
    }
}

//If a number is divisible by 3, log “Fizz.”
function fizz () {
  let i = 0;
  while (i <= 100) {
    if (i % 3 == 0) {
      console.log('Fizz', i);
    }
    i++;
  }
}


//If a number is divisible by 5, log “Buzz.”
function buzz () {
  let i = 0;
  while (i <= 100) {
    if (i % 5 == 0) {
      console.log('BUZZ', i);
    }
    i++;
  }
}



//If a number is divisible by both 3 and 5, log “Fizz Buzz.”
function divFizzBuzz () {
  let i = 0;
  while (i <= 100) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log('FIZZ - BUZZ', i);
    }
    i++;
  }
}



//If a number is not divisible by either 3 or 5, log the number.
function notDivFizzBuzz () {
  let i = 0;
  while (i <= 100) {
    if (i % 3 !== 0 && i % 5 !== 0) {
      console.log('FIZZ - BUZZ - NOT DIV', i);
    }
    i++;
  }
}










//---------------- Functions Run -----------------------------

//Loop through all numbers from 1 to 100.
console.log('loop 1 to 100');
// loop1To100();
console.log("--------------------------------------")


//If a number is divisible by 3, log “Fizz.”
console.log('FIZZ');
fizz();
console.log("--------------------------------------")


//If a number is divisible by 5, log “Buzz.”
console.log('BUZZ');
buzz();
console.log("--------------------------------------")


//If a number is divisible by both 3 and 5, log “Fizz Buzz.”
console.log('FIZZ - BUZZ DIVISIBLE BY 3 AND 5');
divFizzBuzz();
console.log("--------------------------------------")


//If a number is not divisible by either 3 or 5, log the number.
console.log('FIZZ - BUZZ NOT DIVISIBLE BY 3 AND 5');
notDivFizzBuzz();
console.log("--------------------------------------")