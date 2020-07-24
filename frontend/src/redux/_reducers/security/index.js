import { auth } from './auth.reducer';
import { combineReducers } from 'redux';

const security = combineReducers({
  auth
});

export default security;