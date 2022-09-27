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
    case "REMOVE_USER":
      return {
        ...state,
        user: null,
        type: null,
      };
    default:
      return state;
  }
};
export default reducer;
