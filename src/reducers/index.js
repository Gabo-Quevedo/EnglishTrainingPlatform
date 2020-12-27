const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'LOGOUT_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'REGISTER_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'ADD_CHALLENGE':
      return {
        ...state,
        challenges: [...state.users[1].challenges, action.payload],
      };
    case 'COLLAPSE_CHALLENGE_FORM':
      return {
        ...state,
        collapse: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
