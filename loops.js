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












//---------------- Functions Run -----------------------------

//Loop through all numbers from 1 to 100.
console.log('loop 1 to 100')
// loop1To100();
console.log("--------------------------------------")


//If a number is divisible by 3, log “Fizz.”
console.log('FIZZ')
fizz();