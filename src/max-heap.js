const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];
		this.length = 0;
	}

	push(data, priority) {
		let node = new Node(data, priority);			
		this.insertNode(node);
		this.length += 1;
		this.shiftNodeUp(node);
	}

	pop() {
		if (this.length == 0) {
			return;
		} 
		this.length -= 1;
		let detached = this.detachRoot();
		this.restoreRootFromInsertedNode(detached);
		this.shiftNodeDown(this.root);
		return this.root.data;
	}

	detachRoot() {
		this.parentNodes.splice(1, 1);
		let detachedRoot = this.root;
		this.root = null;
		return detachedRoot;
	}

	restoreRootFromLastInsertedNode(detached) {
		//to be continued...
	}

	size() {
		return this.length;
	}

	isEmpty() {
		if (this.length == 0) {
			return true;
		} 
		return false;
	}

	clear() {
		this.root = null;
		this.parentNodes = [];
		this.length = 0;
	}

	insertNode(node) {
		if (this.length == 0) {
		  this.root = node;
		  this.parentNodes.push(node);
		} else {
		  this.parentNodes[0].appendChild(node);
		} 
	}

	shiftNodeUp(node) {
		//to be continued...
	}

	shiftNodeDown(node) {
		//to be continued...
	}
}

module.exports = MaxHeap;
