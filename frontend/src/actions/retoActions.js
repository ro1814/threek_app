import axios from "axios";

import {
  RETO_LIST_REQUEST,
  RETO_LIST_SUCCESS,
  RETO_LIST_FAIL,
  RETO_DETAILS_REQUEST,
  RETO_DETAILS_SUCCESS,
  RETO_DETAILS_FAIL,
  RETO_CREATE_REQUEST,
  RETO_CREATE_SUCCESS,
  RETO_CREATE_FAIL,
  RETO_UPDATE_FAIL,
  RETO_UPDATE_SUCCESS,
  RETO_UPDATE_REQUEST,
  RETO_SAVE_CAUSA,
  RETO_SAVE_DEPORTE,
  RETO_SAVE_CREAR_RETO,
  RETO_SAVE_IMAGENES,
} from "../constants/retoConstants";

export const listRetos = () => async (dispatch) => {
  try {
    dispatch({ type: RETO_LIST_REQUEST });

    const { data } = await axios.get("/api/retos");

    dispatch({
      type: RETO_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: RETO_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listRetosDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: RETO_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/retos/${id}`);

    dispatch({
      type: RETO_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: RETO_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createReto = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: RETO_CREATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(`/api/retos`, {}, config);

    dispatch({
      type: RETO_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch();
    }
    dispatch({
      type: RETO_CREATE_FAIL,
      payload: message,
    });
  }
};

export const updateProduct = (reto) => async (dispatch, getState) => {
  try {
    dispatch({
      type: RETO_UPDATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(`/api/retos/${reto._id}`, reto, config);

    dispatch({
      type: RETO_UPDATE_SUCCESS,
      payload: data,
    });
    dispatch({ type: RETO_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch();
    }
    dispatch({
      type: RETO_UPDATE_FAIL,
      payload: message,
    });
  }
};

export const saveDeporteReto = (data) => (dispatch) => {
  dispatch({
    type: RETO_SAVE_DEPORTE,
    payload: data,
  });

  localStorage.setItem("selecDeporte", JSON.stringify(data));
};

export const saveCausaReto = (data) => (dispatch) => {
  dispatch({
    type: RETO_SAVE_CAUSA,
    payload: data,
  });

  localStorage.setItem("selecCausa", JSON.stringify(data));
};

export const saveDatosReto = (data) => (dispatch) => {
  dispatch({
    type: RETO_SAVE_CREAR_RETO,
    payload: data,
  });

  localStorage.setItem("datosReto", JSON.stringify(data));
};

export const saveImagenReto = (data) => (dispatch) => {
  dispatch({
    type: RETO_SAVE_IMAGENES,
    payload: data,
  });

  localStorage.setItem("datosSocial", JSON.stringify(data));
};