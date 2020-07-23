const initial = {
  loggedIn: true,
};

function userReducer(state = initial, action) {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        loggedIn: true,
        ...action.payload,
      };
    case "LOGOUT":
      return {
        loggedIn: false,
      };
    default:
      return state;
  }
}
export default userReducer;
