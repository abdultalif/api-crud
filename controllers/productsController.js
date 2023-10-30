
const Validator = require("fastest-validator");
const v = new Validator();
const { Product } = require('../models');

const getAllProducts = async (req, res) => {
    const products = await Product.findAll();
    res.json(products);
}

const getProductById = async (req, res) => {
    const id = req.params.id;
    const products = await Product.findByPk(id);
    res.json(products || {});
}

const storeProduct = async (req, res) => {
    const schema = {
        name: "string",
        brand: "string",
        description: "string|optional"
    }

    const validate = v.validate(req.body, schema);
    if (validate.length) {
        return res.status(400).json(validate);
    }
    const product = await Product.create(req.body);
    res.json(product);
}


const updateProduct = async (req, res) => {
    const id = req.params.id;
    let product = await Product.findByPk(id);
    if (!product) {
        return res.json({ message: 'Product Not Found' });
    }
    const schema = {
        name: "string|optional",
        brand: "string|optional",
        description: "string|optional"
    }
    const validate = v.validate(req.body, schema);
    if (validate.length) {
        return res.status(400).json(validate);
    }

    product = await product.update(req.body);
    res.json(product);
}

const deleteProduct = async (req, res) => {
    const id = req.params.id;
    const product = await Product.findByPk(id);
    if (!product) {
        return res.json({ message: 'Product Not Found' });
    }

    await product.destroy();
    res.json({ massage: "Product is deleted" });
}

module.exports = {
    getAllProducts,
    getProductById,
    storeProduct,
    updateProduct,
    deleteProduct
}