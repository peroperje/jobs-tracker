import React from 'react';
import ReactDOM from 'react-dom';

import injectTapEventPlugin from 'react-tap-event-plugin';

import configureStore from './store/configureStore';
import Root from './components/app/Root';


const store = configureStore();

injectTapEventPlugin();


ReactDOM.render(<Root store={store} />, document.getElementById('root'));

