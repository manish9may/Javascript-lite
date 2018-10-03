const wait = (time) => new Promise((resolve,reject) => setTimeout(() => resolve("SUCCESS"),time));
const wait2 = (time) => new Promise((resolve,reject) => setTimeout(() => reject("FAILURE"+time),time));


const all = (ps) => new Promise((resolve, reject) => {
	const results = [];
	let counter = ps.length;
	ps.forEach((p,i) => {
		p.then(result => {
			results[i] = result;
			counter--;
			if(counter === 0) return resolve(results)
		},error => {
			return reject(error)
			
		})
	})
});

all([wait(100),wait2(700),wait(400),wait2(500),wait2(200),wait(500)]).then(result => {
	console.log(result)
},error => {
	console.log(error)
})