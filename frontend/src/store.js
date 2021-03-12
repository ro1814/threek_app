import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { retoListReducer, retoDetailsReducer } from './reducers/retoReducers'
import { userLogInReducer } from './reducers/userReducers' 

const reducer = combineReducers({
    retoList: retoListReducer,
    retoDetails: retoDetailsReducer,
    userLogin: userLogInReducer
})

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

const initialState =  { 
    userLogin: { userInfo: userInfoFromStorage}
 }

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store