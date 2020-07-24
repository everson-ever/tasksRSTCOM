import { authConstants } from '../../_constants';


export const login = (payload = {}) => ({
    type: authConstants.LOGIN,
    payload
})

export const logout = () => ({
    type: authConstants.LOGOUT,
    payload: {}
});