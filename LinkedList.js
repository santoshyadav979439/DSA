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
        this.size++;
    }
    getList(){
        let current=this.head;
        while(current!==null){
            process.stdout.write(current.data+" ");
            current=current.next;
        }
    }
    deleteIndex(index){
    
        let current= this.head;
        let prev=null;
        let next=null;
        let count=0;
        if(index<0 || index>this.size-1)
        return;
        if(current==null || current.next==null)
        return null;
        if(index==0){
            this.head=current.next;
            return;
        }
        while(current!=null){
          //  process.stdio.out(current.data)
            if(count==index){
            prev.next=current.next;
            current.next=null;
            this.size--;
            }
           
            next=current.next;
            prev=current;
            current=next;
            count++;
        }
    }
}
let list = new LinkedList();
list.addLast(4);
list.addLast(5);

list.addLast(6);
list.addFirst(10);
list.deleteIndex(3);
list.getList();