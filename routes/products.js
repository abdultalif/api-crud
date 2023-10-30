const express = require('express');
const router = express.Router();
const Validator = require("fastest-validator");
const v = new Validator();
const { Product } = require('../models');

router.post('/', async (req, res) => {
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
});

module.exports = router;