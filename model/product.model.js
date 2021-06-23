const mongoose = require('mongoose')
const Schema = mongoose.Schema

let productSchema = new Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    price: {
        type: Number
    },
    count: {
        type: Number
    },
    imageUrl: {
        type: String
    }
}, {
    collection: 'products'
})

module.exports = mongoose.model('ProductSchema', productSchema)