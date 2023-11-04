// Question 1
//starting code
function makeCounter(startFrom = 0, incrementBy = 1) {
  let currentCount = startFrom;
  return function () {
    currentCount += incrementBy;
    console.log(currentCount);
    return currentCount;
  };
}
let counter1 = makeCounter(undefined, 2);
let counter2 = makeCounter(1);

/*
counter1(); // 2
counter1(); // 4
counter2(); // 2
*/

// Question 2

/*  function delayMsg(msg)
{
console.log(`This message will be printed after a delay: ${msg}`)
} 
 */

/*
const delayMsg = (msg) =>
  console.log(`This message will be printed after a delay: ${msg}`);
setTimeout(delayMsg, 100, "#1: Delayed by 100ms");
setTimeout(delayMsg, 20, "#2: Delayed by 20ms");
setTimeout(delayMsg, 0, "#3: Delayed by 0ms");
delayMsg("#4: Not delayed at all");
const m5 = setTimeout(delayMsg, 1e4, `#5 delayed by 10 seconds`);
clearTimeout(m5);
*/

// Question 3

/*
function printMe() {
  console.log("printing debounced message");
}
//printMe = debounce(printMe); //create this debounce function for a)
function debounce(fucn) {}
//fire off 3 calls to printMe within 300ms - only the LAST one should print, after 1000ms of no calls
setTimeout(printMe, 100);
setTimeout(printMe, 200);
setTimeout(printMe, 300);
*/

// Question 4
/* Code to compute fibonacci numbers */
function fib(num, memo) {
  memo = memo || {};

  if (memo[num]) return memo[num];
  if (num <= 1) return 1;

  return (memo[num] = fib(num - 1, memo) + fib(num - 2, memo));
}

function printFibonacci(limit = Infinity) {
  let current = 0;
  let timer = setInterval(function () {
    console.log(fib(current));
    if (current === limit) clearInterval(timer);
    current++;
  }, 2000);
}
//printFibonacci()

function printFibonacciTimeouts(limit = 20) {
  let start = 0;
  setTimeout(function go() {
    console.log(fib(start));
    if (true) setTimeout(go, 1000);
    start++;
  }, 1000);
}

//printFibonacciTimeouts()

// Question 5
// given code
let car = {
  make: "Porsche",
  model: "911",
  year: 1964,
  description() {
    console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
  },
};
// car.description(); //works
carShallow = { ...car };
carDeep = JSON.parse(JSON.stringify(car)); // creates a deep clone
carShallow.year = 1966;
carDeep.model = "901";
/*
setTimeout(function () {
  car.description();
}, 200); //fails // fixed
*/
/*
setTimeout(car.description.bind(car), 1000);
*/
// Question 6
//given code
function multiply(a, b, c = 1, d = 1) {
  console.log(a * b * c * d);
}
Function.prototype.delay = function (time, ...params) {
  setTimeout(() => this(...params), time);
}; // Due to Arrow expression, it must be defined before first call
// multiply.delay(500,5, 5, 2, 20); // prints 25 after 500 milliseconds
// printFibonacci.delay(500, 9) test to see if delay works on a function with 4 and 1 paramater at the same time.

// Question 7
// given
function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  Object.prototype.toString = () => {
    return `I'm ${this.name}, a ${this.age} old ${this.gender}`;
  };
}
/*  const person1 = new Person('James Brown', 73, 'male')
  console.log('person1: '+person1) //prints person1: [object Object]
const person2 = new Person('Jimmy', 12, 'male')
//const person4 = new Person('Cindy', 13, 'female')
console.log('person 2: '+person2)
console.log('person 1: '+person1) */

// Question 8
// given
class DigitalClock {
  constructor(prefix) {
    this.prefix = prefix;
  }
  display() {
    let date = new Date();
    //create 3 variables in one go using array destructuring
    let [hours, mins, secs] = [
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
    ];
    if (hours < 10) hours = "0" + hours;
    if (mins < 10) mins = "0" + mins;
    if (secs < 10) secs = "0" + secs;
    console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
  }
  stop() {
    clearInterval(this.timer);
  }
  start() {
    this.display();
    this.timer = setInterval(() => this.display(), 1000);
  }
}
const myClock = new DigitalClock("my clock:");
myClock.start();

class PrecisionClock extends DigitalClock{
  ticks 
  constructor(prefix, precision = 1000){
    super(prefix)
    this.ticks = precision;
  }
  start(){
    super.display();
    this.timer = setInterval(() => this.display(), this.ticks)
  }

}

const myPrecisionClock1 = new PrecisionClock('my Precision Clock');
const myPrecisionClock2 = new PrecisionClock('my Precision Clock 2', 500);
myPrecisionClock1.start()
myPrecisionClock2.start()