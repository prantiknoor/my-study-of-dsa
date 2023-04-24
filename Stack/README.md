## What is **Stack**?

Stack is a linear data structure that follows **LIFO (Last in First out)** principle.

### LIFO (Last in First out) principle

It means, the last item inserted will be get out first.

## Basic Operations of Stack

- **Push**: Add new element to the top of stack
- **Pop**: Remove the last/top element and return it
- **Peek**: Read the last/top element without removing it
- **isEmpty**: Check if the stack is empty or not
- **Size**: Get the size of the stack

## My **Stack** implementation in JavaScript

```js
class Stack {
    constructor() {
        this.array = [];
    }

    push(item) {
        this.array.push(item);
    }

    pop() {
        return this.array.pop();
    }

    peek() {
        return this.array.at(-1);
    }

    isEmpty() {
        return this.array.length === 0;
    }

    size() {
        return this.array.length;
    }
}
```

## Time Complexity

For this implementation, the operations take constant time, i.e. `O(1)`