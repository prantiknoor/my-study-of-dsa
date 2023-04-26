# What is Queue?

Queue is data structure that follows FIFO(First in First out) principle. It is like a real life queue of people in a ticket counter. Who comes first, get ticket first.

# Basic operations of Queue

- **Enqueue**: push a element to the queue
- **Dequeue**: remove the top/first element from the queue
- **IsEmpty**: check if the queue is empty or not
- **Peek**: return the top/first element from the queue
- **Size**: get the size of the queue

# My Implementation of Queue

```js
class Queue {
    front = 0;
    rear = 0;
    items = [];

    enqueue(element) {
        this.items[this.rear++] = element;
    }

    dequeue() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
        } else if (this.size() === 1) {
            const element = this.items[this.front];
            this.items = [], this.front = 0, this.rear = 0;
            return element;
        } else {
            return this.items[this.front++];
        }
    }

    peek() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
        } else {
            return this.items[this.front];
        }
    }

    size() {
        return this.rear - this.front;
    }

    isEmpty() {
        return this.size() === 0;
    }
}
```

# Runtime complexity of operations of a Queue

The time complexity of operations of a Queue is constant. i.e. `O(1)`. The space complexity of it is linear. i.e. `O(n)`. 