class Queue {
    front = -1;
    rear = -1;
    constructor(size) {
        this.size = size;
        this.items = new Array(size);
    }

    isFull() {
        return this.front === 0 && this.rear === this.size - 1;
    }

    isEmpty() {
        return this.front === -1;
    }

    enqueue(element) {
        if(this.isFull()) {
            console.log("Queue is full");
        } else {
            if(this.front === -1) this.front = 0;
            this.items[++this.rear] = element;
        }
    }

    dequeue() {
        if(this.isEmpty()) {
            console.log("Queue is empty");
        } else {
            return this.items[this.front++];
        }
    }
}