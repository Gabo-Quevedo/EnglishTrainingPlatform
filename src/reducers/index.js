import { ADD_CHALLENGE, ADD_TOPIC, DELETE_CHALLENGE, DELETE_TOPIC, LOGIN_REQUEST, LOGOUT_REQUEST, REGISTER_REQUEST } from '../types';

const reducer = (state, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        user: action.payload,
      };
    case LOGOUT_REQUEST:
      return {
        ...state,
        user: action.payload,
      };
    case REGISTER_REQUEST:
      return {
        ...state,
        user: action.payload,
      };
    case ADD_CHALLENGE:
      return {
        ...state,
        user: {
          ...state.user,
          challenges: [...state.user.challenges, action.payload],
        },
      };
    case DELETE_CHALLENGE:
      return {
        ...state,
        user: {
          ...state.user,
          challenges: [...state.user.challenges.filter(item => item.id !== action.payload)],
        },
      };
    default:
      return state;
  }
};

export default reducer;
