import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/app';
import reducers from './reducers/reducers_index.js'


ReactDOM.render( 
	
	<Provider store={createStore(reducers)}>
		<App />
	</Provider>,
	
	document.querySelector('#root') 
	);