/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const brackets = { ")": "(", "}": "{", "]": "[" };
    const stack = new Stack();
    for(let char of s.split('')) {
        if (!brackets[char]) { stack.push(char); }
        else if (brackets[char] === stack.peek()) { stack.pop(); }
        else { return false; }
    }
    return stack.size() === 0;
};

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

console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
console.log(isValid("({()})")); // true