import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware} from './redux'; 
import {Provider,connect} from './react-redux';
import loggerMiddleware from './logger';
import {thunk} from './redux-thunk';

const store = createStore([],undefined,applyMiddleware([loggerMiddleware,thunk]));
const mapStateToProps = (store) => {
	return {
		"appName" : "React-Redux"
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		"getAppName" : function(){
			console.log("Inside getAppName")
		}
	}
}
const App = (props) => {
	return(<div>{props.appName}</div>);
}
const AppComponent = connect(mapStateToProps,mapDispatchToProps)(App);

class AppContainer extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		return(<Provider store = {store}><AppComponent {...this.props}/></Provider>)
	}
}


const rootElement = document.getElementById('root');
ReactDOM.render(<AppContainer />, rootElement);