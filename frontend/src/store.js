import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { retoListReducer, retoDetailsReducer, retoCreateReducer,
    retoUpdateReducer, retoSaveReducer } from './reducers/retoReducers'
import { userLogInReducer, userRegisterReducer, userDetailsReducer, userUpdateProfileReducer } from './reducers/userReducers' 
import { sponsorReducer } from './reducers/sponsorReducers' 

const reducer = combineReducers({
    retoList: retoListReducer,
    retoDetails: retoDetailsReducer,
    userLogin: userLogInReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    sponsor: sponsorReducer,
    retoCreate: retoCreateReducer,
    retoUpdate: retoUpdateReducer,
    retoSave: retoSaveReducer   
})

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null


const visitingSponsorFromStorage = localStorage.getItem('infoDonVisitante') ? JSON.parse(localStorage.getItem('infoDonVisitante')) : {}

const sponsorItemsFromStorage = localStorage.getItem('sponsorItems') ? JSON.parse(localStorage.getItem('sponsorItems')) : []

// const crearRetoInfoFromStorage = localStorage.getItem('selecDeporte') ? JSON.parse(localStorage.getItem('selecDeporte')) : {}

const initialState =  {

    sponsor: { sponsorItems: sponsorItemsFromStorage, infoDonVisitante: visitingSponsorFromStorage},
    userLogin: { userInfo: userInfoFromStorage},
    // retoSave : { selecDeporte: crearRetoInfoFromStorage}
 }

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store