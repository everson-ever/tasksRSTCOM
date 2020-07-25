const UserService = require('../services/UserService');
const { badRequest, serverError, ok } = require('../helpers/httpHelper');
const MissingParamError = require('../errors/MissingParamError');
const InvalidParamError = require('../errors/InvalidParamError');

class SignupController {

    async store(req, res) {
		try {
            const fields = req.body;
            const { email, password, passwordConfirmation } = fields;      
            const requiredFields = ['name', 'email', 'password'];
            const missingParams = UserService.checkRequiredParams(fields, requiredFields);

            if (missingParams) {
                return res.status(400).json(badRequest(new MissingParamError(missingParams)));
            }

            if (password !== passwordConfirmation) {
                return res.status(400).json(badRequest(new NotFoundError("A senha e confirmação de senha são diferentes")));
            }

            let userExists = await UserService.findByEmail(email);
            if (userExists) {
                const error = ['Este E-email já foi cadastrado no sistema'];
                return res.status(400).json(badRequest(new InvalidParamError(error)));
            }

            let user = await UserService.create(fields);
            
            delete user.password;

			return res.status(200).json(ok(user));
		} catch (err) {
			return res.status(500).json(serverError());
		}
	}

}

module.exports = new SignupController();