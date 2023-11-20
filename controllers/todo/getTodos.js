const Todo = require('../../models/todo');

const getTodos = async (req, res) => {
    try {
        const todos = await Todo.find();
        res.status(200).json({
        success: true,
        data: todos
        });
    } catch (error) {
        res.status(500).json({
        success: false,
        error: error.message
        });
    }
};

module.exports = getTodos;