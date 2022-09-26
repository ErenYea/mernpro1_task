export const initialState = {
  user: null,
  type: null,
  messages: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload.user,
        type: action.payload.type,
      };
    default:
      return state;
  }
};
export default reducer;
