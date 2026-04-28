const pool = require('../config/db')

const getAll = async () => {
    let [rows] = await pool.query('SELECT * FROM products');

    return rows;
}

const getById = async (id) => {
    const [rows] = await pool.query('SELECT * FROM products where id = ?', [id])

    return rows;
}

const create = async (body) => {
    let sql = 'insert into products (name, category, description) value (?, ?, ?);';
    let data = [body.name, body.category, body.description]
    const [result] = await pool.query(sql, data);

    return result.insertId;
}

const update = async (body, id) => {
    const sql = 'update products set name = ? ,category = ?, description = ? WHERE id = ? '
    const { name, category, description } = body;
    const [update] = await pool.query(sql, [name, category, description, id]);

    return update;
}

const remove = async (id) => {
    const sql = `DELETE FROM products WHERE id = ?`;
    const [result] = await pool.query(sql, id);

    return result;
}


module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
}