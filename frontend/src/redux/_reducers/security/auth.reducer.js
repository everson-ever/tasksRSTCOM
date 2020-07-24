import { authConstants } from '../../_constants';
import { isAuthenticated, jwtPaylod } from '../../../services/auth';

const initialState = {
    isAuthenticated: isAuthenticated(),
    payload: jwtPaylod()
}


export const auth = (state = initialState, action) => {
    switch (action.type) {
        case authConstants.LOGIN:
            return { ...state, isAuthenticated: true, payload: action.payload };
        case authConstants.LOGOUT:
            return { ...state, isAuthenticated: false, payload: {} };
    
        default: return state;
    }
}