class PubSub{
    constructor(){
        this.substriber=[]
    }
    subscribe(object){
        this.substriber.push(object)
    }
    publish(message){
        const subscribers=this.substriber;
        for(let sub of subscribers){
            sub(message)
        }
    }
}

const pubSub=new PubSub();

function fun1(msg) {
    console.log(msg+"fun1")
}
function fun2(msg) {
    console.log(msg+"fun2")
}

pubSub.subscribe(fun1)

pubSub.subscribe(fun2)
pubSub.publish("Hello Observer pattern!!")