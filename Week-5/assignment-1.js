async function* generateSeq(start,end){

    for(let i=start;i<=end;i++){
        await new Promise((resolve,reject)=>{
            setTimeout(()=>{
                console.log('Promise resolved')
                resolve()
            },2000)
        })
        yield await i;
    }
    
}

let genObj = generateSeq(2,5);

genObj.next().then(({value,done})=>{
    console.log({value,done})
})
genObj.next().then(({value,done})=>{
    console.log({value,done})
})
genObj.next().then(({value,done})=>{
    console.log({value,done})
})