class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}
class LinkedList{
    constructor(){
        this.head=null;
        this.size=0;
    }
    addLast(data){
        const node = new Node(data);
        let current=this.head;
        if(current==null){
            this.head =node;
        }
        else{
            while(current.next!==null){
                current=current.next;
            }
            current.next=node;
            
        }
        this.size++;
    }
    addFirst(data){
        let node = new Node(data);
        node.next=this.head;
        this.head = node;
    }
    getList(){
        let current=this.head;
        while(current!==null){
            console.log(current.data);
            current=current.next;
        }
    }
}
let list = new LinkedList();
list.addLast(4);
list.addLast(5);
list.addLast(6);
list.addFirst(10);
list.getList();