import { AUTH_USER_ERROR, AUTH_USER_LOGOUT, AUTH_USER_REQUEST, AUTH_USER_SUCCESS } from "./Auth.actionType";

import axios from "axios"


export const authlogin = (loginData) => async (dispatch) => {

    dispatch({ type: AUTH_USER_REQUEST });

    try {
      const response = await axios.post('https://jade-dove-kilt.cyclic.app/login', loginData);
      const data = response.data;
      console.log(data)
  
      localStorage.setItem('authToken', JSON.stringify(data));
      dispatch({
        type: AUTH_USER_SUCCESS,
        payload: {
          token: data.token,
          message: data.message,
        
        },
      });
    } catch (error) {
      const errorMessage = error.response.data.message;
      dispatch({ type:AUTH_USER_ERROR ,payload: { message: errorMessage } });
    }
  };

