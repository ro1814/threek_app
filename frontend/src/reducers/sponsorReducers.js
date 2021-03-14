import { SPONSOR_ADD_ITEM } from '../constants/sponsorConstants'

export const sponsorReducer = (state = { sponsorItems: [] }, action) => {
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
        default:
            return state
    }
}