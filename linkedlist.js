// Define Node class
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// Define LinkedList class
class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    // Append a node to the end of the list
    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let currentNode = this.head;
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = newNode;
        }
        this.length++;
    }

    // Prepend a node to the beginning of the list
    prepend(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }

    // Traverse the list and display all values
    traverse() {
        let currentNode = this.head;
        while (currentNode) {
            console.log(currentNode.data);
            currentNode = currentNode.next;
        }
    }

    // Delete a node from the specified index
    deleteAtIndex(index) {
        if (index >= this.length || index < 0) {
            console.log("Invalid index");
            return;
        }
        if (index === 0) {
            this.head = this.head.next;
        } else {
            let currentNode = this.head;
            let prevNode = null;
            let i = 0;
            while (i < index) {
                prevNode = currentNode;
                currentNode = currentNode.next;
                i++;
            }
            prevNode.next = currentNode.next;
        }
        this.length--;
    }

    // Insert a node at the specified index
    insertAtIndex(data, index) {
        if (index > this.length || index < 0) {
            console.log("Invalid index");
            return;
        }
        if (index === 0) {
            this.prepend(data);
            return;
        }
        const newNode = new Node(data);
        let currentNode = this.head;
        let prevNode = null;
        let i = 0;
        while (i < index) {
            prevNode = currentNode;
            currentNode = currentNode.next;
            i++;
        }
        prevNode.next = newNode;
        newNode.next = currentNode;
        this.length++;
    }

    // Reverse the linked list
    reverse() {
        let prevNode = null;
        let currentNode = this.head;
        while (currentNode) {
            let nextNode = currentNode.next;
            currentNode.next = prevNode;
            prevNode = currentNode;
            currentNode = nextNode;
        }
        this.head = prevNode;
    }
}

// Create linked list object
const linkedList = new LinkedList();

// Append node to linked list
linkedList.append(10);
linkedList.append(20);
linkedList.append(100);
linkedList.append(30);
linkedList.append(40);
linkedList.append(50);

// Prepend node to linked list
linkedList.prepend(5);

// Traverse the linked list
linkedList.traverse();

// Delete node from index
linkedList.deleteAtIndex(2);

// Insert node at index
linkedList.insertAtIndex(25, 2);

// Reverse the linked list
linkedList.reverse();

// Traverse the linked list again to see changes
linkedList.traverse();
