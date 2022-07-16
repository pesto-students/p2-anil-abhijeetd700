class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

// Creating a linked list with HEAD as node 1
let node1 = new Node(2)
let node2 = new Node(4)
let node3 = new Node(6)
let node4 = new Node(8)

node1.next = node2
node2.next = node3
node3.next = node4

function detectLoop(node){
 // Condition to check if the provided node in last node in the linked list.
 // If it is last node directly return FALSE as it last & will not be in the self loop

  if(node.next != null){
    // Will search the node provided as arg starting from the first node
    let curr = node1
    while(curr.next != null){
     // Check if the current node == to input node if not go over next node until null   
      if(curr.value != node.value){
         curr = curr.next
      }
     // If the input node is present return true as it will be linked to atleast one node   
      else{
         return true;
      } 
    }
  }
  else{
      return false;
  } 
}

console.log(detectLoop(node2))
console.log(detectLoop(node3))
console.log(detectLoop(node4))

/*
OUTPUT

true
true
false

Time complexity :- O(n)
Space complexity :- O(1)

*/