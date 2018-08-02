export function getToken() {
  try {
    return localStorage.getItem('auth_token');
  } catch (err) {
    return { error: { message: 'There was a problem parsing the token' } };
  }
}

export function setUser(username) {
  try {
    localStorage.setItem('currentUsername', username);
    return {};
  } catch (err) {
    return {
      error: { message: 'There was a problem setting the current username' }
    };
  }
}

export function getUser() {
  try {
    return localStorage.getItem('currentUsername');
  } catch (err) {
    return {
      error: { message: 'There was an error getting the current username' }
    };
  }
}

export function setToken(token) {
  try {
    localStorage.setItem('auth_token', token);
    return {};
  } catch (err) {
    return { error: { message: 'There was a problem parsing the token' } };
  }
}

export function clearToken() {
  try {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('currentUsername');
  } catch (err) {
    return { error: { message: 'There was an error logging out.' } };
  }
}
