class Node {
  constructor(data, priority) {
    this.data = data;
    this.priority = priority;
    this.parent = null;
    this.left = null;
    this.right = null;
	}

	appendChild(node) {
    let current = this;
		if (!current.left) {
			current.left = node;
			current.left.parent = current;
		} else if (current.left && !current.right) {
		current.right = node;
		current.right.parent = current;
	  }
		return current;
	}

	removeChild(node) {
    let current = this;
    
    if (current.left === node) {
    	current.left.parent = null;
    	current.left = null;
    } 

    if (current.right === node) {
    	current.right.parent = null;
    	current.right = null;
    }

    if (current.left && current.right) {
    	throw new Error();
    }
    return current;
	}

	remove() {
		let current = this;
    if (!current.parent) {
    	return
    } 
    current.parent.removeChild(current);
    return current;
	}

	swapWithParent() {
		let current = this;
		// if current has no parent --> finish
		if (!current.parent) {
			return;
		} 
    let buffer;
    // if current does have parent --> swap
		if (current.parent) {
			// if current has left child
      if (current.left) {
      	// parent of current's left child is current's parent
        current.left.parent = current.parent;
      }
      // if current has right child
      if (current.right) {
      	// parent of current's right child is current's parent
        current.right.parent = current.parent;
      }
       // if current is left child of it's parent
      if (current.parent.left === current) {
      	// and if current's parent has right child
        if (current.parent.right) {
        	// current is parent of it's parent's right child
          current.parent.right.parent = current;
        }
        // buffer value of current's left child
        buffer = current.left;
        // current's parent is it's left child
        current.left = current.parent;
        // current's left child is parent's left child
        current.parent.left = buffer;
        // buffer value of current's right child
        buffer = current.right;
        // parent's right child is current's rigth child
        current.right = current.parent.right;
        // current's right child is parent's right child
        current.parent.right = buffer;
      } else { // if current is right child of it's parent
        if (current.parent.left) { // if current's parent does have left child
        	// current is parent of it's parent's left child
          current.parent.left.parent = current;
        }
        // buffer value of current's left child
        buffer = current.left;
        // current's left child is left child of it's parent
        current.left = current.parent.left;
        // parent's left child is current's left child
        current.parent.left = buffer;
        // buffer value of current's right child
        buffer = current.right;
        // current's parent is current's right child
        current.right = current.parent;
        // parent's right child is current's right child
        current.parent.right = buffer;
      }
      // if current's parent has it's own parent
      if (current.parent.parent) {
      	// if current's parent is left child of it's own parent
        if (current.parent === current.parent.parent.left) {
        	// current is left child of it's parent's parent
          current.parent.parent.left = current;
        } else { // if current's parent is right child of it's own parent
        	//current is right child of it's parent's parent
          current.parent.parent.right = current;
        }
      }
      // buffer value of current's parent's parent
      buffer = current.parent.parent;
      // current is parent of it's parent
      current.parent.parent = current;
      // current's parent is parent of it's original parent
      current.parent = buffer;
    }
    return current;
  }
}


module.exports = Node;
