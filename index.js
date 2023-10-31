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
