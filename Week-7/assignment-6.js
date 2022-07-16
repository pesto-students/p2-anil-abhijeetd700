const popQueue = (stk) => {

    let rev = [];
    while (stk.length > 0) {
      rev.push(stk.pop());
    }
    return rev;
}

function out(str) {
    let arr = str.split("");

    let stk = [];
    let res = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 1) {
        stk.push(arr[i + 1]);
        i++;
        } 
        else {
            stk = popQueue(stk);
            if (stk.length > 0) {
                res.push(stk.pop());
            } else {
                res.push(-1);
            }
        }
    }
    return res;
}
  
console.log(out("12132142"));
console.log(out("122214"));

/*OUTPUT

--> 2,3
--> 2,-1

*/


  