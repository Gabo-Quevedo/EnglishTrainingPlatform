import { ADD_CHALLENGE, DELETE_CHALLENGE, LOGIN_REQUEST, LOGOUT_REQUEST, REGISTER_REQUEST } from '../types';

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
      return; //por definir;
    default:
      return state;
  }
};

export default reducer;
