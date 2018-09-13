import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import reducers from './reducers/reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { storeSeed, drawCard } from './actions/actions'

import { uuidv4, uuidToNumber } from './uuid-helper';
import { constructStandardDeck } from './deck-library';
import { getCard } from './deck-manipulation';

// Initialise store. Pass in reducers. Pass in redux devtools extension.
const store = createStore(
    reducers, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

var seed = uuidv4();
store.dispatch(storeSeed(uuidToNumber(seed)));
//store.dispatch(drawCard(4));

// Should always output the same deck with the same seed
var standardDeck = constructStandardDeck();
var gi, gj;

for (gj = 0; gj < 5; gj++) {
    console.log("Trial: " + gj);
    for (gi = 0; gi < 4; gi++) {
        console.log(getCard(standardDeck, gi, seed));
    };
};


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root')
);
registerServiceWorker();
