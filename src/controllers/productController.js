const productService = require('../services/productService')
const productModel = require('../models/productModel')

const getAll = async (req, res) => {
    try {
        let rows = await productService.getAll(); // [rows] = destructuring
        console.log(rows); // rows[0]

        res.status(200).json({
            result: true,
            msg: "Get all product successfully",
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
        const result = await productService.create(req.body);

        return res.json({
            result: true,
            msg: "Create Product Successfully",
            data: result[0]
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            result: false,
            msg: "Internal Server Error",
        })
    }

}

const update = async (req, res) => {
    try {
        const id = req.params.id
        const old_product = await productModel.getById(id);

        if (old_product.length == 0) {
            return res.status(404).json({
                result: false,
                msg: "Product Not found"
            })
        }

        const [update_product] = await productService.update(id, req.body)

        return res.json({
            result: true,
            msg: "Update Product Successfully",
            data: update_product
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
        const old_product = await productModel.getById(id);

        if (old_product.length == 0) {
            return res.status(404).json({
                result: false,
                msg: "Product Not found"
            })
        }

        const result = await productService.remove(id);

        return res.json({
            result: true,
            msg: "Delete Product Successfully"
        });

    } catch (error) {
        console.log(error);
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