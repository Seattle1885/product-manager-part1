const Product = require('../models/product.model'),
    mongoose = require('mongoose');

module.exports = {
    index: (req, res) => {
        Product.find()
            .then(data => res.json({results:data})) // results is the key and data is an array value
            .catch(err => res.json(err.errors))
    },
    create: (req, res) => { 
        Product.create(req.body)
            .then(data => res.json({results: data}))
            .catch(err => res.json(err.errors))
    },
    show: (req, res) => {
        Product.findOne({_id:req.params.id})
            .then(data => res.json({results:data}))
            .catch(err => res.json(err.errors))
    },
    update: (req, res) => {
        Product.findOneAndUpdate({_id:req.params.id}, req.body,{useFindAndModify:true, runValidators:true})
            .then(data => {
                res.redirect(`/api/product/${product._id}`)
                res.json({results:data})
            })
            .catch(err => res.json(err.errors))
    },
    delete : (req, res) => {
        Product.deleteOne({_id:req.params.id})
        .then(data => res.json({results:data}))
        .catch(err => res.json(err.errors))
    }
    
}