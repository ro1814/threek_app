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
  RETO_CREATE_RESET,
  RETO_UPDATE_REQUEST,
  RETO_UPDATE_SUCCESS,
  RETO_UPDATE_FAIL,
  RETO_UPDATE_RESET,
  RETO_SAVE_DEPORTE,
  RETO_SAVE_CAUSA,
  RETO_SAVE_CREAR_RETO,
  /* RETO_SAVE_IMAGENES, */
} from "../constants/retoConstants";

export const retoListReducer = (state = { retos: [] }, action) => {
  switch (action.type) {
    case RETO_LIST_REQUEST:
      return { loading: true, retos: [] };
    case RETO_LIST_SUCCESS:
      return { loading: false, retos: action.payload };
    case RETO_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const retoDetailsReducer = (state = { reto: {} }, action) => {
  switch (action.type) {
    case RETO_DETAILS_REQUEST:
      return { loading: true, ...state };
    case RETO_DETAILS_SUCCESS:
      return { loading: false, reto: action.payload };
    case RETO_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const retoCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case RETO_CREATE_REQUEST:
      return { loading: true };
    case RETO_CREATE_SUCCESS:
      return { loading: false, success: true, reto: action.payload };
    case RETO_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case RETO_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const retoUpdateReducer = (state = { reto: {} }, action) => {
  switch (action.type) {
    case RETO_UPDATE_REQUEST:
      return { loading: true };
    case RETO_UPDATE_SUCCESS:
      return { loading: false, success: true, reto: action.payload };
    case RETO_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case RETO_UPDATE_RESET:
      return { reto: {} };
    default:
      return state;
  }
};

export const retoSaveReducer = (
  state = { selecDeporte: {}, selecCausa: {}, datosReto: {} },
  action
) => {
  switch (action.type) {
    
    case RETO_SAVE_DEPORTE:
      return {
        ...state,
        selecDeporte: action.payload,
      };

    case RETO_SAVE_CAUSA:
      return {
        ...state,
        selecCausa: action.payload,
      };

      case RETO_SAVE_CREAR_RETO:
      return {
        ...state,
        datosReto: action.payload,
      };

    default:
      return state;
  }
};
