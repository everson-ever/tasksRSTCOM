const TodoService = require('../services/TodoService');
const { badRequest, serverError, ok } = require('../helpers/httpHelper');
const NotFoundError = require('../errors/notFoundError');

class TodoController {

    async index(req, res) {
        try {
            const { userId } = req;
            const todos = await TodoService.getTodos(userId);
            return res.status(200).json(ok(todos));
        }
        catch(error) {
            return res.status(500).json(serverError());
        }
    }

    async store(req, res) {
        try {
            const { task } = req.body;
            const { userId } = req;

            const todo = await TodoService.create({ task, user: userId });
            return res.status(201).json(ok(todo));
        }
        catch(error) {
            return res.status(500).json(serverError());
        }
    }

    async destroy(req, res) {
        try {
            const { id } = req.params;
            const { userId } = req;
            
            const todo = await TodoService.getTodo(id);
            if (!todo || todo.user != userId) {
                return res.status(404).json(badRequest(new NotFoundError("Tarefa não encontrada")));
            }

            const deleted = await TodoService.delete(id);

            return res.status(201).json(ok(deleted));
        }
        catch(error) {
            return res.status(500).json(serverError());
        }
    }

}

module.exports = new TodoController();