function printNGE(arr) {
    let stk = [];
    let res = [];
  
    stk.push(arr[0]);
  
    for (let i = 1; i < arr.length; i++) {
      if (stk.length === 0){
        stk.push(arr[i]);
        continue;
      }
  
      while (stk.length !== 0 && arr[i] > stk[stk.length - 1]) {
        res.push(arr[i]);
        stk.pop();
      }
      stk.push(arr[i]);
    }
    while (stk.length !== 0) {
      res.push(-1);
      stk.pop();
    }
    return res;
}
  
console.log(printNGE([11, 13, 21, 3]));
console.log(printNGE([1, 3, 2, 4]));

/*

OUTPUT

[ 13, 21, -1, -1 ]
[ 3, 4, 4, -1 ]

Time complexity:- O(n)
Space complexity:- O(1)
*/
  