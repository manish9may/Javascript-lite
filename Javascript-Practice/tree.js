const Node = function(data){
	this.data = data;
	this.left = null;
	this.right = null;
}

const Tree = function(){
	this.root = null;
}

Tree.prototype.addNode = function(data){
	let node = new Node(data),currentNode = null;
	if(this.root === null){
		this.root = node;
	}else{
		currentNode = this.root;
		while(currentNode){
			if(currentNode.data > data){
				if(currentNode.left === null){
					currentNode.left = node;
					break;
				}else{
					currentNode = currentNode.left;
				}
			}else if(currentNode.data < data){
				if(currentNode.right === null){
					currentNode.right = node;
					break;
				}else{
					currentNode = currentNode.right;
				}
			}else{
				break;
			}
		}
	}
}
Tree.prototype.findNode = function(data){
	let currentNode = this.root,found = false;
	while(currentNode){
		if(data < currentNode.data){
			currentNode = currentNode.left;
		}else if(data > currentNode.data){
			currentNode = currentNode.right;
		}else{
			found = true;
			break;
		}
	}
	return found;
}
/** Pre-Order In-order Post Order**/
Tree.prototype.inOrderTraverse = function(){
	let currentNode = this.root;
	function traverse(node){
		if(node === null){
			return;
		}
		traverse(node.left);
		console.log(node.data);
		traverse(node.right);
	}
	traverse(currentNode);
}
Tree.prototype.depth = function(){
	let currentNode = this.root;
	function depth(node){
		if(node === null){
			return 0;
		}
		let lDepth = depth(node.left);
		let rDepth = depth(node.right);
		if(lDepth > rDepth){
			return lDepth + 1;
		}else{
			return rDepth + 1;
		}
	}
	return depth(currentNode);
	
}
Tree.prototype.traverseBFS = function(){
	const currentNode = this.root;
	const queue = [];
	queue.push(this.root)
	while (queue.length) {
    let currentNode = queue.shift();
    if (currentNode.left) {
      	queue.push(currentNode.left)
    }

    if (currentNode.right) {
      	queue.push(currentNode.right)
    }
    console.log(currentNode.data)
  }
}

Tree.prototype.sideView = function(){
	const queue = [];
	queue.push(`$`);
	queue.push(this.root);
	let currentNode;
	while (queue.length) {
    currentNode = queue.shift();
    if(currentNode === `$`){
    	currentNode = queue.shift();
    	if(!currentNode){
    		return;
    	}
    	queue.push(`$`);
    	if (currentNode.left) {
      		queue.push(currentNode.left)
	    }
	    if (currentNode.right) {
	      	queue.push(currentNode.right)
	    }
    	console.log(currentNode.data)
    }
  }
}
Tree.prototype.topView = function(){
	console.log("#################")
	const currentNode = this.root,levelKeys = {};
	function topView(rNode,level){
		const queue = []
		queue.push({level : level,node : rNode});
		while (queue.length) {
			let currentNode = queue.shift();
			let level = currentNode.level,
				node = currentNode.node;
			if(!levelKeys[level]){
				console.log(node.data);
				levelKeys[level] = node.data;
			}
			if(node.left){
				topView(node.left,level - 1);
			}
			if(node.right){
				topView(node.right,level + 1);
			}
		}	
	}
	topView(currentNode,0);
	
}


const tree = new Tree();
tree.addNode(7);
tree.addNode(5);
tree.addNode(8);
tree.addNode(4);
tree.addNode(6);
console.log(tree,tree.findNode(51),tree.inOrderTraverse(),tree.depth());
// tree.traverseBFS();
tree.sideView();
tree.topView();

const BinarySearch = function(items,target){
	let left = 0,right = items.length - 1;
	while(left <= right){
		let mid = left + Math.floor((right - left)/2);
		if(items[mid] === target){
			return mid;
		}else if(items[mid] < target){
			left = mid + 1;
		}else if(items[mid] > target){
			right = mid - 1;
		}
	}
	return -1;
}

console.log("BinarySearch		",BinarySearch([1,2,3,4,5,6,7],4))
