const Stack = function(){
	this.dataStack = [];
	this.top = 0;
}
Stack.prototype.push = function(data){
	this.dataStack[this.top++] = data;
}
Stack.prototype.pop = function(){
	if(this.top){
		this.top--;
	}
	return this.dataStack.pop();
}
Stack.prototype.peek = function(){
	return this.dataStack[this.top - 1];
}
Stack.prototype.empty = function(){
	return this.top === 0;
}
Stack.prototype.length = function(){
	return this.top;
}

const findMid = function(stack,top,current){
	if(stack.empty() || top === current){
		return;
	}
	let data = stack.pop();
	findMid(stack,top,current + 1);

	if(current !== Math.floor(top/2)){
		stack.push(data);
	}
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);

console.log(stack);
console.log(stack.peek());
console.log(findMid(stack,stack.length(),0),stack)
// console.log(stack.pop(),stack)
