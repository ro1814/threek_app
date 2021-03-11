import axios from 'axios'

import {RETO_LIST_REQUEST, RETO_LIST_SUCCESS, RETO_LIST_FAIL, RETO_DETAILS_REQUEST, RETO_DETAILS_SUCCESS, RETO_DETAILS_FAIL} from '../constants/retoConstants'

export const listRetos = () => async (dispatch) => {
    try {
        dispatch({ type: RETO_LIST_REQUEST })

        const { data } = await axios.get('/api/retos')

        dispatch({
            type: RETO_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: RETO_LIST_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }
}

export const listRetosDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: RETO_DETAILS_REQUEST })

        const { data } = await axios.get(`/api/retos/${id}`)

        dispatch({
            type: RETO_DETAILS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: RETO_DETAILS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }
}