const debounce = (func,delay) => {
	let timeout;
	return function(){
		let context = this,args = arguments;
		let later = function(){
			func.apply(context,args);
		}
		clearTimeout(timeout);
		timeout = setTimeout(later,delay);
	}
}
const throttle = (func,delay) => {
	let lastFun,lastRun;
	return function(){
		let context = this,args = arguments,now = new Date;
		if(lastRun && (lastRun + delay) > now){
			clearTimeout(lastFun);
			lastFun = setTimeout(() => {
				lastRun = new Date
				func.apply(context,args);
			},delay)
		}else{
			func.apply(context,args);
			lastRun = new Date;
		}
	}
}
function repeatFunc(){
	for(let i = 0 ; i < 10; i++){
		console.log("debounce : "+i)
		// setTimeout(() => console.log("debounce : "+i),500);
	}
}
const debounceFunc = debounce(repeatFunc,2000,true);
// debounceFunc();
// setTimeout(() => {console.log(1);debounceFunc()},1900)
// setTimeout(() => {console.log(2);debounceFunc()},2100);


const throttleFunc = throttle(repeatFunc,2000,true);
throttleFunc();
setTimeout(() => {console.log(1);throttleFunc()},1900)
setTimeout(() => {console.log(2);throttleFunc()},2100)
