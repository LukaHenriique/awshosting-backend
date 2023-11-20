const Todo = require('../../models/todo');

const addTodo = async (req, res) => {
    try {
        const { task } = req.body;
        const todo = new Todo({
        task
        });
        await todo.save();
        res.status(200).json({
        success: true,
        data: todo
        });
    } catch (error) {
        res.status(500).json({
        success: false,
        error: error.message
        });
    }
};

module.exports = addTodo;