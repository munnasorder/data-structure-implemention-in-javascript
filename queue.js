const MAX_SIZE = 15;

class Queue {
    constructor(){
        this.front = 0;
        this.rear = 0;
        this.items = new Array(MAX_SIZE);
    }

    enQueue(item) {
        if (this.rear === MAX_SIZE) {
            console.log('queue is full');
            return
        }
        this.items[this.rear++] = item;
    }

    deQueue() {
        if (this.isEmpty()) {
            console.log('queue is empty');
            return;
        }
        const item = this.items[this.rear];
        for (let i = this.front; i < this.rear - 1; i++) {
            this.items[i] = this.items[i + 1]
        };
        delete this.items[--this.rear];
        return item;
    }

    showQueue() {
        if (this.isEmpty()) {
            log('queue is empty');
            return;
        }
        const items = []
        for (let i = this.front; i < this.rear; i++) {
            items.push(this.items[i])
        }
        return items;
    }

    next() {
        if (this.isEmpty()) {
            log('queue is empty');
            return;
        }
        return this.items[this.front]
    }

    isEmpty() {
        if (this.rear === this.front) {
            return rue
        }
        return false
    }
}

const queue = new Queue();

queue.enQueue(10)
queue.enQueue(20)
queue.enQueue(30)
queue.deQueue()
console.log(queue.showQueue());
console.log(queue.next());
console.log(queue.isEmpty());