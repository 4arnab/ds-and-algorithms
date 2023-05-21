/**
 * LIFO -> last in first out
 * this means the the last element added to be the first element to be removed
 *  */

class Stack {
  stack = [];
  constructor() {
    this.stack = [];
  }
  push(element) {
    this.stack.push(element); // add the element to the stack
    return element;
  }

  pop() {
    return this.stack.pop(); // removes element end of the stack
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  size() {
    return this.stack.length;
  }
  print() {
    console.log(this.stack);
  }
}

const stack = new Stack();
stack.push({ name: "ahmed", age: 12 });
stack.push({ name: "mohamed", age: 13 });
stack.push({ name: "cabdi", age: 10 });
// console.log(stack.isEmpty());
console.log(stack.size());
stack.print();
stack.print();
