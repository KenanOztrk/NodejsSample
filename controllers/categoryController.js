const { Category } = require('../models/Category');

const CategoryController = {
    getAll: (req, res) => {
        Category.find()
        .then((categories) => {
            return res.status(200).json(categories)
        })
        .catch((err) => {
            return res.status(500).json(err)
        })
    },
    getById : (req, res) => {
        const id = req.params.id
        Category.findById(id)
        .then((category) => {
            if (category) {
                return res.status(200).json(category)
            } else {
                return res.status(404).send("Kategori bulunamadı")
            }
        })
        .catch((err) => {
            return res.status(500).json(err)
        })
    },
    create : (req, res) => {
        const newCategory = new Category({
            name: req.body.name
        });
        newCategory.save()
        .then((category) => {
            return res.status(201).json(category)
        })
        .catch((err) => {
            return res.status(500).json(err)
        })
        
    },
    delete : (req, res) => {
        const id = req.params.id
        Category.findByIdAndDelete(id)
        .then((category) => {
            if (category) {
                return res.status(200).json(category)
            } else {
                return res.status(404).send("Kategori bulunamadı")
            }
        }) 
    }


}

module.exports = {

    CategoryController
}

