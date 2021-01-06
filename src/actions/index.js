import { ADD_CHALLENGE, ADD_TOPIC, DELETE_CHALLENGE, DELETE_TOPIC, LOGIN_REQUEST, LOGOUT_REQUEST, REGISTER_REQUEST } from '../types';
/* eslint-disable import/prefer-default-export */

//Challenges Actions**
export const addChallenge = payload => ({
  type: ADD_CHALLENGE,
  payload,
});

export const deleteChallenge = payload => ({
  type: DELETE_CHALLENGE,
  payload,
});

//Topics Actions**
export const addTopic = payload => ({
  type: ADD_TOPIC,
  payload,
});

export const deleteTopic = payload => ({
  type: DELETE_TOPIC,
  payload,
});

//Autorization Actions**
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
