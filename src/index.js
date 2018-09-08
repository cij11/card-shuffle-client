import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import reducers from './reducers/reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { storeSeed } from './actions/actions'

// Initialise store. Pass in reducers. Pass in redux devtools extension.
const store = createStore(
    reducers, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.dispatch(storeSeed('1234'));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root')
);
registerServiceWorker();
