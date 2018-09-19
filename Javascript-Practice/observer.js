const Subject = function(){
	this.handler = [];
}
Subject.prototype.addObserver = function(observer){
	this.handler.push(observer);
}
Subject.prototype.removeObserver = function(observer){
	for(let i = 0; i < this.handler.length; i++){
		if(this.handler[i] === observer){
			this.handler.splice(i,1);
			return true;
		}
	}
	return false;
}
Subject.prototype.notify = function(){
	let args = Array.prototype.splice.call(arguments,0);
	const event = args.shift();
	for(let i = 0; i < this.handler.length; i++){
		this.handler[i][event].apply(null,args);
	}	
}

const Person = function(){
	this.getName = function(name){
		console.log(name)
		return name;
	}
}
const person1 = new Person();
const person2 = new Person();
const subject = new Subject();
subject.addObserver(person1);
subject.addObserver(person2);

subject.notify("getName","Manish Jain");