function createIncrement() {
    let count = 0;
  
    function increment() {
      count++;
    }
    let msg = `count is ${count}`;
    
    function log() {
      console.log(msg);
    }
    return [increment, log];
  }
  
const [increment, log] = createIncrement();
increment();
increment();
increment();
log();

/*
The output of the following code would be 
"Count is 0"

1. When we call the createIncrement() fn it would return two nested fun increment() & log() & would be stored into
   variables increment & log.
2. Since the createIncrement() is called the value of count var inside the fn will be initialized to 0 as well as the
   msg var will be initialsed to "count is 0"
3. After executing the increment() 3 times the count var becomes 3 as the increment() returned by calling createIncrement()
   is a type of closure function so the inner func will be having access to it's parent's variable also, the concept
   called as lexical scoping.
4. As we have executed createIncrement() method just once the value of msg variable will not change since the time 
   when it was first called so we get on the console the output as "count is 0" 
*/

  