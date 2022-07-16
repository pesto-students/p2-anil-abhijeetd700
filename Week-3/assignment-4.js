function createStack() {
    return {
      items: [],
      push: function (item) {
        this.items.push(item);
        console.log("Items array after push method execution");
        console.log(this.items);
      },
      pop: function () {
        this.items.pop();
        console.log("Items array after pop method execution");
        console.log(this.items);
      }
    };
}
  
const stack = createStack();
stack.push(10);
stack.push(5);
stack.pop();
  
/* Problem Explanation
   1. Earlier we where not able to access the items array which was returned by the function createStack() because
      the reference of "this" inside the method push & pop pointed to global object as per the previous function
      declaration.
   2. By refactoring and defining the function in the specified way as above in the code we make it possible to 
      define the context of "this" inside the fn by calling it on the object returned by the clousre fn createdStack()
   3. So when createStack() is called it return a closure fn which is nothing but the entire obj having key value 
      pairs.
   4. When the any closure method is called along with the above returned object the refernce of "this" is changed to
      the object itself thus making it possible to access the items array inside the push() & pop() 
*/