const express = require('express')
const app = express()

const productExpressRoute = express.Router()

let ProductSchema = require('../model/product.model')


productExpressRoute.route('/').get((req, res) => {
    ProductSchema.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})


productExpressRoute.route('/create-product').post((req, res, next) => {
    console.log(req.body)
    ProductSchema.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})


productExpressRoute.route('/get-product/:id').get((req, res) => {
    ProductSchema.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})


productExpressRoute.route('/remove-product/:id').delete((req, res, next) => {
    ProductSchema.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

module.exports = productExpressRoute