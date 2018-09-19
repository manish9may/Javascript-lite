const Person = function(){
	if(!Person.instance){
		Person.instance = this;
	}
	this.name;
	this.getName = function(){
		return this.name;
	}
	this.setName = function(name){
		this.name = name;
	}
	return Person.instance
}

const person1 = new Person();
person1.setName("Manish Jain");
const person2 = new Person();
console.log(person1.getName());
console.log(person2.getName());

person2.setName("Jain");

console.log(person1.getName());
console.log(person2.getName());