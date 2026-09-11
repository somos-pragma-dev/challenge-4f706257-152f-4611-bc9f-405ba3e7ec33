export const userReducer = (state, action) => {
  switch (action.type) {
    case 'SET_USERS':
      return {...state, users: action.payload };
    case 'UPDATE_USER_STATUS':
      return {
       ...state,
        users: state.users.map(user =>
          user.id === action.payload.id? {...user, status: action.payload.status } : user
        )
      };
    default:
      return state;
  }
};