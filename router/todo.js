
const express = require('express');
 const { todoController } = require('../controller')
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Todos
 *   description: Todo management
 */

/**
 * @swagger
 * /todo/list:
 *   get:
 *     summary: Lists all the todos
 *     tags: [Todos]
 *     responses:
 *       200:
 *         description: The list of todos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Todo'
 */
router.get('/list', todoController.listTodos);

/**
 * @swagger
 * /todo:
 *   post:
 *     summary: Adds a new todo
 *     tags: [Todos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Todo'
 *     responses:
 *       201:
 *         description: Todo created successfully
 */
router.post('/', todoController.addTodo);

/**
 * @swagger
 * /todo/{todoId}:
 *   put:
 *     summary: Updates an existing todo
 *     tags: [Todos]
 *     parameters:
 *       - in: path
 *         name: todoId
 *         schema:
 *           type: string
 *         required: true
 *         description: The id of the todo
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Todo'
 *     responses:
 *       200:
 *         description: Todo updated successfully
 */
router.put('/:todoId', todoController.editTodo);

/**
 * @swagger
 * /todo/{todoId}:
 *   delete:
 *     summary: Deletes a todo
 *     tags: [Todos]
 *     parameters:
 *       - in: path
 *         name: todoId
 *         schema:
 *           type: string
 *         required: true
 *         description: The id of the todo
 *     responses:
 *       204:
 *         description: Todo deleted successfully
 */
router.delete('/:todoId', todoController.removeTodo);

module.exports = router;
