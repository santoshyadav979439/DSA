 class Node{
        constructor(data) {
            this.data= data;
            this.next= null;
        }
    }
class LinkedList{
   
    constructor(){
        this.head= null;
        this.next= null;
    }
    addNode(data){
      const node = new Node(data);  
        let current= this.head;
        if(current==null){
            this.head=node;
            return;
        }
        while(current.next)
            current= current.next;
        current.next= node;
    }
    print(){
          let current= this.head;
        while(current){
            console.log(current.data+" ")
             current= current.next;
            
        }
           
    }
}