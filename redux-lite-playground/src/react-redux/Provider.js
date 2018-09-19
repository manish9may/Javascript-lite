import React from 'react';
const Context = React.createContext();
const ReduxConsumer = Context.Consumer;
const ReduxProvider = Context.Provider;

class Provider extends React.Component {
	constructor(props){
		super(props);
		props.store.dispatch({ type: '@INIT' });
		this.state = {
			store : {
				state : props.store.getState(),
				dispatch : props.store.dispatch
			}
		}
	}
	unsubscribe = null;
	componentWillMount(){
		const {subscribe} = this.props.store;
		this.unsubscribe = subscribe((state) => {
			this.setState({ store: { state, dispatch: this.props.store.dispatch}});
		});
	}
	componentWillUnmount(){
		if(this.unsubscribe){
			this.unsubscribe();
		}
	}
	render(){
		return(<ReduxProvider value = {this.state.store}>{this.props.children}</ReduxProvider>);
	}
}
const connect = (propsMapper,actionMapper) => (BaseComponent) => (baseProps) => {
	return(<ReduxConsumer>{({state,dispatch}) => {
				const props = propsMapper(state);
				const actions = actionMapper(dispatch);
				return (<BaseComponent {...props} {...baseProps} {...actions}/>)
			}}</ReduxConsumer>)
}
export {Provider,connect};