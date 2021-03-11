import { RETO_LIST_REQUEST, RETO_LIST_SUCCESS, RETO_LIST_FAIL, RETO_DETAILS_REQUEST, RETO_DETAILS_SUCCESS, RETO_DETAILS_FAIL } from '../constants/retoConstants'

export const retoListReducer = ( state = { retos: [] }, action) => {
    switch( action.type ) {
        case RETO_LIST_REQUEST:
            return { loading: true, retos: [] }
        case RETO_LIST_SUCCESS:
            return { loading:false, retos: action.payload }
        case RETO_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const retoDetailsReducer = ( state = { reto: {} } , action) => {
    switch( action.type ) {
        case RETO_DETAILS_REQUEST:
            return { loading: true, ...state }
        case RETO_DETAILS_SUCCESS:
            return { loading:false, reto: action.payload }
        case RETO_DETAILS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

