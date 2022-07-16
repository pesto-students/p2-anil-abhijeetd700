function add(...args){
    let sum = 0;
    args.forEach((value)=>{
       sum += value
    })
    return sum;
}

function time(fn){
    console.time()
    console.log(fn())
    console.timeEnd()
}

const memoize = (fn) => {
    let cache = {}
    return (...args)=>{
        
        if(args in cache){
            console.log(`Present in Cache returning the result of addition of ${args}`)
            return cache[args]
        }
        else{
            console.log(`Not in Cache calculating the result of addition of ${args}`)
            let result = fn(...args)
            cache[args] = result
            return result
        }
    }
}

const memoizeAdd = memoize(add);

console.log(time(()=>memoizeAdd(2,3,4,6)))
console.log(time(()=>memoizeAdd(2,3,4,6)))
console.log(time(()=>memoizeAdd(100,200)))
console.log(time(()=>memoizeAdd(100,100)))
console.log(time(()=>memoizeAdd(100,200)))


