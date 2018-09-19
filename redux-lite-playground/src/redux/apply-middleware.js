const applyMiddleware = (middlewares) => (store) => {
	let dispatch = store.dispatch;
	middlewares = middlewares.slice();
  	middlewares.reverse();
  	middlewares.forEach(middleware => (dispatch = middleware(store)(dispatch)));
	return {...store,dispatch}
}
export {applyMiddleware}