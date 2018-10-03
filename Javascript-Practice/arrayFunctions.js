Function.prototype.myBind = function(scope){
	const func = this;
	return function(){
		func.apply(scope,arguments);
	}
}

function Person(name){
	this.name = name;
}

const person = new Person("Manish Jain");

const printName = function(myName){
	console.log(this.name,myName)
}

const boundFunc = printName.myBind(person);
boundFunc("My Name");

Array.prototype.myFilter = function(callback){
	const result = [],list = this;
	for(let i = 0;i < list.length;i++){
		if(callback(list[i])){
			result.push(list[i])
		}
	}
	return result;
}

const list = [1,2,3,4,5];

console.log(list.myFilter((data) => {
	return data > 2
}));

Array.prototype.myReduce = function(callback){
	const list = this;
	let result = 0;
	for(let i = 0;i < list.length;i++){
		result = callback(result,list[i])
	}
	return result;
}


console.log(list.myReduce((a,b) => {
	return a + b;
}));

Array.prototype.myMap = function(callback){
	const result = [],list = this;
	for(let i = 0;i < list.length;i++){
		result.push(callback(list[i],i))
	}
	return result;
}


console.log(list.myMap((data,index) => {
	return data * 2;
}));

const details = {
	a : 1,
	b : 2,
	c : {
		a : 3,
		d : 4
	},
	e : {
		f : 5,
		g : [6,7,8,9]
	}
}

const copy = function(myObject){
	const result = {};
	for(let key in myObject){
		if(Array.isArray(myObject[key])){
			const data = myObject[key];
			result[key] = [];
			for(let index = 0;index < data.length;index++){
				result[key][index] = data[index]
			}
		}else if(typeof(myObject[key]) === "object"){
			result[key] = copy(myObject[key])
		}else{
			result[key] = myObject[key];
		}
	}
	return result;
}
const copyDetails = copy(details);
console.log(copyDetails);
details["e"]["g"].push(10);
console.log(copyDetails,details);
