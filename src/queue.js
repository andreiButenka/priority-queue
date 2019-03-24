const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize) {
    this.maxSize = maxSize || 30;
    this.heap = new MaxHeap();
	}

	push(data, priority) {
		if (this.heap.length >= this.maxSize) {
		throw new Error();
		} else {
    this.heap.push(data, priority);
    }
	}

	shift() {
		if (this.heap.isEmpty()) {
		throw new Error();
		} else { 
			this.heap.pop();
		}
	}

	size() {
    return this.heap.size();
	}

	isEmpty() {
		if (this.heap.size() == 0) {
			return true;
		} 
		return false;
	}
}

module.exports = PriorityQueue;
