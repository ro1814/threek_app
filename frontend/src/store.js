import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { retoListReducer, retoDetailsReducer } from './reducers/retoReducers'

const reducer = combineReducers({
    retoList: retoListReducer,
    retoDetails: retoDetailsReducer,
})

const initialState =  {}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store