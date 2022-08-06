import Node from "./Node.js";

// The nextNodes update as appending/deleting nodes
const LinkedList = () => {
  let list = [];

  const size = () => {
    return list.length;
  }

  const updateNextNode = () => {
    // helper function
    for (let i = size() - 2; i >= 0; i--) {
      list[i].nextNode = list[i + 1];
    }
  }

  const append = (val) => {
    //adds a new node to the end of the list
    if (size() > 0) {
      list[size() - 1].nextNode = Node(val, null);
    }
    list.push(Node(val, null));
    updateNextNode();
  }

  const prepend = (val) => {
    if (size() === 0) {
      list.unshift(Node(val, null));
    } else {
      list.unshift(Node(val, list[0]));
    }
  }

  const head = () => {
    return size() === 0 ? null : list[0];
  }

  // return last node in list
  const tail = () => {
    return size() === 0 ? null : list[size() - 1];
  }

  const at = (index) => {
    if (index < 0 || index >= size()) {
      throw new Error(`Can't get node at ${index} in linked list`)
    }
    return list[index];
  }

  const pop = () => {
    if (size() === 0) {
      throw new Error(`Can't pop empty linked list`);
    }
    if (size() >= 2) {
      list[size() - 2].nextNode = null;
    }
    list.pop();
  }

  const contains = (val) => {
    return list.some(node => node.val === val);
  }

  const find = (val) => {
    const index = list.findIndex(node => node.val === val)
    return index === -1 ? null : index;
  }

  const toString = () => {
    return `${list.reduce((str, node) => {
      return `${str}(${node.val})->`;
    }, '')}(null)`
  }

  // Extra functions
  const insertAt = (val, index) => {
    if (index < 0 || index >= size()) {
      throw new Error('Out of index');
    }
    list.splice(index, 0, Node(val, null));// The next node of new node will be updated
    updateNextNode();
  }

  const removeAt = (index) => {
    if (index < 0 || index >= size()) {
      throw new Error('Out of index');
    }
    list.splice(index, 1);
    updateNextNode();
  }

  return { size, append, prepend, head, tail, at, pop, contains, find, toString, insertAt, removeAt }
}

export default LinkedList;