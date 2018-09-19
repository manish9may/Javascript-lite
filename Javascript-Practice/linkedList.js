function Node(data){
	this.data = data;
	this.next = null;
}
function LinkedList(){
	this.head = null;
}
LinkedList.prototype.addNode = function(data){
	let node = new Node(data),
	currentNode = this.head;
	if(!currentNode){
		this.head = node;
	}else{
		while(currentNode.next){
			currentNode = currentNode.next;
		}
		currentNode.next = node; 
	}
}
LinkedList.prototype.removeAt = function(position){
	let currentNode = this.head,previousNode = null;
	if(Number(position) === 1 && currentNode){
		this.head = this.head.next;
		return true;
	}else{
		while(currentNode && position > 1){
			previousNode = currentNode;
			currentNode = currentNode.next;
			position--;
		}
		if(currentNode && previousNode){
			previousNode.next = currentNode.next;
			return true;	
		}
		
	}
	return false;
}
LinkedList.prototype.getLen = function(){
	let currentNode = this.head,resLen = 0;
		while(currentNode){
			resLen++;
			currentNode = currentNode.next;
		}
	return resLen;
}
LinkedList.prototype.oddEvenList = function(){
	let p_odd = this.head,p_even = this.head.next,currentNode = p_even;
	while(p_even && p_even.next){
		p_odd.next = p_even.next;
		p_even.next = p_even.next.next;
		p_odd = p_odd.next;
		p_even = p_even.next
	}
	p_odd.next = currentNode;
}
LinkedList.prototype.revese = function(){
	let currentNode = this.head,nextNode = null,previousNode = null;
	while(currentNode){
		nextNode = currentNode.next;
		currentNode.next = previousNode;
		previousNode = currentNode;
		currentNode = nextNode;
	}
	this.head = previousNode;
}
LinkedList.prototype.midElement = function(){
	let fastNode = this.head,slowNode = this.head;
	while(fastNode && fastNode.next){
		fastNode = fastNode.next.next;
		slowNode = slowNode.next;
	} 
	return slowNode.data;
}
let linkedList = new LinkedList();
linkedList.addNode(1);
linkedList.addNode(2);
linkedList.addNode(3);
linkedList.addNode(4);
linkedList.addNode(5);

linkedList.removeAt(6)
linkedList.oddEvenList();
linkedList.revese();
console.log(linkedList,linkedList.getLen(),linkedList.midElement());