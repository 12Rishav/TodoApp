const express = require('express');
const { todoController } = require('../controller')
const router = express.Router();

router.get('/list', todoController.listTodos);
router.post('/', todoController.addTodo);
router.put('/:todoId', todoController.editTodo);
router.delete('/:todoId', todoController.removeTodo);

module.exports = router;