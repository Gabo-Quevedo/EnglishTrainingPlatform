import { ADD_CHALLENGE, ADD_TOPIC, DELETE_CHALLENGE, DELETE_TOPIC, LOGIN_REQUEST, LOGOUT_REQUEST, REGISTER_REQUEST } from '../types';

const reducer = (state, action) => {
  switch (action.type) {
    //Challenges Reducer**
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
    //Topics Reducer**
    case ADD_TOPIC:
      return {
        ...state,
        user: {
          ...state.user,
          topics: [...state.user.topics, action.payload],
        },
      };
    case DELETE_TOPIC:
      return {
        ...state,
        user: {
          ...state.user,
          topics: [...state.user.topics.filter(item => item.id !== action.payload)],
        },
      };
    //Autorization Reducer**
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
    default:
      return state;
  }
};

export default reducer;
