// Javascript file (don't know the proper convention for setting headers)

let message;  // declaring a variable - JS convention is camel case. NB old method of declaring was to use 'var' and this still appears in old but active scripts
message = 'Hello!';

// OR let message = 'Hello!'; which would declare and set variable in one line

alert(message); // causes and alert popup on webpage - this pops up instantly on loading as there is no control flow to modify its behaviour to anything else

let user = 'Rob',
  age = 25


message = 'See you later'; // updating, so do not use 'let' again - doing so would trigger an error

  alert(message);

const COLOR_WHITE = "#ffffff"; // set a constant for an unchanging variable. conventionally constants in CAPS (if known prior to execution (?) ). constants can't be updated later, will trigger an error

console.log("Hello, World!");

console.log(2+3*4);

let a = 10;
let b = 7*a;

console.log(a);
console.log(b);

const MAX = 50;
const ACTUAL = 25;
const PERCENTAGE = ACTUAL/MAX;
console.log(PERCENTAGE);