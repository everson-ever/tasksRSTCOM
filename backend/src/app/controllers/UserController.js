const UserService = require('../services/UserService');
const { badRequest, serverError, ok } = require('../helpers/httpHelper');
const NotFoundError = require('../errors/notFoundError');

class UserController {

    async update(req, res) {
        try {
            const { userId } = req;
            const { name, email, password, passwordConfirmation } = req.body;
            const { filename = null } = req.file || {};

            const user = await UserService.findById(userId);
            if (!user) {            
                return res.status(404).json(badRequest(new NotFoundError("Erro ao editar os dados")));
            }

            user.name = name;
            user.email = email;
            user.password = password;
            user.picture = filename;
            user.save();

            return res.status(200).json(ok(user));
        }
        catch(error) {
            return res.status(500).json(serverError());
        }
        
    }

}

module.exports = new UserController();