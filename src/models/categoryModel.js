const pool = require('../config/db');

const getAll = async () => {
    let [rows] = await pool.query('SELECT * FROM category');

    return rows;
}

const getById = async (id) => {
    let [rows] = await pool.query('SELECT * FROM category where id = ?', [id]);

    return rows;
}

const create = async (body) => {
    let sql = 'insert into category (name) value (?);';
    let data = [body.name]
    const [result] = await pool.query(sql, data);

    return result.insertId;
}

const update = async (body, id) => {
    const name = body.name;
    const sql = 'update category set name = ? Where id = ?'
    const [update] = await pool.query(sql, [name, id]);

    return update;
}

const remove = async (id) => {
    const sql = 'DELETE FROM category where id = ?';
    const [result] = await pool.query(sql, [id]);

    return result;
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
}