import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import axios from 'axios';
import employeeReducer from '../reducers/employee_reducer';

/** Creating store to application 
 *  createStore( reducers, initialObject, Middleware);
 * 
 * More than one reducer need to combined & passed as object reducer to createStore fn.
 * @the begining initialObject ={}, keep on adding state from reducer as appliaction grows.
 * 
 * 
 * These store object to need to passed to application from provider at the root of application(check index/app.js file)
 * like     
 * <Provider store={store}>
        <App />
    </Provider>

    These store passed down to all component, but these to connect with store in sub component we need to use subcomponent
    using connect module

*/

const store = new createStore(employeeReducer,{}, applyMiddleware(logger,thunk));
export default store;