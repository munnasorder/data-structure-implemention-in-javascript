const MAX_SIZE = 15;

class Stack {
    constructor() {
        this.items = new Array(MAX_SIZE);
        this.size = -1;
    }

    push(item) {
        if (this.size === MAX_SIZE) {
            console.log('Stack Overflow');
            return
        };
        this.size++;
        this.items[this.size] = item;
        console.log('item added to stack')
    }

    pop() {
        if (this.isEmpty()) {
            console.log('Stack Underflow');
            return
        }
        const item = this.items[this.size];
        delete this.items[this.size--];
        console.log(item, 'removed from stack')
        return item;
    }

    peek() {
        if (this.isEmpty()) {
            console.log('Stack Underflow');
            return;
        }

        return this.items[this.size];
    }

    isEmpty() {
        return this.size < 0
    }
}

const stack = new Stack();


// Reverse a string using stack data structure
const str = 'Hello World!'
let reverseString = '';

for (let i = 0, length = str.length; i < length; i++) stack.push(str.charAt(i));
while(!stack.isEmpty()) reverseString += stack.pop();

console.log(reverseString)
// output !dlroW olleH