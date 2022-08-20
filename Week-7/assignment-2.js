
class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}

let head;

function rotate(k) {
    if (k == 0)
        return;

    var current = head;

    // current will either point to kth or NULL
    var count = 1;
    while (count < k && current != null) {
        current = current.next;
        count++;
    }

    // current points to kth node.
    var kthNode = current;

    // current will point to last node after this loop
    while (current.next != null)
        current = current.next;

    // Change next of last node to previous head
    current.next = head;

    // Change head to (k+1)th node head
    head = kthNode.next;

    // change next of kth node to null
    kthNode.next = null;
}

	
function push(new_data) {
    /*
    Allocate the Node & Put in the data
    */
    var new_node = new Node(new_data);

    /* Make next of new Node as head */
    new_node.next = head;

    /* Move the head to point to new Node */
    head = new_node;
}

function printList() {
    var temp = head;
    while (temp != null) {
        console.log(temp.data)
        temp = temp.next;
    }
}

let arr = [2,4,7,8,9]
for (i = (arr.length-1); i >= 0; i --)
    push(arr[i]);

console.log("Given list");
printList();

rotate(3);

console.log("Rotated Linked List");
printList();

/*
OUTPUT

Given list
2
4
7
8
9
Rotated Linked List
8
9
2
4
7

Time complexity :- O(n)
Space complexity :- O(1)
*/
