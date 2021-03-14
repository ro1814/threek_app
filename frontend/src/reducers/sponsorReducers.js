import { SPONSOR_ADD_ITEM, VISITING_SAVE_SPONSOR } from '../constants/sponsorConstants'

export const sponsorReducer = (state = { sponsorItems: [], infoDonVisitante: {} }, action) => {
    switch(action.type) {
        case SPONSOR_ADD_ITEM:
            const item = action.payload
            const existItem = state.sponsorItems.find( x => x.reto === item.reto )

            if(existItem) {
                return {
                    ...state,
                    sponsorItems: state.sponsorItems.map( x => x.reto === existItem.reto ? item : x)
                }
            } else {
                return {
                    ...state,
                    sponsorItems: [...state.sponsorItems, item]
                }
            }

        case VISITING_SAVE_SPONSOR:
            return {
                ...state,
                infoDonVisitante: action.payload,
            }
        default:
            return state
    }
}