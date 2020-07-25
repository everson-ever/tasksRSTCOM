const UserService = require('../services/UserService');
const { badRequest, serverError, ok } = require('../helpers/httpHelper');
const NotFoundError = require('../errors/notFoundError');
const User = require('../models/User');

class UserController {

    async show(req, res) {
        try {
            const { userId } = req;
            const user = await UserService.findById(userId);
            const { name, email, picture } = user;

            return res.status(200).json(ok({name, email, picture}))
        }
        catch(error) {
            return res.status(500).json(serverError());
        }
    }

    async update(req, res) {
        try {
            const { userId } = req;
            const { name, email, password, passwordConfirmation } = req.body;

            if (password === passwordConfirmation) {
                return res.status(400).json(badRequest(new NotFoundError("A senha e confirmação de senha são diferentes")));
            }

            const user = await UserService.findById(userId);
            if (!user) {            
                return res.status(400).json(badRequest(new NotFoundError("Erro ao editar os dados")));
            }

            user.name = name;
            user.email = email;
            user.password = password;
            user.save();

            return res.status(200).json(ok(user));
        }
        catch(error) {
            return res.status(500).json(serverError());
        }
        
    }

    async uploadPicture(req, res) {
        try {
            const { userId } = req;
            const { filename: picture } = req.file;

            const user = await UserService.findById(userId);
            if (!user) {            
                return res.status(404).json(badRequest(new NotFoundError("Erro ao fazer upload")));
            }

            user.picture = picture;
            user.save();

            return res.status(200).json(ok({picture}));
        }
        catch(error) {
            return res.status(500).json(serverError());
        }
    }

}

module.exports = new UserController();