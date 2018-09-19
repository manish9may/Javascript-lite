const wait = (time) => new Promise((resolve,reject) => setTimeout(() => resolve("SUCCESS"),time));


const all = (ps) => new Promise((resolve, reject) => {
	const results = [];
	let counter = ps.length;
	ps.forEach((p,i) => {
		p.then(result => {
			results[i] = result;
			counter--;
			if(counter === 0) return resolve(results)
		})
	})
});

all([wait(100),wait(200),wait(400)]).then(result => {
	console.log(result)
})