import { ADD_CHALLENGE, DELETE_CHALLENGE, LOGIN_REQUEST, LOGOUT_REQUEST, REGISTER_REQUEST } from '../types';
/* eslint-disable import/prefer-default-export */
export const addChallenge = payload => ({
  type: ADD_CHALLENGE,
  payload,
});

export const deleteFavorite = payload => ({
  type: DELETE_CHALLENGE,
  payload,
});

export const loginRequest = payload => ({
  type: LOGIN_REQUEST,
  payload,
});

export const logoutRequest = payload => ({
  type: LOGOUT_REQUEST,
  payload,
});

export const registerRequest = payload => ({
  type: REGISTER_REQUEST,
  payload,
});
