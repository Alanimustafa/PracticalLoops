// ALAB 308.3.1: Practical Loops
//------------------------------


//---------------- Part 1: Fizz Buzz ------------------------------------------

//Loop through all numbers from 1 to 100.
function loop1To100 () {
  loop100Array = [];
    for (i = 1; i <= 100; i++) {
      loop100Array.push(i);
    }
    console.log('Loop from 1 to 100', loop100Array);
}

//If a number is divisible by 3, log “Fizz.”
function fizz () {
  let i = 0;
  fizzArray = [];
  while (i <= 100) {
    if (i % 3 == 0) {
      fizzArray.push(i);
    }
    i++;
  }
  console.log('Fizz', fizzArray);
}


//If a number is divisible by 5, log “Buzz.”
function buzz () {
  let i = 0;
  buzzArry = [];
  while (i <= 100) {
    if (i % 5 == 0) {
      buzzArry.push(i);
    }
    i++;
  }
  console.log('BUZZ', buzzArry);
}



//If a number is divisible by both 3 and 5, log “Fizz Buzz.”
function divFizzBuzz () {
  let i = 0;
  divFizzBuzzArray = [];
  while (i <= 100) {
    if (i % 3 == 0 && i % 5 == 0) {
      divFizzBuzzArray.push(i);
    }
    i++;
  }
  console.log('FIZZ - BUZZ', divFizzBuzzArray);
}



//If a number is not divisible by either 3 or 5, log the number.
function notDivFizzBuzz () {
  let i = 0;
  notDivFizzBuzzArray = [];
  while (i <= 100) {
    if (i % 3 !== 0 && i % 5 !== 0) {
      notDivFizzBuzzArray.push(i);
    }
    i++;
  }
  console.log('FIZZ - BUZZ - NOT DIV', notDivFizzBuzzArray);
}



//---------------- Part 2: Prime Time ------------------------------------------

// Prime Number Finder Function.

  // This function is to determine which number is prime and which is not.
    function primeFinder(number) {
        // Since 1 is not prime this will return false, 
        // and 2 is the only even prime number, it will return true 
        if (number <= 1) return false;
        if (number === 2) return true;
        
        // If the number is even and greater than 2 then it's not a prime number.
        if (number % 2 === 0) return false;
        
        // The equation from Google: factors from 3 to the square root of the number 
        for (let i = 3; i * i <= number; i += 2) {
            if (number % i === 0) return false;
        }
        return true;
    }

  //This function is to spcify the interval (startNumber, endNumber),
  //because the assignment did not specify start from which number.
  //I used startNumber instead of n.
    function findPrimes(startNumber, endNumber) {

      // I used push method to add the prime number to an array.
      let primes = [];
      for (let i = startNumber; i <= endNumber; i++) {
          if (primeFinder(i)) {
              primes.push(i);
              break;
          }
      }
      console.log(primes);
  }
  

//---------------- Functions Run -----------------------------

//Loop through all numbers from 1 to 100.
console.log('loop 1 to 100');
loop1To100();
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




// Part 2: Prime Time.
console.log('Part 2: Prime Time');

// Please set the start and end of the scope of numbers for more flexibilty in the search. 
// By default I put 5000 as a limit.
findPrimes(12,5000);
console.log("--------------------------------------")