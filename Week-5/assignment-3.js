const hasDuplicate =(arr)=>{
    return new Set(arr).size !== arr.length
}

console.log(hasDuplicate([1,5,-1,4,1]))