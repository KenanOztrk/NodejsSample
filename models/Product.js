const { default: mongoose } = require("mongoose")

const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String,
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    }
},
{
    timestamps: true
}

)

const Product = mongoose.model('Product', ProductSchema)

module.exports = {
    Product
}