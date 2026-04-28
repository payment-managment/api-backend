const pool = require('../config/db')
const productModel = require('../models/productModel')

const getAll = async function () {
    let rows = await productModel.getAll();

    return rows;
}

const create = async (body) => {
    const result = await productModel.create(body);
    const data = productModel.getById(result)

    return data;
}

const update = async (id, body) => {
    const update = await productModel.update(body, id);
    const update_product = productModel.getById(id) 

    return update_product;
}

const remove = async (id) => {
    const result = await productModel.remove(id);

    return result;
}

module.exports = {
    getAll,
    create,
    update,
    remove
}