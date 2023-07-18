class Node {

    public value = null;
    public next = null;

    constructor(value: any){
        this.value = value;
    }

}

class LinkList {

    public head: Node | null = null;
    public tail: Node | null = null;
    public length = 0;
    
    constructor(value?: any){

        console.log("Loged")
        if(!value) return this;
        
        const newNode: Node = new Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;

        return this;
    }

}

export default LinkList;