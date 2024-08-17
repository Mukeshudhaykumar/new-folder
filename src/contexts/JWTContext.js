import React, { createContext, useEffect, useReducer } from 'react';
import jwtDecode from 'jwt-decode';

import { ACCOUNT_INITIALISE, LOGIN, LOGOUT } from '../store/actions';
import axios from 'axios';
import accountReducer from '../store/accountReducer';
import Loader from '../components/Loader/Loader';

const initialState = {
  isLoggedIn: false,
  isInitialised: false,
  user: null
};

const verifyToken = (serviceToken) => {
  if (!serviceToken) {
    return false;
  }

  const decoded = jwtDecode(serviceToken);
  return decoded.exp > Date.now() / 1000;
};

const setSession = (serviceToken) => {
  if (serviceToken) {
    localStorage.setItem('serviceToken', serviceToken);
  } else {
    localStorage.removeItem('serviceToken');
  }
};

const JWTContext = createContext({
  ...initialState,
  login: () => Promise.resolve(),
  logout: () => {}
});

export const JWTProvider = ({ children }) => {
  const [state, dispatch] = useReducer(accountReducer, initialState);

  const login = async (username, password) => {
    const response = await axios.post('http://192.168.1.102:8000/account/login', { username, password });
    console.log("response", response)
    const { access_token, user } = response.data;
    setSession(access_token);
    dispatch({
      type: LOGIN,
      payload: {
        user
      }
    });
  };

  const logout = () => {
    setSession(null);
    dispatch({ type: LOGOUT });
  };

  useEffect(() => {
    const init = async () => {
      try {
        const serviceToken = window.localStorage.getItem('serviceToken');
        if (serviceToken && verifyToken(serviceToken)) {
          setSession(serviceToken);
          const response = await axios.get('/auth/me');
          const { user } = response.data;
          dispatch({
            type: ACCOUNT_INITIALISE,
            payload: {
              isLoggedIn: true,
              user
            }
          });
        } else {
          dispatch({
            type: ACCOUNT_INITIALISE,
            payload: {
              isLoggedIn: false,
              user: null
            }
          });
        }
      } catch (err) {
        console.error(err);
        dispatch({
          type: ACCOUNT_INITIALISE,
          payload: {
            isLoggedIn: false,
            user: null
          }
        });
      }
    };

    init();
  }, []);

  if (!state.isInitialised) {
    return <Loader />;
  }

  return <JWTContext.Provider value={{ ...state, login, logout }}>{children}</JWTContext.Provider>;
};

export default JWTContext;
