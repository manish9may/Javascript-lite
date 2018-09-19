const bubbleSort = (list) => {
	for(let i = 0; i < list.length - 1; i++){
		for (let j = i + 1; j < list.length ; j++){
			if(list[i] > list[j]){
				let temp = list[i];
				list[i] = list[j];
				list[j] = temp;
			}
		}
	}
	return list;
}
console.log("bubbleSort	",bubbleSort([7,5,2,4,3,9]));

const selectionSort = (list) =>{
	let minIndex;
	for(let i = 0; i < list.length - 1; i++){
		minIndex = i;
		for (let j = i + 1; j < list.length ; j++){
			if(list[minIndex] > list[j]){
				minIndex = j;
			}
		}
		if(minIndex !== i){
			let temp = list[i];
			list[i] = list[minIndex];
			list[minIndex] = temp;
		}
	}
	return list;
}
console.log("selectionSort	",selectionSort([7,5,2,4,3,9]));


const insertionSort = (list) => {
	let midEl;
	for(let i = 1; i < list.length; i++){
		midEl = list[i],j = i - 1;
		for(; j >= 0 && list[j] > midEl; j--){
			list[j + 1] = list[j]
		}
		list[j + 1] = midEl;
	}
	return list;
}
console.log("insertionSort	",insertionSort([7,5,2,4,3,9]));

const mergeSort = (list) => {
	let len = list.length;
	if(len < 2){
		return list;
	}
	let mid = Math.floor(len/2),
		left = list.slice(0,mid),
		right = list.slice(mid);
	return merge(mergeSort(left),mergeSort(right)) 
}
const merge = (left,right) => {
	let result = [],lLen = left.length,rLen = right.length,l = 0,r = 0;
	while(l < lLen && r < rLen){
		if(left[l] > right[r]){
			result.push(right[r++])
		}else{
			result.push(left[l++])
		}
	}
	return result.concat(left.slice(l)).concat(right.slice(r));
}
console.log("mergeSort	",mergeSort([7,5,2,4,3,9]));

const quickSort = (list) => {
	return list;
}

console.log("quickSort	",quickSort([7,5,2,4,3,9]));