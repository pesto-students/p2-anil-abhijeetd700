// Method :- call

let detailsObject = {
    name:'Abhijeet',
    city:'Aurangabad',
    job:'Developer'
}

function sayHi(arg){
    console.log(' ')
    console.log('Inside sayHi() function')
    console.log(this.name)
    console.log(this.city)
    console.log(this.job)
    console.log(arg)
    console.log(' ')
}

/* 1. Using call method we change the refernce of "this" inside the function sayHi() to the detailsObject so that 
   all the properties of object are accessible inside the function sayHi()
   2. Additionally we can also pass extra arguments as when needed to the function sayHi() after passing the
   reference of object.
   3. In the example we have passed arg 'Hello nice to meet you' with the object to the sayHi()*/

sayHi.call(detailsObject,'Hello nice to meet you')


// Method :- apply
function sayHi1(...arg){
    console.log(' ')
    console.log('Inside sayHi1() function')
    console.log(this.name)
    console.log(this.city)
    console.log(this.job)
    console.log(arg)
    console.log(' ')
}
/* 1. The apply() function also does the same thing as call() the only difference is that we can pass 
      a variable number of arguments to the function sayHi1() as an array.
   2. It is useful in situations when we do not know first hand how many number of arguments will be passed to the
      calling function.  
*/
sayHi1.apply(detailsObject,['Hello','I am a Full stack Developer','Learning at Pesto'])

// Methos :- bind
function sayHi2(arg1){
    console.log(' ')
    console.log('Inside sayHi2() function')
    console.log(this.name)
    console.log(this.city)
    console.log(this.job)
    console.log(arg1)
}
/* 1. The bind() method creates a new function that, when called, has its this keyword set to the provided value, 
      with a given sequence of arguments.
   2. In the example below a new function (bindedFunc) is created which has the "this" keyword binded permanently
      to the object passed as reference to bind()
   3. Majorly .bind() returns a new func altogehter unlike .call & .apply which on the same function, so using bind()
      we can reuse the functions whenever needed.
*/


let bindedFunc = sayHi2.bind(detailsObject)
bindedFunc('Hello from bind')

let newObj = {
    name:'xyz',
    city:'Pune',
    job:'Ok'
}

// As we can see the reference of "this" cannot be changed to newObj passed to bindedFunc()
// But we can change the arguments passed to binded func
let newFunc = bindedFunc.bind(newObj)
newFunc('New')
