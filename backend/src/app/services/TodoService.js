const Todo = require('../models/Todo');

class TodoService {

    checkRequiredParams(fields, requiredFields) {
        let missingParams = [];
        for (const field of requiredFields) {
            if(!fields[field]) {
                const error = `O parâmetro '${field}' é obrigatório`;
                missingParams.push(error);
            }
        }

        if (missingParams.length === 0) {
            missingParams = null;
        }

        return missingParams;
    }

    async getTodos(userId) {
        const todos = await Todo.find({ user: userId });
        return todos;
    }

    async getTodo(id) {
        const todo = await Todo.findOne({ _id: id });
        return todo;
    }

    async create({ task, user }) {
        const todo = await Todo.create({ task, user});
        return todo;
    }

    async delete(id) {
        const todo = await Todo.deleteOne({ _id: id });
        return todo;
    }

}

module.exports = new TodoService();