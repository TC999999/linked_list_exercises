// SINGLY LINKED LISTS

class Node {
  // Class for Singly Linked List Nodes
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class LinkedList {
  // Class for Singly Linked List
  constructor() {
    this.head = null;
    this.tail = null;
  }

  push(val) {
    // Pushing a value to the end of a linked list
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  unshift(val) {
    // Pushing a value to the start of a linked list
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  pop() {
    // Removing a value from the end of a linked list
    if (!this.head) {
      throw new Error("Linked list is Empty");
    } else {
      let currentNode = this.head;
      let hold = currentNode.next;
      while (currentNode) {
        if (hold.next === null) {
          let returnVal = hold.val;
          this.tail = currentNode;
          currentNode.next = null;
          return returnVal;
        } else {
          currentNode = currentNode.next;
          hold = hold.next;
        }
      }
    }
  }

  shift() {
    // Removing a value from the start of a linked list
    if (!this.head) {
      throw new Error("Linked list is Empty");
    } else {
      let currentNode = this.head;
      let hold = currentNode.next;
      let returnVal = currentNode.val;
      this.head = hold;
      currentNode = null;
      return returnVal;
    }
  }

  idxLen() {
    // Finds the max index of the linked list
    let len = -1;
    let currentNode = this.head;
    while (currentNode) {
      len++;
      currentNode = currentNode.next;
    }
    return len;
  }

  getAt(idx) {
    // Returns the value at the index idx of the linked list
    if (!this.head) {
      throw new Error("Linked list is Empty");
    } else if (idx > this.idxLen() || idx <= -1) {
      return new Error(`Please type an index between 0 and ${this.idxLen()}`);
    } else {
      let currentNode = this.head;
      for (let i = 0; i <= idx - 1; i++) {
        currentNode = currentNode.next;
      }
      return currentNode.val;
    }
  }

  setAt(idx, val) {
    // Sets the value at the index idx of the linked list to val
    if (!this.head) {
      throw new Error("Linked list is Empty");
    } else if (idx > this.idxLen() || idx <= -1) {
      return new Error(`Please type an index between 0 and ${this.idxLen()}`);
    } else {
      let currentNode = this.head;
      for (let i = 0; i <= idx - 1; i++) {
        currentNode = currentNode.next;
      }
      currentNode.val = val;
    }
  }

  insertAt(idx, val) {
    // Inserts value val at index idx of the linked List
    if (!this.head) {
      throw new Error("Linked list is Empty");
    } else if (idx > this.idxLen() || idx <= 0) {
      return new Error(`Please type an index between 1 and ${this.idxLen()}`);
    } else {
      let currentNode = this.head;
      let newNode = new Node(val);
      for (let i = 0; i <= idx - 2; i++) {
        currentNode = currentNode.next;
      }
      newNode.next = currentNode.next;
      currentNode.next = newNode;
    }
  }

  removeAt(idx) {
    // Removes the value at index idx of the linked list
    if (!this.head) {
      throw new Error("Linked list is Empty");
    } else if (idx > this.idxLen() - 1 || idx <= 0) {
      return new Error(
        `Please type an index between 1 and ${this.idxLen() - 1}`
      );
    } else {
      let currentNode = this.head;
      let hold = currentNode.next;
      for (let i = 0; i <= idx - 2; i++) {
        currentNode = currentNode.next;
        hold = hold.next;
      }
      currentNode.next = hold.next;
      hold = null;
    }
  }

  average() {
    // Finds the average of a linked list of numbers
    if (!this.head) {
      throw new Error("Linked list is Empty");
    } else {
      let currentNode = this.head;
      let sum = 0;
      while (currentNode) {
        sum = sum + currentNode.val;
        currentNode = currentNode.next;
      }
      return sum / (this.idxLen() + 1);
    }
  }

  reverse() {
    // Reverses the linked list in place
    if (!this.head) {
      throw new Error("Linked list is Empty");
    } else {
      let currentNode = this.tail;
      let topNode = this.head;
      for (let i = 1; i <= this.idxLen(); i++) {
        this.head = topNode.next;
        topNode.next = currentNode.next;
        currentNode.next = topNode;
        topNode = this.head;
      }
      while (topNode) {
        if (topNode.next === null) {
          this.tail = topNode;
        }
        topNode = topNode.next;
      }
    }
  }
}

// DOUBLY LINKED LISTS

class DBNode {
  // Class for Doubly Linked List Nodes
  constructor(val, next = null, prev = null) {
    this.val = val;
    this.prev = prev;
    this.next = next;
  }
}

class DBLinkedList {
  // Doubly Linked List Class
  constructor() {
    this.head = null;
    this.tail = null;
  }

  push(val) {
    // Pushing a value to the end of a Doubly Linked List
    const newNode = new DBNode(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
  }

  unshift(val) {
    // Pushing a value to the start of a Doubly Linked List
    const newNode = new DBNode(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
  }

  pop() {
    // Removing a value from the end of a doubly linked list
    if (!this.head) {
      throw new Error("Linked list is Empty");
    } else {
      let currentNode = this.head;
      while (currentNode) {
        if (currentNode.next === null) {
          let returnVal = currentNode.val;
          this.tail = currentNode.prev;
          this.tail.next = null;
          return returnVal;
        } else {
          currentNode = currentNode.next;
        }
      }
    }
  }

  shift() {
    // Removing a value from the start of a doubly linked list
    if (!this.head) {
      throw new Error("Linked list is Empty");
    } else {
      let currentNode = this.head;
      let returnVal = currentNode.val;
      this.head = currentNode.next;
      this.head.prev = null;
      return returnVal;
    }
  }

  idxLen() {
    // Finds the max index of the doubly linked list
    let len = -1;
    let currentNode = this.head;
    while (currentNode) {
      len++;
      currentNode = currentNode.next;
    }
    return len;
  }

  getAt(idx) {
    // Returns the value at the index idx of the doubly linked list
    if (!this.head) {
      throw new Error("Linked list is Empty");
    } else if (idx > this.idxLen() || idx <= -1) {
      return new Error(`Please type an index between 0 and ${this.idxLen()}`);
    } else {
      let currentNode = this.head;
      for (let i = 0; i <= idx - 1; i++) {
        currentNode = currentNode.next;
      }
      return currentNode.val;
    }
  }

  setAt(idx, val) {
    // Sets the value at the index idx of the doubly linked list to val
    if (!this.head) {
      throw new Error("Linked list is Empty");
    } else if (idx > this.idxLen() || idx <= -1) {
      return new Error(`Please type an index between 0 and ${this.idxLen()}`);
    } else {
      let currentNode = this.head;
      for (let i = 0; i <= idx - 1; i++) {
        currentNode = currentNode.next;
      }
      currentNode.val = val;
    }
  }

  insertAt(idx, val) {
    // Inserts value val at index idx of the doubly linked List
    if (!this.head) {
      throw new Error("Linked list is Empty");
    } else if (idx > this.idxLen() || idx <= 0) {
      return new Error(`Please type an index between 1 and ${this.idxLen()}`);
    } else {
      let currentNode = this.head;
      let newNode = new DBNode(val);
      for (let i = 0; i <= idx - 2; i++) {
        currentNode = currentNode.next;
      }
      newNode.next = currentNode.next;
      newNode.prev = currentNode;
      currentNode.next = newNode;
      newNode.next.prev = newNode;
    }
  }

  removeAt(idx) {
    // Removes the value at index idx of the doubly linked list
    if (!this.head) {
      throw new Error("Linked list is Empty");
    } else if (idx > this.idxLen() - 1 || idx <= 0) {
      return new Error(
        `Please type an index between 1 and ${this.idxLen() - 1}`
      );
    } else {
      let currentNode = this.head;
      let hold = currentNode.next;
      for (let i = 0; i <= idx - 1; i++) {
        currentNode = currentNode.next;
        hold = hold.next;
      }
      let last = currentNode.prev;
      hold.prev = last;
      last.next = hold;
      currentNode.next = null;
      currentNode.prev = null;
    }
  }

  average() {
    // Finds the average of a doubly linked list of numbers
    if (!this.head) {
      throw new Error("Linked list is Empty");
    } else {
      let currentNode = this.head;
      let sum = 0;
      while (currentNode) {
        sum = sum + currentNode.val;
        currentNode = currentNode.next;
      }
      return sum / (this.idxLen() + 1);
    }
  }

  reverse() {
    // Reverses the doubly linked list in place
    if (!this.head) {
      throw new Error("Linked list is Empty");
    } else {
      let currentNode = this.tail;
      let topNode = this.head;
      for (let i = 1; i <= this.idxLen(); i++) {
        this.head = topNode.next;
        topNode.next = currentNode.next;
        currentNode.next = topNode;
        topNode.prev = this.head;
        topNode = this.head;
        this.head.prev = null;
      }
      while (topNode) {
        if (topNode.next === null) {
          this.tail = topNode;
        }
        topNode = topNode.next;
      }
    }
  }
}
