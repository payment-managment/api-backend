const categoryModel = require('../models/categoryModel')

const getAll = async () => {
    let rows = await categoryModel.getAll();

    return rows;
}

const create = async (body) => {
    const result = await categoryModel.create(body);
    let data = categoryModel.getById(result)

    return data;
}

const update = async (body, id) => {
    const update = await categoryModel.update(body, id);
    const update_category = await categoryModel.getById(id)

    return update_category;

};


const remove = async (id) => {
    const result = await categoryModel.remove(id);

    return result
}

module.exports = {
    getAll,
    create,
    update,
    remove
}