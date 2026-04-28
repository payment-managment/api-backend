const categoryService = require('../services/categoryService')
const categoryModel = require('../models/categoryModel')

const getAll = async (req, res) => {
    try {
        let rows = await categoryService.getAll() // [rows] = destructuring
        console.log(rows); // rows[0]

        res.status(200).json({
            result: true,
            msg: "Get all category successfully",
            data: rows
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            result: false,
            msg: "Internal Server Error",
        })
    }
}

const create = async (req, res) => {
    try {

        const [result] = await categoryService.create(req.body);

        return res.json({
            result: true,
            msg: "Create category Successfully",
            data: result
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            result: false,
            msg: error.message,
        })
    }

}

const update = async (req, res) => {
    try {
        const id = req.params.id;
        const old_category = await categoryModel.getById(id);

        if (old_category.length == 0) {
            return res.status(404).json({
                result: false,
                msg: "Category Not found"
            })
        }

        const update_category = await categoryService.update(req.body, id);

        return res.json({
            result: true,
            msg: "Update Category Successfully",
            data: update_category
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            result: false,
            msg: "Internal server Error",
        })
    }
}

const del = async (req, res) => {
    try {
        const id = req.params.id;

        const old_category = await categoryModel.getById(id);

        if (old_category.length == 0) {
            return res.status(404).json({
                result: false,
                msg: "Category Not found"
            })
        }
        const result = await categoryService.remove(id);


        return res.json({
            result: true,
            msg: "Delete category Successfully"
        });

    } catch (error) {
        return res.status(500).json({
            result: false,
            msg: error.message
        });
    }
}

module.exports = {
    getAll,
    create,
    update,
    del,
}

