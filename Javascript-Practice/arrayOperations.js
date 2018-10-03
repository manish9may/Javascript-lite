const addTwoBinaries = (a,b) => {
	let carry = 0,
		result = [],
		i = 0,j = 0;
		a = a.split("").reverse(),b = b.split("").reverse();
		while(i < a.length || j < b.length){
			let sum = carry + Number(a[i] | 0) +Number(b[j] | 0);
			result.push(sum % 2);
			carry = Math.floor(sum / 2);
			i++;
			j++;
		}
		if(carry)
		result.push(carry)
		return result.reverse().join("")
}

console.log(addTwoBinaries("1101", "01"))