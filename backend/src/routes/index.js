const routes = require('express').Router();
const authMiddleware = require('../app/middlewares/auth');

const multer = require('multer');
const uploadConfig = require('../app/config/upload');
const upload = multer(uploadConfig);

const SignupController = require('../app/controllers/SignupController');
const SessionController = require('../app/controllers/SessionController');
const UserController = require('../app/controllers/UserController');
const TodoController = require('../app/controllers/TodoController');

routes.get('/', (req, res) => {
    return res.status(200).json({
        message: 'App taks is works'
    });
});

routes.post('/session', SessionController.store);

routes.post('/signup', SignupController.store);

routes.get('/users/me', authMiddleware,  UserController.show);
routes.put('/users', authMiddleware,  UserController.update);
routes.post('/users/picture', authMiddleware, upload.single('image'), UserController.uploadPicture);

routes.get('/todos', authMiddleware, TodoController.index);
routes.post('/todos', authMiddleware, TodoController.store);
routes.delete('/todos/:id', authMiddleware, TodoController.destroy);
routes.put('/todos/status', authMiddleware, TodoController.updateStatus);


module.exports = routes;
