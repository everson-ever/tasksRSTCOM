const UserService = require('../services/UserService');
const User = require('../models/User');
const { badRequest, serverError, ok } = require('../helpers/httpHelper');
const NotFoundError = require('../errors/notFoundError');

class Session {

    async store(req, res) {
        try {
            const error = ['Credenciais incorretas'];
            const { email, password } = req.body
    
            const user = await UserService.findByEmail(email);
    
            if (!user) {            
                return res.status(404).json(badRequest(new NotFoundError(error)));
            }
    
            if (!await user.isPassword(password)) {
                return res.status(404).json(badRequest(new NotFoundError(error)));
            }
            
            const { _id, name } = user;
            const response = { id: _id, name, email, token: User.generateToken(user) }
            return res.status(200).json(ok(response));
        }
        catch(error) {
            return res.status(500).json(serverError());
        }

    }

}

module.exports = new Session();