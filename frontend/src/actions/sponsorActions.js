import axios from 'axios' 
import { SPONSOR_ADD_ITEM, VISITING_SAVE_SPONSOR, SPONSOR_SAVE_PAYMENT_METHOD, SPONSOR_CANTIDAD_PERSONALIZADA } from '../constants/sponsorConstants'

export const addToSponsor = (id) => async( dispatch, getState ) => {
    const { data } = await axios.get(`/api/retos/${id}`)

    dispatch({
        type: SPONSOR_ADD_ITEM,
        payload: {
            reto: data._id,
            titulo: data.titulo,
            imagen: data.imagen,
            objetivoRec: data.objetivoRec
        }
    })

    localStorage.setItem('sponsorItems', JSON.stringify(getState().sponsor.sponsorItems))
}

export const saveVisitingSponsor = (data) => (dispatch) => {
    dispatch({
        type: VISITING_SAVE_SPONSOR,
        payload: data,
    })

    localStorage.setItem('infoDonVisitante', JSON.stringify(data))
}

export const savePaymentMethod = (data) => (dispatch) => {
    dispatch({
        type: SPONSOR_SAVE_PAYMENT_METHOD,
        payload: data,
    })

    localStorage.setItem('paymentMethod', JSON.stringify(data))
}

export const saveCantidadPersonalizada = (data) => (dispatch) => {
    dispatch({
        type: SPONSOR_CANTIDAD_PERSONALIZADA,
        payload: data,
    })
    localStorage.setItem('cantidadPersonalizada', JSON.stringify(data))
}   
