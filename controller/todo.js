
const { getTodos, createTodo, updateTodo, deleteTodo } = require('../models/todo');
const CustomError = require('../utils/CustomError');
const constant=require('../constant/constant')
const listTodos = async (req, res, next) => {
    try {
        const userId = req.user.userId;
        const { search, page, pageSize, sortBy, sortOrder } = req.query;
        const todos = await getTodos(userId, search, page, pageSize, sortBy, sortOrder);
        return res.status(200).json({
            code: 200,
            todos,
        });
    } catch (error) {
        next(error);
    }
};

const addTodo = async (req, res,next) => {
    try {
        const userId = req.user.userId;
        const { title, description } = req.body;
        const todo = await createTodo(userId, title, description);
        return res.status(200).json({
            code: 200,
            todo,
        });
    } catch (error) {
        next(error);
    }
};

const editTodo = async (req, res,next) => {
    try {
        const { todoId } = req.params;
        if (!todoId) {
            throw new CustomError(400, constant.ERROR.ID_REQUIRED);
        }
        const { title, description, completed } = req.body;
        const todo = await updateTodo(todoId, title, description, completed);
        return res.status(200).json({
            code: 200,
            todo,
        });
    } catch (error) {
        next(error);
    }
};

const removeTodo = async (req, res,next) => {
    try {
        const { todoId } = req.params;
        if (!todoId) {
            throw new CustomError(400, constant.ERROR.ID_REQUIRED);
        }
        const deleteResult = await deleteTodo(todoId);
        if (!deleteResult) {
            throw new CustomError(404, constant.ERROR.ITEM_NOT_FOUND);
        }
        return res.status(200).json({
            code: 200,
            message:constant.SUCCESS.DELETD,
        });
    } catch (error) {
        next(error);
    }
};

module.exports = { listTodos, addTodo, editTodo, removeTodo };
