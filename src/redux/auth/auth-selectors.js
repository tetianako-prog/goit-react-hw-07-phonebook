const getIsAuthenticated = state => Boolean(state.auth.token);

const getUsername = state => state.auth.user.name;

const getUserEmail = state => state.auth.user.email;

export default {
  getIsAuthenticated,
  getUsername,
  getUserEmail,
};
