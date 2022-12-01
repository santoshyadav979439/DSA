function CustomPromise(executor){
    let onResolve;
    let onReject;
    function resolve(){
        
    }
    function reject(){
        
    }
    this.then= function(){

        return this;
    }
    this.catch= function(){

        return this;
    }

    executor(resolve,reject);
}