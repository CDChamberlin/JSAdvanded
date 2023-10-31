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
let counter1 = makeCounter(undefined,2);
let counter2 = makeCounter(1)
counter1(); // 2
counter1(); // 4
counter2(); // 2

// Question 2

/*  function delayMsg(msg)
{
console.log(`This message will be printed after a delay: ${msg}`)
} 
 */
const delayMsg = (msg) => console.log(`This message will be printed after a delay: ${msg}`)
setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
delayMsg('#4: Not delayed at all')
const m5 = setTimeout(delayMsg, 1e4, `#5 delayed by 10 seconds`)
clearTimeout(m5)