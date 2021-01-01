const INITIAL_STATE = {
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_CHALLENGE':
      return {
        ...state,
        user: {
          ...state.user,
          challenges: [...state.user.challenges, action.payload],
        },
      };
    case 'DELETE_CHALLENGE':
      return {
        ...state,
        user: {
          ...state.user,
          challenges: state.user.challenges.filter(item => item.id !== action.payload),
        },
      };
    default:
      return state;
  };
};
