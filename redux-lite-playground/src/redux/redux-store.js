const createStore = (reducers,state,enhancer) =>{
	const store = {};
	store.listeners = [];
	store.state = state;
	store.getState = () => store.state;
	store.subscribe = (listener) => {
		store.listeners.push(listener);
		return () => {
			const index = store.listeners.indexOf(listener);
	        if (index > 0) {
	          store.listeners.splice(index, 1);
	        }
		}
	};
	store.dispatch = (action) => {
		store.state = reducers.reduce((_state,reducer) => {
			const reducerState = reducer(_state,action);
			return reducerState;
		},store.state);
		store.listeners.forEach((listener) => {return listener()});
	};
	return enhancer ? enhancer(store) : store;
}
export {createStore};