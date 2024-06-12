
const pool = require('../utils/db');

const getTodos = async (userId, searchQuery, page, pageSize, sortBy, sortOrder) => {
    let query = 'SELECT * FROM todos WHERE user_id = $1';
    const queryParams = [userId];
    if (searchQuery) {
        query += ` AND (title ILIKE $${queryParams.length + 1} OR description ILIKE $${queryParams.length + 2})`;
        queryParams.push(`%${searchQuery}%`, `%${searchQuery}%`);
    }
    if (sortBy) {
        query += ` ORDER BY ${sortBy} ${sortOrder === 'desc' ? 'DESC' : 'ASC'}`;
    }
    if (page && pageSize) {
        const offset = (page - 1) * pageSize;
        query += ` LIMIT ${pageSize} OFFSET ${offset}`;
    }
    const { rows } = await pool.query(query, queryParams);
    return rows;
};

const createTodo = async (userId, title, description) => {
    const { rows } = await pool.query('INSERT INTO todos (user_id, title, description) VALUES ($1, $2, $3) RETURNING *', [userId, title, description]);
    return rows[0];
};

const updateTodo = async (todoId, title, description, completed) => {
    const { rows } = await pool.query('UPDATE todos SET title = $1, description = $2, completed = $3 WHERE id = $4 RETURNING *', [title, description, completed, todoId]);
    return rows[0];
};

const deleteTodo = async (todoId) => {
    // const result= await pool.query('DELETE FROM todos WHERE id = $1', [todoId]);
    // return result;
    const result= await pool.query(
        'UPDATE todos SET deleted_at = CURRENT_TIMESTAMP WHERE id = $1 RETURNING *',
        [todoId]
    );
    return result.rows[0];
};

module.exports = { getTodos, createTodo, updateTodo, deleteTodo };
