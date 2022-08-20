class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
}
  
let node1 = new Node(2);
let node2 = new Node(5);
let node3 = new Node(7);

node1.next = node2;
node2.next = node3;

function reverseList(node){

    let prev,next = null
    let curr = node;

    while(curr != null){
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    node = prev;
    return node;

}

function printList(node){
    while(node != null){
        console.log(node.data)
        node = node.next
    }
}

console.log('Normal linked list')
printList(node1)
console.log('*******************')
console.log('Reversed linked list')
printList(reverseList(node1))

/*
OUTPUT

Normal linked list
2
5
7
*******************
Reversed linked list
7
5
2

Time complexity :- O(n)
Space complexity:- O(1)
*/

