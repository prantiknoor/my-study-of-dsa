class Queue {
    offset = 0;
    items = [];

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
        } else if (this.size() === 1) {
            const element = this.items[this.offset];
            this.items = [], this.offset = 0;
            return element;
        } else {
            return this.items[this.offset++];
        }
    }

    peek() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
        } else {
            return this.items[this.offset];
        }
    }

    size() {
        return this.items.length - this.offset;
    }

    isEmpty() {
        return this.size() === 0;
    }
}