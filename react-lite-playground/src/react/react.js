import {createElement} from "./create-element"

const render = (vdom, parent=null) => {
	if (parent) parent.textContent = '';
	const mount = parent ? (el => parent.appendChild(el)) : (el => el);
	if (typeof vdom == 'string' || typeof vdom == 'number') {
		return mount(document.createTextNode(vdom));
	}
	else if (typeof vdom == 'boolean' || vdom === null) {
		return mount(document.createTextNode(''));
	}
}

export {render}