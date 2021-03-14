import axios from 'axios'
import { SPONSOR_ADD_ITEM, VISITING_SAVE_SPONSOR } from '../constants/sponsorConstants'

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