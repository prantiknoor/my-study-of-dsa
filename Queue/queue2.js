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