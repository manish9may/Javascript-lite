const thunk = (store) => (next) => (actionCreator) => {
	if (actionCreator instanceof Function) {
		actionCreator(action => next(action))
	}else{
		next(actionCreator)
	}
}
export {thunk};