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

class RecentCounter {
    constructor() {
        this.requests = new Queue();
    }

    ping(t) {
        this.requests.enqueue(t);
        while (true) {
            if (t - this.requests.peek() > 3000) {
                this.requests.dequeue();
            } else {
                break;
            }
        }
        return this.requests.size();
    }
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */