function customAll(promiseArray){
    const result=[]
    let count=0;
    return new Promise((resolve, reject)=>{
        promiseArray.forEach((promise,index)=>{
            if(typeof promise!=='object')
            {
                count++;
                result[index]= promise;
                return;
            }
            promise.then(res=>{
                result[index]=res;
                count++;
                if(count===promiseArray.length)
            resolve(result);
            })
            .catch(err=>{
                reject(err)
            })
        })
        
    })
}

const p1= new Promise((resolve,reject)=>{
    setTimeout(resolve,1000,'hello')
})
const p2= Promise.resolve(20);

customAll([1000,p2,p1]).then(res=> console.log(res))