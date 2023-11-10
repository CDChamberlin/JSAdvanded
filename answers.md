# Module 3 part Advanced JS Lab

A markdown document to write out question answers for the Advance JS lab

## Question 1

## Question 2

The order will be printed in reverse order. #3 doesn't print first due to the delay in making a setTimeout.

## Question 5
Since setTimeout is a global function, it lost the data attached. You have bind it or wrap it i9n a function call.
Depending on how you create the clone, the original could change. Shallow clone and deep cloning prevent this, while 
saying carCopy = car will cause the overwrite of year to affect the original. 
