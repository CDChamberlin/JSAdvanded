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
/* let counter1 = makeCounter(undefined, 2);
let counter2 = makeCounter(1);
counter1(); // 2
counter1(); // 4
counter2(); // 2 */

// Question 2

/*  function delayMsg(msg)
{
console.log(`This message will be printed after a delay: ${msg}`)
} 
 */
/* const delayMsg = (msg) =>
  console.log(`This message will be printed after a delay: ${msg}`);
setTimeout(delayMsg, 100, "#1: Delayed by 100ms");
setTimeout(delayMsg, 20, "#2: Delayed by 20ms");
setTimeout(delayMsg, 0, "#3: Delayed by 0ms");
delayMsg("#4: Not delayed at all");
const m5 = setTimeout(delayMsg, 1e4, `#5 delayed by 10 seconds`);
clearTimeout(m5); */

// Question 3
function printMe(msg) {
  console.log("printing debounced message: " + msg);
}
printMe = debounce(printMe); //create this debounce function for a) 
// Can also add a delay to this, otherwise defults to 1 second. 
function debounce(fucn, timer = 1000) {
  let delay;

  return (msg) => {
    clearTimeout(delay);
    delay = setTimeout(fucn, timer, msg);
  };
}
//fire off 3 calls to printMe within 300ms - only the LAST one should print, after 1000ms of no calls
setTimeout(printMe, 100, "message 1");
setTimeout(printMe, 200, "message 2");
setTimeout(printMe, 300, "message 3");
