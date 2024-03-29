const {Product} = require('../models/Product');

const ProductController = {
    getAll: (req, res) => {
        Product.find().populate("category", "name")
        .then((products) => {
            return res.status(200).json(products)
        })
        .catch((err) => {
            return res.status(500).json(err)
        }) 
    },
    getById : (req, res) => {
        const id = req.params.id
        Product.findById(id)
        .then((product) => {
            if (product) {
                return res.status(200).json(product)
            } else {
                return res.status(404).send("Urun bulunamadı")
            }
        })
        .catch((err) => {
            return res.status(500).json(err)
        })

    },
    create : (req, res) => {
        const newProduct = new Product ({
            name : req.body.name,
            price : req.body.price,
            description : req.body.description,
            category : req.body.category 
        })
        newProduct.save()
        .then((product) => {
            return res.status(201).json(product)
        })
        .catch((err) => {
            return res.status(500).json(err)
        })  
    },
    delete : (req, res) => {
        const id = req.params.id
        Product.findByIdAndDelete(id)
        .then((product) => {
            if (product) {
                return res.status(200).json(product)
            } else {
                return res.status(404).send("Urun bulunamadı")
            }
        })
        .catch((err) => {
            return res.status(500).json(err)
        })     
    } 
}

module.exports = {
    ProductController
}