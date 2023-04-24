class Stack {
    array = [];

    push = (item) => this.array.push(item);

    pop = () => this.array.pop();

    peek = () => this.array.at(-1);

    isEmpty = () => this.array.length === 0;

    size = () => this.array.length;
}