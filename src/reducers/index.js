import {combineReducers} from 'redux';
import dataReducer from './reducer-data'
import cartAddedReducer from './reducer-cartAdded'

const allReducers = combineReducers({
    data:dataReducer,
    addedFlight : cartAddedReducer
})

export default allReducers;