import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import App from './components/app';
import { BrowserRouter as Router } from 'react-router-dom';
import thunk from 'redux-thunk';
import types from './actions/types';

const store = createStore(rootReducer, {}, applyMiddleware(thunk));

// if(localStorage.getItem('token')){
//     store.dispatch({
//         type: types.SIGN_IN
//     });
// };

localStorage.getItem('token') ? store.dispatch({type: types.SIGN_IN}) : null;


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);
