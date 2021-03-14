import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { retoListReducer, retoDetailsReducer } from './reducers/retoReducers'
import { userLogInReducer, userRegisterReducer, userDetailsReducer, userUpdateProfileReducer } from './reducers/userReducers' 
import { sponsorReducer } from './reducers/sponsorReducers'

const reducer = combineReducers({
    retoList: retoListReducer,
    retoDetails: retoDetailsReducer,
    userLogin: userLogInReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    sponsor: sponsorReducer
    
})

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

const sponsorItemsFromStorage = localStorage.getItem('sponsorItems') ? JSON.parse(localStorage.getItem('sponsorItems')) : []

const initialState =  {
    sponsor: { sponsorItems: sponsorItemsFromStorage},
    userLogin: { userInfo: userInfoFromStorage}
 }

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store