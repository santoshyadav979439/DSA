function timer(init=0, step=1){
    let id;
    let count=init;
    function start(){
        id=setInterval(()=>{
            console.log(count)
           count=count+step
            
        },1000)
    }
    function stop(){
        clearInterval(id)
    }
    return {
        start, stop
    }
}
const tim=timer(10,1);
tim.start()